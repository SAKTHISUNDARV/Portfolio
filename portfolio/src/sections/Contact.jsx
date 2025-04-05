import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData and append date
      const formData = new FormData(form.current);
      formData.append('date', new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      toast.success('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      href: 'https://www.linkedin.com/in/sakthi-sundar-8279062a1',
      icon: <FaLinkedin className="text-blue-500 text-xl sm:text-2xl" />,
      text: 'LinkedIn Profile',
      newTab: true
    },
    {
      href: 'https://github.com/SAKTHISUNDARV',
      icon: <FaGithub className="text-gray-400 text-xl sm:text-2xl" />,
      text: 'GitHub Profile',
      newTab: true
    },
    {
      href: 'mailto:sundarsakthi450@gmail.com',
      icon: <FaEnvelope className="text-red-500 text-xl sm:text-2xl" />,
      text: 'sundarsakthi450@gmail.com',
      newTab: false
    },
    {
      href: 'https://www.google.com/maps/place/Tamil+Nadu,+India',
      icon: <FaMapMarkerAlt className="text-green-500 text-xl sm:text-2xl" />,
      text: 'Tamil Nadu, India',
      newTab: true
    }
  ];

  return (
    <section
      id="contact-section"
      className="flex items-center justify-center w-full min-h-[calc(100vh-55px)] bg-gray-800 p-4"
    >
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      
      <div className="container max-w-5xl bg-[#222630] text-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700/50">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          CONTACT
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1fr_min-content_1fr] items-start">
          {/* Contact Details */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.newTab ? "_blank" : "_self"}
                rel={link.newTab ? "noopener noreferrer" : ""}
                className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 bg-[#2a2e38] p-3 sm:p-4 rounded-lg hover:bg-[#333841] transition-colors duration-300"
              >
                {link.icon}
                <span className="text-xs sm:text-sm">{link.text}</span>
              </a>
            ))}
          </div>

          {/* Divider Line */}
          <div className="hidden lg:block w-px bg-gray-600 h-[90%] mx-2 self-center" />

          {/* Contact Form */}
          <div className="p-4 sm:p-6 rounded-lg">
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">
                  Your Name
                </label>
                <input
                  className="w-full p-2 sm:p-3 bg-[#2a2e38] rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  minLength="2"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">
                  Your Email
                </label>
                <input
                  className="w-full p-2 sm:p-3 bg-[#2a2e38] rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full p-2 sm:p-3 bg-[#2a2e38] rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                  placeholder="Hey, I'd love to collaborate with you!"
                  rows="4"
                  name="message"
                  required
                  minLength="10"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-md text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;