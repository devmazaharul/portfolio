
import Commoncard from './Commoncard';

import { FaSchool, FaUniversity, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';



const educationData = [
  {
    title: 'Secondary School Certificate (SSC)',
    institute: 'Rupdia High School',
    year: '2021',
    gpa: '4.42',
    icon: <FaSchool className="text-emerald-400 text-xl" />,
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    institute: 'Rupdia smrity College',
    year: '2023',
    gpa: '4.90',
    icon: <FaUniversity className="text-purple-400 text-xl" />,
  },
];

const Education = () => {
  return (
    <Commoncard title="My Education" name="education" tag="education">
     <p className='text-gray-400 md:w-7/8'>
  Strong foundation in science and tech, with a passion for learning and problem-solving — shaping my journey as a developer.
</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-sm shadow-gray-50 rounded-2xl p-6 border border-gray-100  hover:border-gray-200  transition duration-300"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              {edu.icon}
              <h3 className="text-lg font-bold text-gray-800">{edu.title}</h3>
            </div>
            
              <p className="text-sm pb-2 text-gray-600 flex items-center gap-2">
              <FaUniversity className="text-gray-500" /> {edu.institute}
            </p>
            <p className="text-sm pb-2 text-gray-600 flex items-center gap-2">
              <FaCalendarAlt className="text-gray-500" /> Passing Year: {edu.year}
            </p>
            <p className="text-sm  text-gray-600 flex items-center gap-2">
              <FaAward className="text-gray-500" /> GPA: {edu.gpa}
            </p>
            
          </motion.div>
        ))}
      </div>
    </Commoncard>
  );
};

export default Education;
