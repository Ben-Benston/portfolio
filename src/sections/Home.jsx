import Experience from "./Experience";
import NameAbout from "./NameAbout";
import { Analytics } from "@vercel/analytics/react"

function Home() {
    return (
        <div>
            <Analytics />
            <NameAbout />
            <Experience />
        </div>
    )
}

export default Home