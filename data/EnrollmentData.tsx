export interface Enrollment {
  id: number;
  studentName: string;
  enrollmentDate: string;
  teacherName: string;
  grade: string;
}

export const enrollments: Enrollment[] = [
  { id: 1, studentName: "M Muzamil", enrollmentDate: "2023-01-15", teacherName: "Mr. Smith", grade: "A" },
  { id: 2, studentName: "Mudasir", enrollmentDate: "2023-02-10", teacherName: "Ms. Johnson", grade: "B+" },
  { id: 3, studentName: "Zeeshan", enrollmentDate: "2023-03-05", teacherName: "Dr. Brown", grade: "A-" },
  { id: 4, studentName: "Ali Hamza", enrollmentDate: "2023-04-20", teacherName: "Mrs. Lee", grade: "C+" },
  { id: 5, studentName: "Mubashir", enrollmentDate: "2023-05-12", teacherName: "Mr. Wilson", grade: "A" },
  { id: 6, studentName: "Michael Wilson", enrollmentDate: "2023-06-08", teacherName: "Dr. Davis", grade: "B-" },
  { id: 7, studentName: "M Muzamil", enrollmentDate: "2023-01-15", teacherName: "Mr. Smith", grade: "A" },
  { id: 8, studentName: "Mudasir", enrollmentDate: "2023-02-10", teacherName: "Ms. Johnson", grade: "B+" },
  { id: 9, studentName: "Zeeshan", enrollmentDate: "2023-03-05", teacherName: "Dr. Brown", grade: "A-" },
  { id: 10, studentName: "Ali Hamza", enrollmentDate: "2023-04-20", teacherName: "Mrs. Lee", grade: "C+" },
  { id: 11, studentName: "Mubashir", enrollmentDate: "2023-05-12", teacherName: "Mr. Wilson", grade: "A" },
  
  
];
