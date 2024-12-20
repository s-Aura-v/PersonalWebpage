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
import FacilityOverviewDemo from '../assets/facilityOverviewDemo.png'
import GeneticAlgorithmLogo from '../assets/GeneticAlgorithmLogo.png'
import HeatPropagationGIF from '../assets/heatPropagation_size4.gif'
import HeatPropagationLogo from '../assets/heatPropagationLogo.png'
import ParallelPerformanceDemo from '../assets/hashmapVsSkiplist.png'

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
    const [hpOpen, setHpOpen] = useState(false);
    const [ppOpen, setPpOpen] = useState(false);

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
    const handleHpOpen = () => {
        setHpOpen(true);
    };
    const handleHpClose = () => {
        setHpOpen(false);
    };
    const handlePpOpen = () => {
        setPpOpen(true);
    };
    const handlePpClose = () => {
        setPpOpen(false);
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
                                        <li>Create clusters of similar business based on data learned by running 5000
                                            iterations
                                        </li>
                                        <li>Use Dijkstra's Algorithm to find the shortest distance between two business
                                            in a cluster
                                        </li>
                                    </ol>
                                    <br/>
                                    Key Concepts: Cosine Similarity, Clusters, Dijkstra's Algorithm, Term Frequency
                                    Inverse Document Frequency (TFIDF), B-Tree
                                    <br/><br/>
                                    Link to Repository: <a
                                    href="https://github.com/s-Aura-v/YelpRecommendation"> GitHub </a>
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
                            <img src={GeneticAlgorithmLogo} alt="Facility Layout Logo" className="proj-logo"/>
                            <strong> Facility Layout with Genetic Algorithm </strong>
                            <div> Using parallel concepts, this program uses the idea of a genetic algorithm to finds
                                the best
                                possible placement for stations on a two dimensional space.
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
                                <div className="headers-img">
                                    <div className="div1">
                                        <img src={FacilityOverviewDemo}/>
                                    </div>
                                </div>
                                <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Demo
                                        </span>
                                    <ul className="techdemo-list">
                                        <li><img src={JavaLogo} className="techdemo-logos" alt="Java"/></li>
                                        <li><img src={GradleLogo} className="techdemo-logos" alt="Gradle"/></li>
                                        <li>
                                            <div
                                                className="display-flex justify-content-center align-items-center">JavaFX
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    Purpose: Create a parallel program that tries to fit X amount of stations into a NxN
                                    2d space and have it iterate over Z times.
                                    Each station should take different amount of space in the facility and should have
                                    "likes" and "dislikes" regarding proximity
                                    to other stations.
                                    <br/> <br/>
                                    Core Concepts: Java Multithreading, Countdown Latch, JavaFX, Thread Management and
                                    Use
                                    <br/><br/>
                                </div>

                                <div>
                                    Lessons Learned
                                    <ul>
                                        <li>Don't try to do everything in one class. Return values to use in other
                                            classes!
                                        </li>
                                        <li>Completely draft out my plan, including pseudocode. I only thought and drew
                                            it conceptually, so writing the methods ended up being more complicated than
                                            I had imagined.
                                        </li>
                                        <li>
                                            When drafting, write what methods you might need in each class and what they
                                            should return.
                                        </li>
                                    </ul>
                                    <br/>
                                    Additional Resources: <a href="https://sid2697.github.io/external_pages/ELOPE.html"
                                                             target="_blank"> Facility Layout using Genetic Algorithm at
                                    Meditab Software, Inc. </a>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleGaClose}>
                                    Close
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>

                        <div className="proj-cell" onClick={handlePpOpen}>
                            <img src={ParallelPerformanceDemo} alt="Facility Layout Logo" className="proj-logo"/>
                            <strong> Parallel Performance Testing </strong>
                            <div> Simulate an application in which a set of threads all rely on a shared collection of
                                data, then compare the throughput of the program for 2 parallel data structure.
                            </div>
                        </div>
                        <BootstrapDialog
                            onClose={handlePpClose}
                            open={ppOpen}
                            maxWidth='md'
                            fullWidth
                        >
                            <DialogTitle className="popup-title">
                                <span> Parallel Performance Testing </span>
                            </DialogTitle>
                            <DialogContent dividers>
                                <div className="headers-img">
                                    <div className="div1">
                                        <img src={ParallelPerformanceDemo}/>
                                    </div>
                                </div>
                                <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Demo
                                        </span>
                                    <ul className="techdemo-list">
                                        <li><img src={JavaLogo} className="techdemo-logos" alt="Java"/></li>
                                        <li><img src={GradleLogo} className="techdemo-logos" alt="Gradle"/></li>
                                        <li>
                                            <div
                                                className="display-flex justify-content-center align-items-center">JavaFX
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    Background <br/>
                                    <ol>
                                        <li>
                                            Simulate an application in which a set of threads all rely on a shared
                                            collection of
                                            data; sometimes read-only, sometimes modifying the data. For example, a
                                            game-server
                                            with game-state as the collection, or a campus course scheduling system.
                                            Write a
                                            stripped-down version of this in which all the threads just emulate clients,
                                            and
                                            further strips out nearly everything except the reading and writing (while
                                            still
                                            somehow using results).
                                        </li>
                                        <li>
                                            Write one solution using a data structure and/or locking scheme of your own
                                            devising (most likely a variant of some known technique). Write another to
                                            primarily use standard platform library components.
                                        </li>
                                        <li>
                                            Compare the throughput of your program across at least two different loads
                                            on each of at least two different platforms using JMH.
                                        </li>
                                    </ol>

                                    <br/> <br/>
                                    Core Concepts: Read-mostly Data, Java Multithreading, Concurrent SkipList,
                                    Concurrent HashMap, JMH Testing
                                    <br/><br/>
                                </div>

                                <div>
                                    Failures + Next-Steps
                                    <ul>
                                        <li> SkipList data testing was skewed because we were randomly accessing data
                                            that was not added to the skiplist. <br/>
                                            &ensp; To get a more refined testing, it should have mostly tested data that
                                            was already in the SkipList so we could compare better with HashMap.
                                        </li>
                                        <li>
                                            Better yet, it would have been better to perform 4 test cases.
                                            <ol>
                                                <li>Blocking HashMap</li>
                                                <li>Non-Blocking HashMap</li>
                                                <li>Blocking SkipList</li>
                                                <li>Non-Blocking SkipList</li>
                                            </ol>
                                        </li>
                                    </ul>
                                    <br/>
                                    Additional Resources: <a href="https://sid2697.github.io/external_pages/ELOPE.html"
                                                             target="_blank"> Facility Layout using Genetic Algorithm at
                                    Meditab Software, Inc. </a>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handlePpClose}>
                                    Close
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>

                        <div className="proj-cell" onClick={handleHpOpen}>
                            <img src={HeatPropagationLogo} alt="Facility Layout Logo" className="proj-logo"/>
                            <strong> Heat Propagation </strong>
                            <div> Simulating the heating of a metal alloy with three subsection with different thermal
                                characteristics in parallel with the use of relaxation algorithm.
                            </div>
                        </div>
                        <BootstrapDialog
                            onClose={handleHpClose}
                            open={hpOpen}
                            maxWidth='md'
                            fullWidth
                        >
                            <DialogTitle className="popup-title">
                                <span> Heat Propagation </span>
                            </DialogTitle>
                            <DialogContent dividers>
                                <div className="headers-img">
                                    <div className="div1 flex justify-content-center align-items-center">
                                        <img src={HeatPropagationGIF}/>
                                    </div>
                                </div>
                                <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Stack
                                        </span>
                                    <ul className="techdemo-list">
                                        <li><img src={JavaLogo} className="techdemo-logos" alt="Java"/></li>
                                        <li>
                                            <div
                                                className="display-flex justify-content-center align-items-center">JavaSwing
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    Background: <br/>
                                    Consider a rectangular metal alloy, four times as wide as high, consisting of three
                                    different metals, each with different thermal characteristics. Simulate how the
                                    metal alloy changes in temperature as it is heated from the top left and the bottom
                                    right corner.

                                    Each metal cell is comprised of three metals with independent heat constant values.
                                    The values for S, T, C_1, C_2, C_3, the dimensions of the mesh, and the threshold
                                    should be parameters of the program. Note, however, that combinations of these
                                    parameters do not do not converge well. Try values of (0.75, 1.0, 1.25) C1, C2, C3
                                    for your test/demo.

                                    Lastly, this product should be implemented with a server connection.
                                    <br/> <br/>
                                    Core Concepts: Java Concurrency/Parallelism, JavaSwing, Server-Server Communication
                                    (Java Sockets)
                                    <br/><br/>
                                </div>

                                <div>
                                    Lessons Learned
                                    <ol>
                                        <li> If dealing with relaxation problems, have a structure to store your new
                                            values while retrieving data from the original dataset.
                                        </li>
                                        <li>If you follow step 1, then you can use threads to break apart a problem by
                                            rows/columns to implement more threads and parallelize more.
                                        </li>
                                        <li>
                                            It might be better to work on the GUI button inputs then use that to test
                                            the program.
                                        </li>
                                    </ol>
                                </div>
                                <br/>
                                <div>
                                    Faults + Next Steps
                                    <ul>
                                        <li> Follow step 2 to improve calculation. Currently, if the heat
                                            propagation size is too large, it cannot complete in any reasonable time.
                                        </li>
                                        <li>
                                            JavaFX has HeatMap Chart that could have been used to display the graph.
                                        </li>
                                    </ul>
                                </div>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleHpClose}>
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
