import { colorShem } from '@/constant/source';
import React from 'react';
import { MdCleaningServices } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { GoProject } from "react-icons/go";
import { BookText  } from 'lucide-react';
import { LiaToolsSolid } from "react-icons/lia";
import { MdOutlineContactPage } from "react-icons/md";
import { GrInfo } from "react-icons/gr";

type TagType = 'about' | 'service' | 'contact' | 'skill' | 'project' | 'education' | 'tools' ;

const Commoncard = ({tag,name,title,children}:{tag:TagType,name:string,title:string,children: React.ReactNode}) => {
  const {text_color}=colorShem;

  const stats = {
    "about":{  icon: <GrInfo className="text-gray-600 w-4 h-4" /> },
    "service":{ icon: <MdCleaningServices className="text-gray-600 w-5 h-5" /> },
    "contact":{ icon: <MdOutlineContactPage className="text-gray-600 w-5 h-5" /> },
    "skill":{ icon: <SiHyperskill className="text-gray-600 w-5 h-5" /> },
    "project":{ icon: <GoProject className="text-gray-600 w-5 h-5" /> },
    "education":{ icon: <BookText   className="text-gray-600 w-5 h-5" /> },
    "tools":{ icon: <LiaToolsSolid   className="text-gray-600 w-5 h-5" /> },
  }


  return (
    <div className="shadow-2xl  shadow-gray-100 p-2 rounded-2xl border border-gray-100  w-full">
     <div className='px-4 py-2'>
     <div className='rounded-full text-gray-600  px-2 py-1 shadow-2xl shadow-gray-100 border border-gray-200 w-fit flex items-center'>
        {stats[tag].icon}
        {name}
      </div>
      <div>
        <h1 className={`${text_color} text-3xl font-semibold py-3`}>{title}</h1>
        {children}
      </div>
     </div>
    </div>
  );
}

export default Commoncard;
