import '../styles/home.css'
import '../styles/hobbies.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import {YelpRecommendation} from "../components/YelpRecommendation.jsx";
import {useState} from "react";
import YelpLogo from "../assets/whereabouts.svg"
import FamilyThreadLogo from "../assets/familythread.svg"


export function Hobbies() {
    const [projectType, setProjectType] = useState(0);

    function setProject(type) {
        setProjectType(type);
    }



    return (
        <>
            <div className="homepage">
                <NavBar/>
                <div className="hobbies-tabs">
                    <span> Food </span>
                    <span>  </span>
                    <span> Gallery </span>
                </div>
                <div className="hobbies-container">
                    <div className="hobbies-grid">
                        <div className="hobbies-info" onClick={() => setProject(0)}>
                            <img src="https://shorturl.at/ntK8I" alt="logo" className="food-logo" />
                            <span> Wendy's </span>
                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>
                            <img src="https://shorturl.at/sj4E3" alt="logo" className="food-logo"/>
                            <span> McDonald's </span>
                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>

                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>

                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>

                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>

                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>

                        </div>

                    </div>

                </div>

                <Footer/>
            </div>
        </>
    )

}
