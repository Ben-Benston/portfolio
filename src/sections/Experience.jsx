import Lottie from "lottie-react";
import workingAnimation from "../../public/files/working.json";
import Skills from "./Skills";

function ExperienceCard({ duration, role, company }) {
    return (
        <div className="bg-white bg-opacity-70 rounded-xl shadow-md p-5 m-3 border-l-4 border-amber-400 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg w-full md:w-[22rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[40rem]">
            <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600">{duration}</p>
            <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-amber-500">{role}</p>
            <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-800">{company}</p>
        </div>
    );
}

function Experience() {
    return (
        <div className="min-h-screen bg-[url('/images/bg-up.svg')] bg-no-repeat bg-cover bg-center px-4 py-10">
            <div className="flex justify-center mb-8">
                <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-amber-600 bg-gradient-to-br from-amber-100/75 to-amber-300/75 px-6 py-2 rounded-xl shadow-md backdrop-blur-sm">
                    Experience
                </p>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-6">
                <div className="w-full max-w-md mx-auto">
                    <Lottie animationData={workingAnimation} loop={true} className="xl:w-160 xl:h-160" />
                </div>

                <div className="flex flex-col items-center">
                    <ExperienceCard duration="May 2024" role="Data Entry / Research Intern" company="Alpha MD" />
                    <ExperienceCard duration="Dec 2023" role="App Testing Intern" company="MapOut" />
                    <ExperienceCard duration="May 2023" role="Content Writing Intern" company="Team Everest" />
                </div>
            </div>

            <Skills />
        </div>
    );
}

export default Experience;
