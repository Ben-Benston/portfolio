import Experience from "./Experience";
import NameAbout from "./NameAbout";
import { Analytics } from "@vercel/analytics/react"
import Project from "./Project";

function Home() {
    return (
        <div>
            <Analytics />
            <NameAbout />
            <Experience />
            <Project />
        </div>
    )
}

export default Home