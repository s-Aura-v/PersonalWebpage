import '../styles/home.css'
import '../styles/projectsgrid.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import {YelpRecommendation} from "../components/YelpRecommendation.jsx";
import React, {useState} from "react";
import YelpLogo from '../assets/whereabouts.svg'
import FamilyThreadLogo from '../assets/familythread.svg'
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import {Button, styled} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import {Spotify} from "react-spotify-embed";


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

    return (
        <>
            <div className="homepage">

                <NavBar/>
                <br/>
                <div className="projects">
                    <div className="proj-container">
                        <div className="proj-cell" onClick={handleYelpOpen}>
                            <img src={YelpLogo} alt="YelpLogo" className="proj-logo"/>
                            <span> Yelp Recommendation </span>
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
                                to be added.
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleYelpClose}>
                                    Close
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>


                        <div className="proj-cell" onClick={handleFtOpen}>
                            <img src={FamilyThreadLogo} alt="YelpLogo" className="proj-logo"/>
                            <span> Family Thread </span>
                            <div> A webpage with interactive functions that allows the user to login through google,
                                create and edit family
                                trees which is saved on our servers, so that it may be accessed in different devices.
                            </div>
                        </div>
                        <BootstrapDialog
                            onClose={handleFtClose}
                            open={ftOpen}
                            maxWidth='md'
                            fullWidth
                        >
                            <DialogTitle className="popup-title">
                                <span> Family Thread </span>
                            </DialogTitle>
                            <DialogContent dividers>
                                to be added.
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleFtClose}>
                                    Close
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>




                        <div className="proj-cell">
                            <span> I Just Wanna Rewind </span>
                            <Spotify link="https://open.spotify.com/track/50GxvQA2KEWNt31EdwIlzY?si=927a067153454458" />


                        </div>

                    </div>


                </div>
                <Footer/>
            </div>
        </>
    );

}
