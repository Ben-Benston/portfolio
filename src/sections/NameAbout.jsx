import { BsDownload } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

function NameAbout() {
    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="min-h-screen bg-[url('/images/bg.svg')] bg-no-repeat bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-4 py-10">
            {/* Left Section */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center order-2 md:order-1 mt-10 md:mt-0">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl">HI THERE!!!</p>
                    <p className="text-5xl lg:text-6xl 2xl:text-8xl font-bold mt-5">
                        I'M <span className="font-charm text-yellow-400">BURHANUDDIN</span>
                    </p>

                    <p className="text-base sm:text-lg 2xl:text-2xl mt-5 bg-amber-400 px-3 py-1.5 rounded-[5px] font-black">
                        STUDENT / PROGRAMMER
                    </p>

                    <p className="text-sm sm:text-base 2xl:text-xl mt-5 font-bold text-gray-700 text-justify">
                        Aspiring Full-Stack Developer with a major in Computer Science and hands-on experience in building scalable web
                        applications and leading projects. Skilled in developing responsive front-end interfaces and efficient back-end systems
                        using modern frameworks. Proven in analysing large datasets using Excel, Power BI and SQL to drive efficiency.
                    </p>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 w-full justify-center md:justify-start">
                        <button onClick={handleScrollToContact} className="flex items-center justify-center gap-2 bg-transparent text-black border-amber-500 border-2 font-bold text-lg sm:text-xl md:text-base lg:text-xl 2xl:text-3xl px-4 py-3 rounded-3xl hover:bg-amber-50 hover:translate-y-[5%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                            CONTACT ME <RiContactsLine />
                        </button>
                        <a
                            className="flex items-center justify-center gap-2 bg-amber-400 text-white font-bold text-lg sm:text-xl md:text-base lg:text-xl 2xl:text-3xl px-4 py-3 rounded-3xl hover:bg-amber-300 hover:translate-y-[5%] hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer border-white border-2 md:border-none"
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
            <div className="w-full md:w-1/2 lg:w1/3 flex justify-center items-endorder-1 md:order-2">
                <img
                    src="/images/self.png"
                    alt="Burhanuddin Nasikwala"
                    className="object-contain max-w-[80%] max-h-[70vh] md:max-w-full md:max-h-screen"
                />
            </div>
        </div>
    );
}

export default NameAbout;
