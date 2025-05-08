// components/ContactForm.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Commoncard from './Commoncard';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
    if(!formData.email || !formData.name ){
      toast.error('Please provide name and email', {
        description: new Date().toLocaleTimeString('en-us', {
          timeStyle: 'full',
        }),
        action: {
          label: 'Undo',
          onClick: () => console.log('Undo'),
        },
      });
      return 
    }
    toast('Thans for contact', {
      description: new Date().toLocaleTimeString('en-us', {
        timeStyle: 'full',
      }),
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo'),
      },
    });
  };

  return (
    <Commoncard title="Contact us" name="contact" tag="contact">
      <p className="text-gray-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugit
        animi dicta quam eius rerum quod eligendi quos porro dolores.
      </p>
      <motion.div
        className="max-fit mx-auto p-4 my-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
          <motion.div
            className="mb-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Name</Label>
              <Input type="text" id="name" placeholder="Name" />
            </div>
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </motion.div>

          <motion.div
            className="mb-3"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2  border rounded-md"
              rows={4}
            />
          </motion.div>

          <button className="btn btn-primary text-sm"> Send Message</button>
        </form>
      </motion.div>
    </Commoncard>
  );
};

export default ContactForm;
