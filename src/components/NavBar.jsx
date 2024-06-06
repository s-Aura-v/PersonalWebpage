import {useNavigate} from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
    const redirectHome = () =>{
        navigate("/");
    }
    return (
        <>
            <h1 className="name-tag" onClick={redirectHome}>S-aura-v</h1>
            <div className="tabs">
                <ul>
                    <li>Item1</li>
                    <li><a href="/projects">Projects</a></li>
                    <li>Item2</li>
                </ul>
            </div>
        </>
    )
}
