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
import {FoodReviews} from "../components/FoodReviews.jsx";
import {Gallery} from "../components/Gallery.jsx";
import {Recipes} from "../components/Recipes.jsx";


export function Hobbies() {
    const [projectType, setProjectType] = useState(0);

    function setProject(type) {
        setProjectType(type);
    }

    function displayProject() {
        switch (projectType) {
            case 0:
                return <FoodReviews />;
            case 1:
                return <Gallery />;
            case 2:
                return <Recipes />;
        }

    }



    return (
        <>
            <div className="homepage">
                <NavBar/>
                <div className="hobbies-tabs">
                    <button onClick={() => setProject(0)}> Food </button>
                    <button onClick={() => setProject(2)}> Cooking  </button>
                    <button onClick={() => setProject(1)}> Gallery </button>
                </div>
                <div className="hobbies-container">
                    {displayProject()}
                </div>



                <Footer/>
            </div>
        </>
    )

}
