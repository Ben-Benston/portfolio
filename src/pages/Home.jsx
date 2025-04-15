function Home() {
    return (
        <div className="flex flex-row h-screen min-h-screen bg-[url(../../images/bg.svg)] aspect-auto bg-no-repeat bg-cover bg-center items-center">
            {/* Horizontal and Vertical Lines */}
            {/* <div class="absolute top-1/2 left-0 w-full h-[7px] bg-red-500 -translate-y-1/2"></div>
            <div class="absolute left-1/2 top-0 h-full w-[7px] bg-red-500 -translate-x-1/2"></div> */}
            <div className="flex flex-col w-[50vw] items-center float-left">
                <div className="flex flex-col w-max">
                    <p className="text-6xl">HI THERE!!!</p>
                    <p className="text-7xl text-center font-bold mt-5">
                        I'M <span className="font-charm text-yellow-400">BURHANUDDIN</span>
                    </p>

                    <p className="text-lg mt-5 bg-amber-400 p-1.5 w-max rounded-[5px] font-black">STUDENT / PROGRAMMER</p>

                    <p className="max-w-md text-base mt-5 font-bold text-gray-700 text-justify">
                        I am a CS student at KC College. As a passionate programmer, I specialize in web development with skills in Python, JavaScript, HTML, CSS, and Firebase, crafting various projects. I'm currently learning React and Tailwind CSS to build modern, responsive interfaces.
                    </p>

                    <div className="mt-5">
                        <button className="bg-amber-400 text-white font-bold text-4xl p-4 rounded-4xl hover:bg-amber-300 hover:translate-y-[5%] hover:scale-105 transition-all duration-500 ease-in-out">MORE ABOUT ME</button>
                    </div>
                </div>
            </div>
            <div className="w-[50vw] h-screen flex justify-center items-end overflow-hidden">
                <img
                    src="../../images/self.png"
                    alt="Burhanuddin Nasikwala"
                    className="object-contain max-w-full max-h-full"
                />
            </div>
        </div>
    )
}

export default Home