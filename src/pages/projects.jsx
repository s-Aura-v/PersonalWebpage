import '../styles/home.css'
import '../styles/projectsgrid.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import React, {useState} from "react";
import YelpRecommendationLogo from '../assets/whereabouts.svg'
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {Button, styled} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import {Worker} from '@react-pdf-viewer/core';
import Diagrams from '../assets/FamilyThread/diagrams.pdf'
// Import the main component
import {Viewer} from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import {ScrollMode} from '@react-pdf-viewer/core';
import {scrollModePlugin} from "@react-pdf-viewer/scroll-mode";

import FamilyThreadLogo from '../assets/familythread.svg'
import FamilyThreadLogon from '../assets/FamilyThread/logon.png'
import FamilyThreadTrees from '../assets/FamilyThread/mytrees.png'
import FamilyThreadMain from '../assets/FamilyThread/mainpage.png'

import MongoLogo from '../assets/mongo.svg'
import ReactLogo from '../assets/react.svg'
import HTML5Logo from '../assets/html5.svg'
import CSSLogo from '../assets/css3.svg'
import JavaLogo from '../assets/java.svg'
import DockerLogo from '../assets/docker.svg'
import JSLogo from '../assets/js.svg'
import GradleLogo from '../assets/gradle.svg'
import YelpLogo from '../assets/yelp.svg'
import LeafletLogo from '../assets/leaflet.svg'
import Auth0Logo from '../assets/auth0.svg'
import SpringbootLogo from '../assets/springboot.svg'
import FindMyCommunity from '../assets/HopHacks2024/findmycommunity.png'
import FindMyCommunityLogo from '../assets/HopHacks2024/findmycommunitylogo.png'

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export function Projects() {
    const [yelpOpen, setYelpOpen] = useState(false);
    const [ftOpen, setFtOpen] = useState(false);
    const [gaOpen, setGaOpen] = useState(false);
    const [fmcOpen, setFmcOpen] = useState(false);

    const handleYelpOpen = () => {
        setYelpOpen(true);
    };
    const handleYelpClose = () => {
        setYelpOpen(false);
    };

    const handleFtOpen = () => {
        setFtOpen(true);
    };
    const handleFtClose = () => {
        setFtOpen(false);
    };
    const handleGaOpen = () => {
        setGaOpen(true);
    };
    const handleGaClose = () => {
        setGaOpen(false);
    };
    const handleFmcOpen = () => {
        setFmcOpen(true);
    };
    const handleFmcClose = () => {
        setFmcOpen(false);
    };

    // const scrollModePluginInstance = scrollModePlugin();
    // scrollModePluginInstance.switchScrollMode(ScrollMode.Horizontal);

    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Horizontal);


    return (
        <>

            <div className="homepage">
                <NavBar/>
                <br/>
                <div className="projects">
                    <div className="proj-container">
                        <div className="proj-cell" onClick={handleYelpOpen}>
                            <img src={YelpRecommendationLogo} alt="YelpLogo" className="proj-logo"/>
                            <strong> Yelp Recommendation </strong>
                            <div> A recommendation app that uses concepts of tf-idf and Dijkstra's algorithm to find
                                path between businesses.
                            </div>
                        </div>
                        <BootstrapDialog
                            onClose={handleYelpClose}
                            open={yelpOpen}
                            maxWidth='md'
                            fullWidth
                        >
                            <DialogTitle className="popup-title">
                                <span> Yelp Recommendation </span>
                            </DialogTitle>
                            <DialogContent dividers>
                                <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Demo
                                        </span>
                                    <ul className="techdemo-list">
                                        <li><img src={JavaLogo} className="techdemo-logos" alt="Java"/></li>
                                        <li><img src={GradleLogo} className="techdemo-logos" alt="Gradle"/></li>
                                        <li><img src={YelpLogo} className="techdemo-logos" alt="Yelp"/></li>
                                    </ul>
                                </div>
                                <div>
                                    Background: <strong>TFIDF</strong>, Term-Frequency Inverse Document Frequency, is a
                                    measure that can be
                                    used to determine the importance of words in a large database. Cosine similatrity
                                    can be used to find vector
                                    between documents allowing us to compare the similarity between two items. TFIDF
                                    and <strong>cosine similarity, </strong>can
                                    be used to determine how compute the similarity between documents as it is done in
                                    this project.
                                    <br/><br/>
                                    Purpose:
                                    <ol>
                                        <li>Go through the Yelp Database</li>
                                        <li>Go through all the reviews and remove all function words</li>
                                        <li>Compute TFIDF based on user input</li>
                                        <li>Compute similarity vector between them</li>
                                        <li>Create clusters of similar business based on data learned by running 5000 iterations </li>
                                        <li>Use Dijkstra's Algorithm to find the shortest distance between two business in a cluster</li>
                                    </ol>
                                    <br/><br/>
                                    Link to Repository: <a href="https://github.com/s-Aura-v/YelpRecommendation"> GitHub </a>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleYelpClose}>
                                    Close
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>

                        <div className="proj-cell" onClick={handleFtOpen}>
                            <img src={FamilyThreadLogo} alt="YelpLogo" className="proj-logo"/>
                            <strong> Family Thread </strong>
                            <div> A webpage with interactive functions that allows the user to login through google,
                                create and edit family trees which is saved on our servers, so that it may be accessed
                                in different devices.
                            </div>
                        </div>
                        <BootstrapDialog
                            onClose={handleFtClose}
                            open={ftOpen}
                            maxWidth='xl' x
                            fullWidth
                        >
                            <DialogTitle className="popup-title">
                                <span> Family Thread </span>
                            </DialogTitle>
                            <DialogContent className="overflow-clip" dividers>
                                <div>
                                    <div className="header-img">
                                        <div className="div1">
                                            <img src={FamilyThreadLogon}/>
                                        </div>
                                        <div className="div2">
                                            <img src={FamilyThreadMain}/>
                                        </div>
                                        <div className="div3">
                                            <img src={FamilyThreadMain}/>
                                        </div>
                                    </div>

                                    <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Demo
                                        </span>
                                        <ul className="techdemo-list">
                                            <li><img src={ReactLogo} className="techdemo-logos" alt="React"/></li>
                                            <li><img src={HTML5Logo} className="techdemo-logos"
                                                     alt="HTML / CSS / JavaScript"/></li>
                                            <li><img src={CSSLogo} className="techdemo-logos" alt="CSS"/></li>
                                            <li><img src={JSLogo} className="techdemo-logos"
                                                     alt="HTML / CSS / JavaScript"/></li>
                                            <li><img src={JavaLogo} className="techdemo-logos" alt="React"/></li>
                                            <li><img src={DockerLogo} className="techdemo-logos" alt="Docker"/></li>
                                            <li><img src={MongoLogo} className="techdemo-logos" alt="MongoDB"/></li>
                                        </ul>
                                    </div>
                                    <div>
                                        PERSONAL NOTE: FIX PDF FOR DIAGRAMS
                                    </div>

                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleFtClose}>
                                    Close
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>


                        <div className="proj-cell" onClick={handleGaOpen}>
                            <img src="none" alt="Facility Layout Logo" className="proj-logo"/>
                            <strong> Facility Layout with Genetic Algorithm </strong>
                            <div> Using parallel concepts, this program writes a genetic algorithm that places stations
                                on a two dimensional space representing a
                                one-floor factory. It create a list of layout with the highest
                                affinity between stations and displays it
                                depicting the best possible layout.
                            </div>
                        </div>
                        <BootstrapDialog
                            onClose={handleGaClose}
                            open={gaOpen}
                            maxWidth='md'
                            fullWidth
                        >
                            <DialogTitle className="popup-title">
                                <span> Facility Layout with Genetic Algorithm </span>
                            </DialogTitle>
                            <DialogContent dividers>
                                <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Demo
                                        </span>
                                    <ul className="techdemo-list">
                                        <li><img src={JavaLogo} className="techdemo-logos" alt="Java"/></li>
                                        <li><img src={GradleLogo} className="techdemo-logos" alt="Gradle"/></li>
                                    </ul>
                                </div>

                                <div>
                                    I chose House MD as the theme for my project to add some personal flair into this
                                    project.
                                </div>

                                <div>
                                    Additional Resources: <a href="https://sid2697.github.io/external_pages/ELOPE.html"
                                                             target="_blank"> Facility Layout using Genetic Algorithm at
                                    Meditab Software, Inc.
                                </a>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleGaClose}>
                                    Close
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </div>
                </div>

                <h2>Special Events</h2>

                <div className="events-container">
                    <div className="proj-cell" onClick={handleFmcOpen}>
                        <img src={FindMyCommunityLogo} alt="Find My Community Logo" className="proj-logo"/>
                        <strong> HopHacks2024 <br/>Find My Community </strong>
                        <div> A web application that allows people to host community service events, such as food
                            banks, school events, and more, which can be easily accessed by the user.
                        </div>
                    </div>
                    <BootstrapDialog
                        onClose={handleFmcClose}
                        open={fmcOpen}
                        maxWidth='md'
                        fullWidth
                    >
                        <DialogTitle className="popup-title">
                            <span> Find My Community </span>
                        </DialogTitle>
                        <DialogContent dividers>
                            <div className="headers-img">
                                <div className="div1">
                                    <img src={FindMyCommunity}/>
                                </div>
                            </div>
                            <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Demo
                                        </span>
                                <ul className="techdemo-list">
                                    <li><img src={ReactLogo} className="techdemo-logos" alt="React"/></li>
                                    <li><img src={LeafletLogo} className="techdemo-logos" alt="Gradle"/></li>
                                    <li><img src={Auth0Logo} className="techdemo-logos" alt="MongoDB"/></li>
                                    <li><img src={MongoLogo} className="techdemo-logos" alt="MongoDB"/></li>
                                    <li><img src={SpringbootLogo} className="techdemo-logos" alt="Springboot"/></li>
                                </ul>
                            </div>
                            <div>
                                History:
                                This was a project completed within 36 hours for the HopHacks 2024 event. It is the
                                annual
                                hackathon hosted by John Hopkins University in Baltimore, Maryland.
                                <br/><br/>
                                Background:
                                The internet makes it easy to be a bad person. Our algorithm promotes hate as it
                                drives us
                                interactions, our social media runs on said interactions, and . Therefore, we wanted
                                to create
                                an app that would make it easy to be help others.

                                <br/><br/>
                                Purpose:
                                It is a web app that allows people to host community service events, such as food
                                banks, school events, and more, which can be easily accessed by the user. The user
                                would be able to RSVP to the event with a click allowing them to join without any
                                excessive work. The main purpose of this webpage is to allow a seamless transition
                                between hosting and joining an event because being a good person should not have to
                                be difficult.

                                <br/><br/>
                                Link to Repository: <a
                                href="https://github.com/s-Aura-v/FindYourCommunity-hophacks24"
                                target="_blank">Find Your Community Github</a>
                            </div>

                            <div>
                                Additional Resources: <a
                                href="https://devpost.com/software/find-your-community?ref_content=user-portfolio&ref_feature=in_progress"
                                target="_blank"> HopHacks Fall 2024
                            </a>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleFmcClose}>
                                Close
                            </Button>
                        </DialogActions>
                    </BootstrapDialog>
                </div>

                <Footer/>
            </div>
        </>
    );

}
