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
                <Footer/>
            </div>
        </>
    );

}
