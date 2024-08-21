import '../styles/home.css'
import '../styles/projectsgrid.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import {YelpRecommendation} from "../components/YelpRecommendation.jsx";
import React, {useState} from "react";
import {FamilyThreadGallery} from "../components/FamilyThreadGallery.jsx";
import YelpLogo from '../assets/whereabouts.svg'
import FamilyThreadLogo from '../assets/familythread.svg'



export function Projects() {
    const [projectType, setProjectType] = useState(0);
    const [open, setOpen] = useState(false);

    function setProject(type) {
        setProjectType(type);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


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
                <div className="projects">
                    <div className="proj-container">
                        <div className="proj-cell">
                            <img src={YelpLogo} alt="YelpLogo" className="proj-logo"/>
                            <span> Yelp Recommendation </span>
                            <div> A recommendation app that uses concepts of tf-idf and Dijkstra's algorithm to find path between businesses. </div>
                        </div>
                        <div className="proj-cell">
                            <img src={FamilyThreadLogo} alt="YelpLogo" className="proj-logo"/>
                            <span> Family Thread </span>
                            <div> A webpage with interactive functions that allows the user to login through google, create and edit family
                                trees which is saved on our servers, so that it may be accessed in different devices. </div>
                        </div>
                        <div className="proj-cell">
                        <span> I Just Wanna Rewind </span>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );

}
