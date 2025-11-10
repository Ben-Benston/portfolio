import Lottie from "lottie-react";
import workingAnimation from "../../public/files/education.json";

function EducationCard({ duration, role, company }) {
    return (
        <div className="bg-white bg-opacity-70 rounded-xl shadow-md p-5 m-3 border-l-4 border-amber-400 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg w-full md:w-[22rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[40rem]">
            <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600">{duration}</p>
            <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-amber-500">{role}</p>
            <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-800">{company}</p>
        </div>
    );
}

function Education() {
    return (
        <div className="min-h-screen bg-[#fff8eb] px-4 py-10">
            <div className="flex justify-center mb-8">
                <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-amber-600 bg-gradient-to-br from-amber-100/75 to-amber-300/75 px-6 py-2 rounded-xl shadow-md backdrop-blur-sm">
                    Education
                </p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-6">
                <div className="w-full max-w-md mx-auto mt-[-5%] md:mt-0">
                    <Lottie animationData={workingAnimation} loop={true} className="xl:w-120 xl:h-120" />
                </div>

                <div className="flex flex-col items-center mt-[-5%] md:mt-0">
                    <EducationCard duration="Jun 2023 - Jun 2026" role="Bachelors In Computer Science" company="Kishinchand Chellaram College, HSNCU" />
                    <EducationCard duration="May 2021 - Feb 2023" role="HSC - Computer Science" company="Bhavans HS College" />
                    <EducationCard duration="Jun 2011 - Mar 2021" role="Secondary School Certificate" company="Lourdes High School" />
                </div>
            </div>
        </div>
    );
}

export default Education;
