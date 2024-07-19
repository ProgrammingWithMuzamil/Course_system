"use client"

import { CardData } from "@/data/Card"
import { useRouter } from "next/navigation";

const Course = () => {
  const router = useRouter();
  
  const handleCardClick = (id:any) => {
    router.push(`/course/${id}`);
  };

  return (
    <div className="flex cursor-pointer">
      {
        CardData.map((e) => (
          <div 
            key={e.id} 
            className={`w-52 h-64 mt-40 mx-10 shadow-lg  ${e.color}`} 
            onClick={() => handleCardClick(e.id)}
          >
            <div className="w-16 h-7 bg-white m-5 p-1 rounded-sm">{e.subtitle}</div>
            <div className="w-full h-24 mt-[110px] bg-white p-3">
              <div className={`${e.textcolor} font-bold`}>{e.title}</div>
              <div className="font-bold">{e.desc}</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Course;
