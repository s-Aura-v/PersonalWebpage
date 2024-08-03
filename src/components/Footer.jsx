import GitHubLogo from "../assets/github.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import EmailLogo from "../assets/email.svg";

export function Footer() {
    return (
        <>
            <div className="external-links">
                <div>
                    <a href="https://github.com/s-Aura-v"> <img src={GitHubLogo}
                                                                alt={"github: /s-aura-v"}
                                                                className="logo-sizes" /></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/s-aura-v/"> <img src={LinkedInLogo}
                                                                          alt={"linkedin: in/s-aura-v"}
                                                                          className="logo-sizes"/> </a>
                </div>
                <div>
                    <a href="mailto:sauravl2004@gmail.com"> <img src={EmailLogo}
                                                                 alt={"email: sauravl2004@gmail.com"}
                                                                 className="logo-sizes"/>
                    </a>
                </div>
            </div>
            <div className="footer">
                Saurav Lamichhane. 2024.
            </div>
        </>
    )
}
