import '../styles/home.css'
import '../styles/projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import {YelpRecommendation} from "../components/YelpRecommendation.jsx";
import {useState} from "react";
import YelpLogo from "../assets/whereabouts.svg"
import FamilyThreadLogo from "../assets/familythread.svg"



export function Projects() {
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
                <div className="projects-container">
                    <div className="projects-grid">
                        <div className="projects-info" onClick={() => setProject(0)}>
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
                        <div className="projects-info" style={{backgroundColor: "whitesmoke"}}
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
                        <div className="projects-info" onClick={() => setProject(0)}>
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
                        <div className="projects-info" onClick={() => setProject(0)}>
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
                        <div className="projects-info" style={{backgroundColor: "whitesmoke"}}
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
                        <div className="projects-info" onClick={() => setProject(0)}>
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
