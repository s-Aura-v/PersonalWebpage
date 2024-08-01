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
                        <li>Item1</li>
                        <li><a href="/projects">PROJECTS</a></li>
                        <li><a href="/hobbies">HOBBIES</a></li>
                    </ul>
                </div>
            </div>

        </>
    )
}
