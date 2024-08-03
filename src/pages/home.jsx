import '../styles/home.css'
import '../models/cube.js'
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import GitHubLogo from "../assets/github.svg"
import LinkedInLogo from "../assets/linkedin.svg"
import EmailLogo from "../assets/email.svg"
import { useEffect, useRef, useCallback } from "react";
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';

export function Home() {

    return (
        <>
            <div className="homepage">

                <NavBar/>

                <div className="home-content">
                    <p>this is still a wip</p>
                </div>


                <Footer/>
            </div>
        </>
    );
}
