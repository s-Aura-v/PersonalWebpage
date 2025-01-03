import {useNavigate} from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
    const redirectHome = () =>{
        navigate("/");
    }
    return (
        <>
            <div className="home-container">
                <div className="name-tag" onClick={redirectHome}>
                    s-Aura-v
                </div>
                <div className="tabs">
                    <ul className="tabs-list">
                        <li><a href="/">HOME</a></li>
                        <li><a href="/projects">PROJECTS</a></li>
                        <li><a href="/journal">JOURNAL</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
