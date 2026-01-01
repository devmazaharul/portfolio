// components/ContactForm.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Commoncard from './Commoncard';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      toast.error('Please provide name and email', {
        description: new Date().toLocaleTimeString('en-us', {
          timeStyle: 'full',
        }),
      });
      return;
    }
    toast.success('Thanks for contacting!', {
      description: new Date().toLocaleTimeString('en-us', {
        timeStyle: 'full',
      }),
    });
  };

  return (
    <Commoncard title="Contact us" name="contact" tag="contact">
      <p className="text-gray-500 md:w-2/3">
        Let us know how we can help. Fill out the form below to get in touch!
      </p>

      <motion.div
        className="md:w-1/2 my-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-100 rounded-lg px-4 py-3 h-[100px] max-h-[200px] focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </Commoncard>
  );
};

export default ContactForm;
