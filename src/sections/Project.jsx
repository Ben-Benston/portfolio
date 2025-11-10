function ProjectCard({ project }) {
    return <div
        className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] xl:w-[40%] mt-10 mx-auto bg-[#fff8eb]"
    >
        <div className="border-1 border-amber-400 rounded-t-lg flex justify-center items-center px-4 py-1">
            <div className="justify-start flex gap-x-2">
                <div className="w-4 h-4 rounded-full bg-red-400"></div>
                <div className="w-4 h-4 rounded-full bg-amber-400"></div>
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-center">
                <p className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-amber-500">
                    {project.name}
                </p>
            </div>
        </div>

        <div className="border-1 border-amber-400 rounded-b-lg flex-col justify-center items-start py-2 px-4 font-mono text-sm lg:text-base xl:text-lg 2xl:text-xl leading-relaxed">
            <span className="text-fuchsia-700 font-semibold">const</span>{" "}
            <span className="text-blue-500 font-semibold">project</span> = {"{"}
            <div className="ml-4 mt-1 space-y-1">
                {Object.keys(project).map((key) => {
                    const value = project[key];

                    // Handle array formatting (tools)
                    if (Array.isArray(value)) {
                        return (
                            <div key={key} className="flex">
                                <span className="font-bold text-amber-500">{key}:</span>&nbsp;
                                <div>
                                    <span className="text-gray-600">[</span>
                                    {value.map((item, i) => (
                                        <span key={i}>
                                            <span className="text-emerald-700">"{item}"</span>
                                            {i < value.length - 1 && <span className="text-gray-600">, </span>}
                                        </span>
                                    ))}
                                    <span className="text-gray-600">],</span>
                                </div>

                            </div>
                        );
                    }

                    // Handle links
                    if (key === "githubLink" || key === "projectLink") {
                        return (
                            <div key={key} className="flex">
                                <span className="font-bold text-amber-500">{key}:</span>&nbsp;
                                <a
                                    href={value}
                                    target="_blank"
                                    className="text-sky-600 hover:text-sky-700 underline break-all sm:ml-2"
                                >
                                    {value}
                                </a>
                            </div>
                        );
                    }

                    // Handle description
                    if (key === "description") {
                        return (
                            <div key={key} className="flex">
                                <span className="font-bold text-amber-500">{key}:</span>&nbsp;
                                <span className="text-gray-800 italic">{value}</span>
                            </div>
                        );
                    }

                    // Handle normal strings/numbers
                    return (
                        <div key={key} className="flex">
                            <span className="font-bold text-amber-500">{key}:</span>&nbsp;
                            <span className="text-emerald-700">
                                {typeof value === "string" ? `"${value}"` : value}
                            </span>
                            <span className="text-gray-600">,</span>
                        </div>
                    );
                })}
            </div>
            {"}"}
        </div>
    </div>

}

