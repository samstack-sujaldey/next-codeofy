"use client";
import { useRef, useState } from "react";
import Rightcard from "./Rightcard";
import toast, { Toaster } from "react-hot-toast";
import ScrollReveal from "../ScrollReveal";

function Leftcard() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_W3FORMS_KEY ||
        "66616ae7-440d-4815-9499-e0a1af32de45",
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success(
          "Message sent successfully! Our support team will contact you soon.",
          {
            duration: 5000,
          },
        );
        event.target.reset();
      } else {
        setResult("Error");
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setLoading(false); // 🟢 Stop loading
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="-mt-px w-full py-12 px-5 bg-linear-to-b from-blue-400/70 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ScrollReveal direction="left" duration={0.8}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 mt-7 transition-colors duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Send us a message
              </h2>

              <form ref={form} onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 dark:text-gray-300">
                      First Name
                    </label>
                    <input
                      name="first_name"
                      type="text"
                      placeholder="John"
                      required
                      className="w-full mt-1 border rounded-lg p-3 text-gray-900 dark:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 dark:text-gray-300">
                      Last Name
                    </label>
                    <input
                      name="last_name"
                      type="text"
                      placeholder="Doe"
                      required
                      className="w-full mt-1 border rounded-lg p-3 text-gray-900 dark:text-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-300">
                    Work Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full mt-1 border rounded-lg p-3 text-gray-900 dark:text-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-300">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full mt-1 border rounded-lg p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Billing">Billing</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    placeholder="How can we help?"
                    className="w-full border rounded-lg mt-1 p-3 text-gray-900 dark:text-gray-300"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-600 text-white py-3 rounded-full transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.6}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-9 mt-9 transition-colors duration-300">
              <Rightcard />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

export default Leftcard;
