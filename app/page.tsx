import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <h1 className="text-5xl text-center mt-10">LMS SYSTEM</h1>
        <div ><Link href="/course"><button className="px-6 py-2 rounded-lg bg-slate-600 ml-[47%] mt-6 text-white">Course</button></Link></div>
    </>
  );
} 
