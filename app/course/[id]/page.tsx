"use client";

import { useEffect, useState } from "react";
import { cardDetlisData } from "@/data/Card";
import Assignments from "@/components/Assigments";
import GradePage from "@/components/Grade";
import EnrollmentPage from "@/components/Enrollment";
import Files from "@/components/Files";
import { addId } from "@/lib/features/course/Couresdet";
import { useDispatch, useSelector } from "react-redux";

type CourseDetailProps = {
  params: {
    id: number;
  };
};

const CourseDetail = ({ params }: CourseDetailProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("1");
  const pagenumber = useSelector((state: any) => state.course.id);

  const dispatch = useDispatch();

  
  useEffect(() => {
    if (pagenumber) {
      setSelectedTab(pagenumber);
    }
  }, [pagenumber]);

  const handleTabClick = (id: string) => {
    setSelectedTab(id);
    dispatch(addId(id));
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "1":
        return <Assignments />;
      case "2":
        return <GradePage />;
      case "3":
        return <EnrollmentPage />;
      case "4":
        return <Files />;
      case "5":
        return <p>Dummy data for Syllabus</p>;
      case "6":
        return <p>Dummy data for Outcomes</p>;
      case "7":
        return <p>Dummy data for Rubrics</p>;
      case "8":
        return <p>Dummy data for Quizzes</p>;
      case "9":
        return <p>Dummy data for Modules</p>;
      case "10":
        return <p>Dummy data for BigBlueButton</p>;
      case "11":
        return <p>Dummy data for Collaborations</p>;
      case "12":
        return <p>Dummy data for Attendance</p>;
      case "13":
        return <p>Dummy data for New Analytics</p>;
      default:
        return <Assignments />;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4">
        {cardDetlisData.map((e) => (
          <div
            key={e.id}
            className={`px-4 py-3 font-bold cursor-pointer ${
              selectedTab === e.id ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleTabClick(e.id)}
          >
            {e.title}
          </div>
        ))}
      </div>
      <div className="ml-14 p-4">{renderTabContent()}</div>
    </div>
  );
};

export default CourseDetail;
