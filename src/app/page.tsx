import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gray-200 p-6 mx-32 my-6 rounded-4xl">
      <NavBar className="mb-24" />
      <div className="flex flex-col items-center">
        <hgroup className="text-center mb-12">
          <h1 className="text-8xl font-bold mb-6">
            Automated Applicant Reviews
          </h1>
          <h3 className="text-4xl font-light mb-6 max-w-7xl mx-auto">
            Give us a job description + resumes and we'll tell you who's the
            best fit. Plus, get an individual report including strengths,
            weaknesses and questions to ask.
          </h3>
        </hgroup>
        <Button
          size={"lg"}
          className="p-10 text-xl border-t-2 rounded-full bg-gray-100 hover:bg-white transition-transform transform hover:translate-y-[-2px] flex items-center justify-center gap-4 shadow-md hover:shadow-lg duration-300"
        >
          <span className="p-8 text-2xl font-bold text-black font-inter text-center flex items-center gap-2">
            Try it for free
            <IoIosArrowForward className="text-black" />
          </span>
        </Button>

        <div className="mt-12 flex flex-wrap justify-center gap-72">
          <img src="/1.png" alt="Image 1" className="w-96 h-1/3" />
          <img src="/2.png" alt="Image 2" className="w-104 h-1/3 -mt-7" />
        </div>
      </div>
    </main>
  );
}
