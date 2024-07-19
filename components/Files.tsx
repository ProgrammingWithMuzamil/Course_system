import { FilesData } from "@/data/FilesData"

const Files = () => {
  return (
    <div className="container mx-auto">
    <h1 className="text-2xl font-bold mb-4">Files Page</h1>
    <div className="overflow-x-auto w-[1200px] h-[85vh] border border-red-950">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className=" p-3 border border-gray-200 text-center">Id</th>
            <th className="p-3 border border-gray-200 text-center">lecturer Name</th>
            <th className="p-3 border border-gray-200 text-center">lecturer Date</th>
            <th className="p-3 border border-gray-200 text-center">Subject</th>
          </tr>
        </thead>
        <tbody>
          {FilesData.map((assignment:any) => (
            <tr key={assignment.id} className="hover:bg-gray-50">
              <td className="p-3 border border-gray-200 text-center">{assignment.id}</td>
              <td className="p-3 border border-gray-200 text-center">{assignment.lecturerName}</td>
              <td className="p-3 border border-gray-200 text-center">{assignment.lecturerDate}</td>
              <td className="p-3 border border-gray-200 text-center">{assignment.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Files