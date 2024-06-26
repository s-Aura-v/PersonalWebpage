import {useNavigate} from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
    const redirectHome = () =>{
        navigate("/");
    }
    return (
        <>
            <div className="name-tag" onClick={redirectHome}>s-Aura-v</div>
            <div className="tabs">
                <ul>
                    <li>Item1</li>
                    <li><a href="/projects">PROJECTS</a></li>
                    <li>Item2</li>
                </ul>
            </div>
        </>
    )
}
