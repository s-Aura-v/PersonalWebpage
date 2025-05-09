import '../styles/home.css'
import '../models/cube.js'
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import GitHubLogo from "../assets/github.svg"
import LinkedInLogo from "../assets/linkedin.svg"
import EmailLogo from "../assets/email.svg"
import React, { useEffect, useRef, useCallback } from "react";
import {Spotify} from "react-spotify-embed";

export function Home() {

    return (
        <>
            <div className="homepage">

                <NavBar/>

                <div className="home-content">
                    <Spotify link="https://open.spotify.com/track/50GxvQA2KEWNt31EdwIlzY?si=927a067153454458" />
                </div>



                <Footer/>
            </div>
        </>
    );
}
