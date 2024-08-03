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

    function displayProject() {
        switch (projectType) {
            case 0:
                return <YelpRecommendation/>;
            case "403":
                return null;
            case "404":
                return <div>Page Not Found</div>;
            default:
                return <div>Unknown Error</div>;
        }
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };


    return (
        <>
            <div className="homepage">
                <NavBar/>
                <div className="hobbies-tabs">
                    <span> Food </span>
                    <span> hi </span>
                    <span> Galley </span>
                </div>
                <div className="hobbies-container">
                    <div className="hobbies-grid">
                        <div className="hobbies-info" onClick={() => setProject(0)}>
                            <div className="logo">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" className="imgLogo"/>
                            </div>
                            <div className="text">
                                McDonalds
                            </div>
                            <div>
                                Fastfood <br/>
                            </div>
                        </div>
                        <div className="hobbies-info" style={{backgroundColor: "whitesmoke"}}
                             onClick={() => setProject(0)}>
                            <div className="logo">
                                <img src="https://toppng.com/uploads/preview/wendys-logo-vector-11573937109po7rpvlsr1.png" className="imgLogo"/>
                            </div>
                            <div className="text">
                                Wendys
                            </div>
                            <div>
                                Information
                            </div>
                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>
                            <div className="logo">
                                <img src={YelpLogo} className="imgLogo"/>
                            </div>
                            <div className="text">
                                Yelp Recommendation
                            </div>
                            <div>
                                Information
                            </div>
                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>
                            <div className="logo">
                                <img src={YelpLogo} className="imgLogo"/>
                            </div>
                            <div className="text">
                                Yelp Recommendation
                            </div>
                            <div>
                                Information
                            </div>
                        </div>
                        <div className="hobbies-info" style={{backgroundColor: "whitesmoke"}}
                             onClick={() => setProject(0)}>
                            <div className="logo">
                                <img src={FamilyThreadLogo} className="imgLogo"/>
                            </div>
                            <div className="text">
                                Family Thread
                            </div>
                            <div>
                                Information
                            </div>
                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>
                            <div className="logo">
                                <img src={YelpLogo} className="imgLogo"/>
                            </div>
                            <div className="text">
                                Yelp Recommendation
                            </div>
                            <div>
                                Information
                            </div>
                        </div>
                        <div className="hobbies-info" onClick={() => setProject(0)}>
                            <div className="logo">
                                <img src={YelpLogo} className="imgLogo"/>
                            </div>
                            <div className="text">
                                Yelp Recommendation
                            </div>
                            <div>
                                Information
                            </div>
                        </div>



                    </div>
                    {/*<div className="projects-content">*/}
                    {/*    {displayProject()}*/}
                    {/*</div>*/}
                </div>

                <Footer/>
            </div>
        </>
    )

}
