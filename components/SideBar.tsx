"use client"
import { MdAccountCircle, MdLibraryBooks, MdMoveToInbox, MdHelpOutline } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { RiChatHistoryLine } from "react-icons/ri";
import { SiWikimediacommons } from "react-icons/si";
import { useState } from "react";
const SideBar = () => {
  const [first, setfirst] = useState("")
  return (
    <div className=" h-[100vh] w-[100px] bg-slate-800 cursor-pointer">
          <div className="text-white pt-4`{first} ">
            <div className="pl-6"><MdAccountCircle className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">Account</div>
          </div>
          <div className="text-white pt-4 ">
            <div className="pl-6"><AiOutlineDashboard className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">Dashboard</div>
          </div>
          <div className="text-white pt-4 ">
            <div className="pl-6"><MdLibraryBooks className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">Courses</div>
          </div>
          <div className="text-white pt-4 ">
            <div className="pl-6"><SlCalender className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">Calender</div>
          </div>
          <div className="text-white pt-4 ">
            <div className="pl-6"><MdMoveToInbox className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">Inbox</div>
          </div>
          <div className="text-white pt-4 ">
            <div className="pl-6"><RiChatHistoryLine className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">History</div>
          </div>
          <div className="text-white pt-4 ">
            <div className="pl-6"><SiWikimediacommons className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">Commons</div>
          </div>
          <div className="text-white pt-4 ">
            <div className="pl-6"><MdHelpOutline className="w-[40px] h-[40px]" /></div>
            <div className="font-semibold text-center">Help</div>
          </div>
         
    </div>
  )
}

export default SideBar