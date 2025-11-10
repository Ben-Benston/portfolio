import Experience from "./Experience";
import NameAbout from "./NameAbout";
import { Analytics } from "@vercel/analytics/react"
import Project from "./Project";
import { Contact } from "./Contact";
import Education from "./Education";

function Home() {
    return (
        <div>
            <Analytics />
            <NameAbout />
            <Experience />
            <Project />
            <Education />
            <Contact />
        </div>
    )
}

export default Home