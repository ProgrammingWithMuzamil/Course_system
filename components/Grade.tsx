
import { Grade,grades } from "@/data/GradeData";

const GradePage= () => {
  return (
    <div className="container mx-auto">
    <h1 className="text-2xl font-bold mb-4">Grade Page</h1>
    <div className="overflow-x-auto w-[1200px] h-[85vh] border border-red-950">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className=" p-3 border border-gray-200 text-center">Id</th>
            <th className="p-3 border border-gray-200 text-center">Student Name</th>
            <th className="p-3 border border-gray-200 text-center">Course</th>
            <th className="p-3 border border-gray-200 text-center">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((assignment:any) => (
            <tr key={assignment.id} className="hover:bg-gray-50">
              <td className="p-3 border border-gray-200 text-center">{assignment.id}</td>
              <td className="p-3 border border-gray-200 text-center">{assignment.studentName}</td>
              <td className="p-3 border border-gray-200 text-center">{assignment.course}</td>
              <td className="p-3 border border-gray-200 text-center">{assignment.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default GradePage;
