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
                <br/>
                <span> project overview </span>
                <div className="projects">
                    <div className="projects-container">
                        <div className="project-title"> Yelp Recommendation</div>
                        <div className="project-cell">
                            <div className="cell-left">
                                <h2></h2>
                            </div>
                            <div className="cell-center">Yelp Recommendation is a tool that can be used to find similar business and find the shortest path between them.</div>
                            <div className="cell-right">h1</div>
                        </div>

                        <div className="project-title"> Family Thread</div>
                        <div className="project-cell">
                            <div className="cell-left">Tools Used</div>
                            <div className="cell-center">Family Thread is a website that can be used to create family trees.</div>
                            <div className="cell-right">Gallery</div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );

}
