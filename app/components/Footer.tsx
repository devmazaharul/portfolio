// components/Footer.tsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer

      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
