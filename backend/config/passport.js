import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as LinkedInStrategy } from "passport-linkedin-oauth2";
import { Strategy as TwitterStrategy } from "@superfaceai/passport-twitter-oauth2";

import User from "../models/User.js";

// --- 1. GOOGLE STRATEGY ---
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;
        const googleName = profile.displayName;

        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // 1. Check if email exists for Account Linking
          if (email) {
            user = await User.findOne({ email: email });
          }

          if (user) {
            // Link Google and update name
            user.googleId = profile.id;
            user.username = googleName;
            await user.save();
          } else {
            // Brand new user
            user = await User.create({
              googleId: profile.id,
              username: googleName,
              email: email,
            });
          }
        } else {
          // 2. Returning Google user: Keep name synced!
          if (user.username !== googleName) {
            user.username = googleName;
            await user.save();
          }
        }
        done(null, user);
      } catch (err) {
        console.error("Google Auth Error:", err);
        done(err, null);
      }
    },
  ),
);

// --- 2. GITHUB STRATEGY ---
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/github/callback", // Ensure this matches your URL setup!
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const githubName = profile.username || profile.displayName;
        const email = profile.emails?.[0]?.value;

        let user = await User.findOne({ githubId: profile.id });

        if (!user) {
          // 1. Check if email already exists for Account Linking
          if (email) {
            user = await User.findOne({ email: email });
          }

          if (user) {
            user.githubId = profile.id;
            user.username = githubName;
            await user.save();
          } else {
            // Brand new user
            user = await User.create({
              githubId: profile.id,
              username: githubName,
              email: email,
            });
          }
        } else {
          if (user.username !== githubName) {
            user.username = githubName;
            await user.save();
          }
        }

        done(null, user);
      } catch (err) {
        console.error("GitHub Auth Error:", err);
        done(err, null);
      }
    },
  ),
);

// --- 3. LINKEDIN STRATEGY ---
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/linkedin/callback",
      scope: ["openid", "profile", "email"],
      state: true,
      skipUserProfile: true,
    },
    async (accessToken, refreshToken, _profile, done) => {
      try {
        const res = await fetch("https://api.linkedin.com/v2/userinfo", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        const data = await res.json();

        const linkedinId = data.sub;
        const email = data.email;

        // 2. THE FALLBACK: If data.name is missing, piece it together from first/last name
        const realName = data.name || `${data.given_name} ${data.family_name}`;

        let user = await User.findOne({ linkedinId: linkedinId });

        if (!user) {
          if (email) {
            user = await User.findOne({ email: email });
          }

          if (user) {
            // Link existing account & FORCE name update
            user.linkedinId = linkedinId;
            user.username = realName;
            await user.save();
          } else {
            // Brand new user
            user = await User.create({
              linkedinId: linkedinId,
              username: realName,
              email: email,
            });
          }
        } else {
          // Returning LinkedIn user: keep name perfectly synced!
          if (user.username !== realName) {
            user.username = realName;
            await user.save();
          }
        }

        done(null, user);
      } catch (err) {
        console.error("LinkedIn Manual Fetch Error:", err);
        done(err, null);
      }
    },
  ),
);

// --- 4. TWITTER (X) STRATEGY ---
passport.use(
  new TwitterStrategy(
    {
      clientID: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/twitter/callback",
      clientType: "confidential",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ twitterId: profile.id });

        if (!user) {
          const email = profile.emails?.[0]?.value;

          // INTERCEPT: If X didn't give us an email, STOP right here.
          if (!email) {
            return done(null, false, {
              message: "email_required",
              profileData: {
                twitterId: profile.id,
                name: profile.username || profile.displayName,
              },
            });
          }

          // If they DID provide an email, proceed as normal
          user = await User.findOne({ email: email });
          if (user) {
            user.twitterId = profile.id;
            await user.save();
          } else {
            user = await User.create({
              twitterId: profile.id,
              username: profile.username || profile.displayName,
              email: email,
            });
          }
        }
        done(null, user);
      } catch (err) {
        console.error("Twitter Auth Error:", err);
        done(err, null);
      }
    },
  ),
);

// --- SESSION MANAGEMENT (Keep exactly as before) ---
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    if (user) user.password = undefined;
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
