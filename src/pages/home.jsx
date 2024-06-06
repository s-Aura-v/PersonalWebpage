import '../styles/home.css'
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import GitHubLogo from "../assets/github.svg"
import LinkedInLogo from "../assets/linkedin.svg"
import EmailLogo from "../assets/email.svg"

export function Home() {

    return (<>
            <div className="homepage">
                <NavBar />

                <div className="home-content">
                </div>

                <div className="external-links">
                    <div>
                        <a href="https://github.com/s-Aura-v"> <img src={GitHubLogo} alt={"github: /s-aura-v"}/> </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/s-aura-v/"> <img src={LinkedInLogo} alt={"linkedin: in/s-aura-v"}/> </a>
                    </div>
                    <div>
                        <a href="mailto:sauravl2004@gmail.com"> <img src={EmailLogo} alt={"email: sauravl2004@gmail.com"}/> </a>
                    </div>
                </div>
                <Footer/>
            </div>
        </>)
}
