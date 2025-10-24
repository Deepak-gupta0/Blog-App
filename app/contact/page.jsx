"use client";
import { useRef, useState } from "react";
import { Mail, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const form = useRef();

  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full h-screen flex flex-col justify-center md:max-w-[750px] md:mt-7">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8    transform transition-all duration-500"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Contact Us
            </h1>
            <p className="text-gray-600 text-sm">We'd love to hear from you</p>
          </div>

          {submitted ? (
            <div className="text-center py-12 animate-in fade-in duration-500">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Message Sent!
              </h2>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <User
                      className={`w-5 h-5 transition-colors ${
                        focused === "name" ? "text-indigo-500" : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail
                      className={`w-5 h-5 transition-colors ${
                        focused === "email"
                          ? "text-indigo-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="john@example.com"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-3">
                    <MessageSquare
                      className={`w-5 h-5 transition-colors ${
                        focused === "message"
                          ? "text-indigo-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    placeholder="Tell us what's on your mind..."
                    rows="5"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all resize-none"
                  />
                </div>
              </div>

              <button
              type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
