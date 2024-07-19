import React from 'react';
import { propsData } from '@/data/AssignmentData';


const Popup = ({ title, description, dueDate, status,assignedDate,subject,grade,priority,closePopup }:propsData) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[600px] ">
        <button className="pl-80 text-xl font-bold" onClick={closePopup}>
          X
        </button>
        
        <div className='w-[350px]'>
        <p className="mb-2 pt-5"><span className='font-bold'>Title: </span> {title}</p>
        <p className="mb-2 pt-5"><span className='font-bold'>Description: </span>{description}</p>
        <p className="mb-2 pt-5"> <span className='font-bold'>Due Date: </span> {dueDate}</p>
        <p className='mb-2 pt-5'><span className='font-bold'>Status: </span> {status}</p>
        <p className='mb-2 pt-5'><span className='font-bold'>Assigned Date: </span> {assignedDate}</p>
        <p className='mb-2 pt-5'><span className='font-bold'>Subject: </span> {subject}</p>
        <p className='mb-2 pt-5'><span className='font-bold'>Grade: </span> {grade}</p>
        <p className='mb-2 pt-5'><span className='font-bold'>Priority: </span> {priority}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
