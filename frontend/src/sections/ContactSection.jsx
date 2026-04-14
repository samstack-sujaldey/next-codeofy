import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 bg-linear-to-b from-white to-blue-400/70 text-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-black max-w-2xl mx-auto">
            Ready to start your project? Get in touch with us today and let's
            discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="space-y-8">
            <div className="bg-white/30 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-black text-sm">info@codeofy.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-black text-sm">+91 6377385333</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black text-sm">
                      Jaipur, Rajasthan, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/30 backdrop-blur-md border border-white/10 rounded-2xl p-10 text-center">
              <MapPin size={40} className="mx-auto mb-4 text-blue-950" />
              <h4 className="text-xl font-semibold mb-2">Our Location</h4>
              <p className="text-black text-sm">Interactive map coming soon</p>
            </div>
          </div>

          <div className="bg-white/30 backdrop-blur-md border border-white/10 rounded-2xl p-10">
            <h3 className="text-2xl font-semibold mb-8">Send Message</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-950"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-950 text-white py-3 rounded-lg font-semibold hover:scale-105 transition duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
