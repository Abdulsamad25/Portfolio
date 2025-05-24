import React, { useState, useRef, useEffect } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 px-4 py-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 md:mb-10 font-bold text-3xl md:text-4xl text-center">
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-transparent">
            Get In Touch
          </span>
        </h2>

        <div className="gap-12 grid md:grid-cols-2">
          <div>
            <h3 className="mb-6 font-semibold text-xl md:text-2xl">
              Let's work together
            </h3>
            <p className="mb-8 text-gray-300 leading-relaxed">
              I'm always interested in new opportunities and interesting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={20} />
                <span>
                  <a href="mailto:samadolalekan15@gmail.com">
                    samadolalekan15@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Github className="text-blue-400" size={20} />
                <span>
                  <a
                    href="https://github.com/Abdulsamad25"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/Abdulsamad25
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="text-blue-400" size={20} />
                <span>
                  <a
                    href="https://www.linkedin.com/in/yahaya-abdulsamad-051b1b306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/yahaya-abdulsamad
                  </a>
                </span>
              </div>
            </div>
          </div>

          <form className="space-y-6" ref={form} onSubmit={sendEmail}>
            <div>
              <label className="block mb-2 font-medium text-sm">Name</label>
              <input
                type="text"
                name="from_name"
                className="bg-gray-800 px-4 py-3 border border-gray-700 focus:border-blue-400 rounded-lg focus:outline-none w-full transition-colors"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-sm">Email</label>
              <input
                type="email"
                name="from_email"
                className="bg-gray-800 px-4 py-3 border border-gray-700 focus:border-blue-400 rounded-lg focus:outline-none w-full transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-sm">Message</label>
              <textarea
                name="message"
                rows={5}
                className="bg-gray-800 px-4 py-3 border border-gray-700 focus:border-blue-400 rounded-lg focus:outline-none w-full transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg w-full hover:scale-105 transition-all cursor-pointer transform"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="mt-4 text-green-600 text-center">
                Message sent successfully!
              </p>
            )}
            {success === false && (
              <p className="mt-4 text-red-600 text-center">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
