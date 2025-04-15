import { BsDownload } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

function Section1() {
    return (
        <div className="min-h-screen bg-[url('/images/bg.svg')] bg-no-repeat bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-4 py-10">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <div className="flex flex-col max-w-md items-center md:items-start text-center md:text-left">
                    <p className="text-4xl sm:text-5xl md:text-6xl">HI THERE!!!</p>
                    <p className="text-5xl sm:text-6xl md:text-7xl font-bold mt-5">
                        I'M <span className="font-charm text-yellow-400">BURHANUDDIN</span>
                    </p>

                    <p className="text-base sm:text-lg mt-5 bg-amber-400 px-3 py-1.5 rounded-[5px] font-black">
                        STUDENT / PROGRAMMER
                    </p>

                    <p className="text-sm sm:text-base mt-5 font-bold text-gray-700 text-justify">
                        I am a CS student at KC College. As a passionate programmer, I specialize in web development with skills in Python, JavaScript, HTML, CSS, and Firebase, crafting various projects. I'm currently learning React and Tailwind CSS to build modern, responsive interfaces.
                    </p>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start">
                        <button className="flex items-center justify-center gap-2 bg-transparent text-black border-amber-500 border-2 font-bold text-lg sm:text-xl md:text-2xl px-4 py-3 rounded-3xl hover:bg-amber-50 hover:translate-y-[5%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                            CONTACT ME <RiContactsLine />
                        </button>
                        <a
                            className="flex items-center justify-center gap-2 bg-amber-400 text-white font-bold text-lg sm:text-xl md:text-2xl px-4 py-3 rounded-3xl hover:bg-amber-300 hover:translate-y-[5%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
                            href="/files/Burhanuddin_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VIEW RESUME <BsDownload />
                        </a>
                    </div>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2 flex justify-center items-end mt-10 md:mt-0">
                <img
                    src="/images/self.png"
                    alt="Burhanuddin Nasikwala"
                    className="object-contain max-w-[80%] max-h-[70vh] md:max-w-full md:max-h-screen"
                />
            </div>
        </div>
    );
}

export default Section1;
