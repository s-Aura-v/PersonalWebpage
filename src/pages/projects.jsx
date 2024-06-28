import '../styles/home.css'
import '../styles/projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import {Card, Container} from "@mui/material";
import Slider from "react-slick";
import {YelpRecommendation} from "../components/YelpRecommendation.jsx";
import {useState} from "react";


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
                <Container className="projects-container">
                    <div className="projects-grid">
                        <div className="projects-name" onClick={() => setProject(0)}>
                            Yelp Recommendation
                        </div>
                        <div className="projects-name" onClick={() => setProject(1)}>
                            Family Thread Website
                        </div>
                        <div className="projects-name" onClick={() => setProject(2)}>
                            N/A
                        </div>
                        <div className="projects-name" onClick={() => setProject(3)}>
                            N/A
                        </div>
                    </div>
                    <div className="projects-content">
                        {displayProject()}
                    </div>
                </Container>

                <Footer/>
            </div>
        </>
    )

}