function Project() {

    const projects = [
        {
            name: "Movie Swipe",
            tools: ["React Native", "Tailwind CSS", "Appwrite", "Machine Learning", "TMDB API", "Content-Based Filtering"],
            projectDuration: "Oct 2025 - Present",
            description:
                "A cross-platform mobile app expected to have a custom ML-powered movie recommendation engine that delivers hyper-personalized suggestions using collaborative filtering and user behavior analysis on TMDB's movie dataset.",
            githubLink: "https://github.com/Ben-Benston/movieRecommendation"
        },
        {
            name: "Handwritten Digit Classifier",
            tools: ["Python", "Tkinter", "NumPy", "Pandas", "Scikit-learn", "PCA"],
            projectDuration: "Sep 2025",
            description:
                "A modular Python-based handwritten digit classifier using KNN on a 200,000+ image Kaggle dataset. Features include a Tkinter drawing canvas, Gaussian blur preprocessing, PCA dimensionality reduction, and 85%+ accuracy on sketches.",
            githubLink: "https://github.com/Ben-Benston/digitClassifierKNN"
        },
        {
            name: "Cluedo Cards",
            tools: ["HTML", "Bootstrap", "Firebase", "Node.js"],
            projectDuration: "Nov 2024",
            description:
                "A digital version of the classic mystery board game where players can host or join themed game sessions using private room codes. Includes interactive clue reveals, host controls, and smooth player management.",
            projectLink: "http://cluedocards.vercel.app",
            githubLink: "https://github.com/Ben-Benston/cluedoCards"
        },
        {
            name: "Comparative Study of ML Models",
            tools: ["Python", "NEAT", "GA", "DQL", "PPO"],
            projectDuration: "Jun 2025 - Present",
            description:
                "A research project under the Science Honors Program testing and ranking machine learning algorithms—GA, NEAT, DQL, and PPO—in game-based environments. It compares evolutionary algorithms with neural network-based methods to identify their strengths and limitations.",
        },
        {
            name: "Dummy E-commerce Site",
            tools: ["React", "Tailwind CSS", "API's"],
            projectDuration: "May 2025",
            description:
                "A demo e-commerce website featuring product listings, detailed views, a shopping cart, and a checkout process. Built with React for the frontend and styled using Tailwind CSS.",
            githubLink: "https://github.com/Ben-Benston/demoEcommerce",
            projectLink: "https://demo-ecommerce-three.vercel.app/"
        },
        {
            name: "Personal Portfolio Website",
            tools: ["React", "Tailwind CSS", "Vercel"],
            projectDuration: "Apr 2025 - Nov 2025",
            description: "Designed and developed an interactive, single-page portfolio website to showcase my projects, experience, and skills. The site emphasizes responsive design, smooth animations, and a clean UI for an engaging user experience. Initially developed in Apr 2025 and later revamped in Nov 2025, to reflect my latest technical growth and design sensibilities.",
            githubLink: "https://github.com/Ben-Benston/portfolio",
            projectLink: "https://burhanuddin.vercel.app"
        },
        {
            name: "Bank/Wallet Web App",
            tools: ["HTML", "CSS", "JavaScript", "Python", "Node.js", ".NET", "Firebase", "SQLite"],
            projectDuration: "Dec 2023 - Feb 2024",
            description:
                "Developed a virtual banking application enabling users to add, withdraw, and transfer virtual funds. The project evolved through three implementations — a command-line version in Python, a Node.js and Firebase-based web version, and a .NET implementation for college project.",
            githubLink: "https://github.com/Ben-Benston/walletCLI"
        },
        {
            name: "Fiestron.tech",
            tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            projectDuration: "Sep 2024 - Dec 2024",
            description:
                "As Project Manager and head of the website team, led the development of a dedicated tech club website showcasing activities, events, and achievements. The site also serves as the central platform for event registrations during the annual tech fest, serving 500+ users overall.",
            projectLink: "https://fiestron.tech",
        },
        {
            name: "Ekhande Impex Ltd. Website",
            tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            projectDuration: "Jul 2024 - Sep 2024",
            description:
                "Designed and developed a fully responsive and visually engaging corporate website for Ekhande Impex Pvt. Ltd., ensuring cross-browser compatibility, optimal performance, and seamless navigation across all devices.",
            projectLink: "https://ekhande-impex.vercel.app",
        },
        {
            name: "Real-time dashboard for quizzes",
            tools: ["HTML", "CSS", "JavaScript", "Firebase", "Chart.js"],
            projectDuration: "May 2024",
            description:
                "Developed a secure, real-time dashboard for live quizzes, enabling dynamic visualizations and synchronized question updates for participants.",
        },
        {
            name: "AM4 Fuel Forecast",
            tools: ["Python", "Discord.py", "SQLite", "APIs"],
            projectDuration: "May 2023",
            description:
                "A Discord bot for Airline Manager 4 that provides fuel and CO₂ price forecasts from a database in a visually appealing format, improving player insights for economic planning.",
            githubLink: "https://github.com/Ben-Benston/AM4-Fuel-Forecast"
        },
    ];

    return <div className="bg-[#fff8eb]">
        <div className="flex justify-center mb-8">
            <p className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-amber-600 bg-gradient-to-br from-amber-100/75 to-amber-300/75 px-6 py-2 rounded-xl shadow-md backdrop-blur-sm mt-5">
                Projects
            </p>
        </div>
        {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
    </div>
}

export default Project