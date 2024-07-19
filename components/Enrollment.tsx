import { Enrollment, enrollments } from "@/data/EnrollmentData";

const EnrollmentPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Enrollment Page</h1>
      <div className="overflow-x-auto w-[1200px] h-[85vh] border border-red-950 ">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-center border border-gray-200">Student Name</th>
              <th className="p-3 text-center border border-gray-200">Enrollment Date</th>
              <th className="p-3 text-center border border-gray-200">Teacher Name</th>
              <th className="p-3 text-center border border-gray-200">Grade</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id} className="hover:bg-gray-50">
                <td className="p-3 text-center border border-gray-200">{enrollment.studentName}</td>
                <td className="p-3 text-center border border-gray-200">{enrollment.enrollmentDate}</td>
                <td className="p-3 text-center border border-gray-200">{enrollment.teacherName}</td>
                <td className="p-3 text-center border border-gray-200">{enrollment.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollmentPage;
