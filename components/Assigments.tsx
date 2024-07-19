import { AssignmentsData, propsData } from "@/data/AssignmentData";
import { useState } from "react";
import Popup from "./Popup";

const Assignments = () => {
  const [selectedAssignment, setSelectedAssignment] = useState<propsData | null>(null);

  const onHandleClick = (assignment: propsData) => {
    setSelectedAssignment(assignment);
  };

  const closePopup = () => {
    setSelectedAssignment(null);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Assignments Page</h1>
      <div className="overflow-x-auto w-[1200px] h-[85vh] border border-red-950">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-center border border-gray-200">Title</th>
              <th className="p-3 text-center border border-gray-200">Priority</th>
              <th className="p-3 text-center border border-gray-200">Due Date</th>
              <th className="p-3 text-center border border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {AssignmentsData.map((assignment: propsData) => (
              <tr key={assignment.id} className="hover:bg-gray-50" onClick={() => onHandleClick(assignment)}>
                <td className="p-3 text-center border border-gray-200">{assignment.title}</td>
                <td className="p-3 text-center border border-gray-200">{assignment.priority}</td>
                <td className="p-3 text-center border border-gray-200">{assignment.dueDate}</td>
                <td className="p-3 text-center border border-gray-200">{assignment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedAssignment && (
        <Popup {...selectedAssignment} closePopup={closePopup} />
      )}
    </div>
  );
};

export default Assignments;
