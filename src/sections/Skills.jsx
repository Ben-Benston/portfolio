import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "MySQL",
        "Git",
        "GitHub",
        "Canva",
        "Firebase",
        "Vercel",
        "Python",
        "JavaScript",
        "Node.js",
        "VS Code",
        "Unity",
        "Java",
        "Processing",
        "p5.js",
        "Inkscape",
        "Vite",
        "Blender"
    ];

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 500);

    useEffect(() => {
        const handleResize = () => setIsWideScreen(window.innerWidth > 500);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div>
            <div className="flex justify-center mb-8">
                <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-amber-600 bg-gradient-to-br from-amber-100/75 to-amber-300/75 px-6 py-2 rounded-xl shadow-md backdrop-blur-sm mt-5">
                    Skills
                </p>
            </div>

            <Marquee
                gradient={isWideScreen}
                speed={40}
                pauseOnHover
                className="w-full flex items-center"
            >
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center mx-6">
                        <img
                            src={`/logos/${skill}.svg`}
                            alt={skill}
                            className="h-16 w-16 object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                        />
                        <p className="text-sm font-semibold mt-2 text-center">{skill}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}

export default Skills;
