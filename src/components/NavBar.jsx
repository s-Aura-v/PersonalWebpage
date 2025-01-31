import {useNavigate} from "react-router-dom";

export function NavBar() {
    const navigate = useNavigate();
    const redirectHome = () =>{
        navigate("/");
    }

    const anchorStyle = {
        color: "inherit",
        textDecoration:"none"
}
    return (
        <>
            <div className="home-container">
                <div className="name-tag" onClick={redirectHome}>
                    s-Aura-v
                </div>
                <div className="tabs">
                    <ul className="tabs-list">
                        <li><a href="/" style={anchorStyle}>HOME</a></li>
                        <li><a href="/projects" style={anchorStyle}>PROJECTS</a></li>
                        <li><a href="/journal" style={anchorStyle}>JOURNAL</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
