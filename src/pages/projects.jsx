import '../styles/home.css'
import '../styles/projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import {Card} from "@mui/material";
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

                <div className="home-content">
                    <div className="left-info">
                        info
                    </div>
                    <div className="grid-container">
                        <Card>
                            <div className="card-content">
                                <h1>Yelp Recommendation</h1>
                                <h4>Title</h4>
                                <h4>Core Concepts: TF-IDF, Cosine Similarity </h4>
                                <Slider {...settings} className="demo-slider">
                                    <div>
                                        <img
                                            src="https://i0.wp.com/wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg?ssl=1"/>
                                    </div>
                                    <div>
                                        <img
                                            src="https://i0.wp.com/wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg?ssl=1"/>
                                    </div>
                                </Slider>
                                <p>The Yelp Recommendation System uses TF-IDF and Cosine Similarity Metric to determine
                                    how similar two businesses are based on their reviews. </p>
                            </div>
                        </Card>
                        <Card>
                            <h1>Family Thread</h1>
                        </Card>
                        <Card>
                            <h1>Three</h1>
                        </Card>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )

}
