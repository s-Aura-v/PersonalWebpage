import '../styles/home.css'
import '../styles/projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import {Card, Container} from "@mui/material";
import Slider from "react-slick";


export function Projects() {
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
                        <div>
                            Yelp Recommendation App
                        </div>
                        <div>
                            Family Thread Website
                        </div>
                        <div>
                            hello
                        </div>
                        <div>
                            hello
                        </div>
                    </div>
                    <div className="projects-content">
                        nice
                    </div>
                </Container>

                <Footer/>
            </div>
        </>
    )

}
