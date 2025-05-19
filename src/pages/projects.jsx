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
import CheckMateLogo from '../assets/CheckMate/logo.svg'
import CheckMateDemo from '../assets/CheckMate/Automated Test (Final Version).mov'
import FamilyThreadUIMockup from '../assets/FamilyThread/finalUIMockup.pdf'
import FamilyThreadDiagrams from '../assets/FamilyThread/diagrams.pdf'
import FamilyThreadSRS from '../assets/FamilyThread/Family Tree SRS IEEE 29148-2018.docx.pdf'
import FamilyThreadInstallation from '../assets/FamilyThread/Family Thread Installation Guide .pdf'

import featured from "../../public/assets/data/featured.json";
import projects from "../../public/assets/data/projects.json";
import team from "../../public/assets/data/teamprojects.json";
import special from "../../public/assets/data/specialevents.json";


const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export function Projects() {
    const [activeModal, setActiveModal] = useState(null);

    const renderModalContent = (modalId) => {
        switch (modalId) {
            case "yelp":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Yelp Recommendation</DialogTitle>
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
                                href="https://github.com/sonephyo/yelp-recommendation-app"> GitHub </a>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={() => setActiveModal(null)}>Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                );

            case "genetic":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Facility Layout with Genetic Algorithm</DialogTitle>
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
                            <Button autoFocus onClick={() => setActiveModal(null)}>Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                );

            case "performance":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Parallel Performance Testing</DialogTitle>
                        <DialogContent dividers>
                            {/* TODO: Insert Parallel Performance Testing content here */}
                        </DialogContent>
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
                                Link to Repository: <a
                                href="https://github.com/s-Aura-v/ParallelPerformanceMeasurement"> GitHub </a> <br/>

                                Additional Resources: <a href="https://sid2697.github.io/external_pages/ELOPE.html"
                                                         target="_blank"> Facility Layout using Genetic Algorithm at
                                Meditab Software, Inc. </a>
                            </div>
                        </DialogContent>
                    </BootstrapDialog>
                );

            case "heat":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Heat Propagation</DialogTitle>
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

                                <br/>
                                Link to Repository: <a
                                href="https://github.com/s-Aura-v/HeatPropagation"> GitHub </a>

                            </div>
                        </DialogContent>
                    </BootstrapDialog>
                );

            case "network-communication":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Traffic Measurement through TCP && UDP</DialogTitle>
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
                                <strong>Abstract</strong><br/>
                                This project investigates how message size and protocol type (TCP vs UDP) affect latency
                                and throughput
                                in simple client-server communications. It leverages custom encryption using XOR with
                                xorshift RNG
                                and compares network performance across different machine pairs and networks.
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Background</strong><br/>
                                <ol>
                                    <li>
                                        Implement a client-server model where all exchanged messages are encrypted using
                                        a simple
                                        XOR scheme with a shared initial 64-bit key and a xorshift-based RNG for
                                        evolving the key.
                                    </li>
                                    <li>
                                        For TCP, measure round-trip latency (RTT) for messages of sizes: 8, 64, 256, and
                                        512 bytes.
                                    </li>
                                    <li>
                                        Measure TCP throughput by sending 1 MB of total data using different message
                                        sizes:
                                        <ul>
                                            <li>1024 × 1024-byte messages</li>
                                            <li>2048 × 512-byte messages</li>
                                            <li>4096 × 256-byte messages</li>
                                        </ul>
                                        Each message must be acknowledged by an 8-byte return value.
                                    </li>
                                    <li>
                                        Repeat both latency and throughput tests using UDP to compare differences in
                                        reliability,
                                        speed, and loss.
                                    </li>
                                    <li>
                                        Use at least three machine pairs (e.g., server-to-server, server-to-laptop,
                                        wired and wireless)
                                        and perform tests on two different networks (on-campus and off-campus).
                                    </li>
                                </ol>
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Purpose</strong><br/>
                                To compare the performance tradeoffs between TCP and UDP protocols under various message
                                sizes and
                                network conditions, with the added complexity of encryption and validation. The results
                                aim to inform
                                protocol choice in low-latency and high-throughput scenarios.
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Analysis</strong><br/>
                                <a
                                    href="https://htmlpreview.github.io/?https://github.com/s-Aura-v/NetworkCommunication/blob/main/src/main/resources/static/index.html"
                                    target="_blank">Preview Graphs</a>
                                <ul>
                                    <li>
                                        RTTs grew predictably with message size across all platforms for TCP, but more
                                        erratically
                                        for UDP due to packet loss and reordering.
                                    </li>
                                    <li>
                                        TCP throughput scaled better with larger packet sizes due to reduced overhead,
                                        especially
                                        when tested on wired connections.
                                    </li>
                                    <li>
                                        UDP performed better in throughput on low-latency networks but suffered on
                                        wireless or
                                        congested networks due to lack of retransmission and ACKs.
                                    </li>
                                    <li>
                                        Encryption using xorShift added negligible overhead but provided message
                                        integrity validation.
                                    </li>
                                </ul>
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Core Concepts</strong><br/>
                                TCP vs UDP Protocols, Network Latency, Throughput Measurement, XOR Encryption,
                                Pseudorandom Key Generation, Java Sockets, System.nanoTime, Network Variability,
                                Client-Server Testing
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Lessons Learnt + Failures</strong><br/>
                                <ul>
                                    <li>
                                        Some off-campus testing was inconsistent due to firewall restrictions; future
                                        tests should
                                        involve port forwarding or VPNs.
                                    </li>
                                    <li>
                                        UDP tests occasionally failed silently due to dropped packets not being detected
                                        unless explicitly validated.
                                    </li>
                                    <li>
                                        A better testing framework would automate multiple runs and collect averages and
                                        standard deviation.
                                    </li>
                                    <li>
                                        Next steps include:
                                        <ol>
                                            <li>Introduce packet drop simulation to stress UDP's weaknesses.</li>
                                            <li>Test with larger files to evaluate long-term throughput stability.</li>
                                            <li>Add TLS-based encryption as a comparison to XOR to understand
                                                performance/security tradeoffs.
                                            </li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>

                        </DialogContent>
                    </BootstrapDialog>
                );

            case "proxy":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Implementation of TCP Protocols</DialogTitle>
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
                                <strong>Abstract</strong><br/>
                                This project implements a proxy server that relays and caches web content using a
                                modified TFTP-inspired protocol.
                                It supports secure transmission with encryption, TCP-style sliding window reliability,
                                retransmission strategies,
                                and optional packet drops to simulate network unreliability. The system includes a
                                custom client, proxy, and backend
                                server to test functionality under varied network conditions.
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Background</strong><br/>
                                <ol>
                                    <li>
                                        Create a proxy server that listens for client connections, accepts a requested
                                        URL, and fetches the
                                        corresponding file or image via HTTP.
                                    </li>
                                    <li>
                                        The proxy caches the most recent result, sending cached data immediately if the
                                        request matches the cache.
                                    </li>
                                    <li>
                                        The proxy forwards the page or image file to the client, which then displays the
                                        content (images only required).
                                    </li>
                                    <li>
                                        Extend the basic idea of TFTP (RFC 1350) using the TFTP Options Extension (RFC
                                        2347), but modify it:
                                        <ul>
                                            <li>Use TCP-style sliding window with ACKs</li>
                                            <li>Implement TCP-style retransmission timeout (RTO)</li>
                                            <li>Use encrypted transmission with XOR or similar randomization</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Only binary (octet) transfer is supported.
                                    </li>
                                    <li>
                                        Introduce a simulated 1% packet drop via command-line argument.
                                    </li>
                                    <li>
                                        Store all received files in a temporary directory (e.g., `/tmp`) and validate
                                        contents using byte-by-byte
                                        comparison (`cmp`).
                                    </li>
                                </ol>
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Purpose</strong><br/>
                                To explore enhancements to the TFTP protocol using modern reliability strategies such as
                                TCP-style sliding windows,
                                encryption, caching, and retransmission logic. This simulates a more robust file
                                transfer scenario under controlled
                                and unreliable network conditions.
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Analysis</strong><br/>
                                [Insert link to HTML preview page with graphs here: <a
                                href="https://htmlpreview.github.io/?https://github.com/s-Aura-v/ProxyServer/blob/main/src/main/resources/data/index.html" target="_blank">Preview Graphs</a>]
                                <ul>
                                    <li>
                                        Sliding window transmission significantly improved throughput for window sizes less than 1, especially in high latency
                                        environments.
                                    </li>
                                    <li>
                                        With 1% packet drop enabled, smaller window sizes suffered from frequent
                                        retransmissions, leading to poor performance.
                                    </li>
                                    <li>
                                        The XOR-based encryption was effective and lightweight, with minimal impact on
                                        throughput.
                                    </li>
                                    <li>
                                        Caching improved repeat-request performance dramatically (~10× faster when cache
                                        hit).
                                    </li>
                                    <li>
                                        Validation using `cmp` ensured file correctness, especially under simulated drop
                                        conditions.
                                    </li>
                                </ul>
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Core Concepts</strong><br/>
                                Proxy Server Design, HTTP Relaying, Caching, Sliding Window Protocol, TCP-style
                                Retransmissions, XOR Encryption,
                                Packet Loss Simulation, File Validation, TFTP Extensions, Binary Transmission, Temporary
                                File Handling
                                <br/><br/>
                            </div>

                            <div>
                                <strong>Lessons Learnt + Failures</strong><br/>
                                <ul>
                                    <li>
                                        Early versions failed to resend packets correctly when using large window sizes
                                        without proper ACK tracking.
                                    </li>
                                    <li>
                                        Simulated packet drops weren't initially affecting retransmission logic until
                                        RTO logic was integrated properly.
                                    </li>
                                    <li>
                                        Cache comparison only worked for identical URLs; it was later updated to
                                        normalize input (e.g., URL trimming).
                                    </li>
                                    <li>
                                        Next Steps:
                                        <ol>
                                            <li>Compare XOR encryption with a lightweight stream cipher (e.g.,
                                                ChaCha20)
                                            </li>
                                            <li>Visualize cache hit/miss ratios in the performance dashboard</li>
                                            <li>Test with additional content types beyond images (e.g., HTML, JSON)</li>
                                            <li>Benchmark against actual TFTP and TCP implementations for further
                                                protocol insights
                                            </li>
                                        </ol>
                                    </li>
                                </ul>
                            </div>


                        </DialogContent>
                    </BootstrapDialog>
                );

            case "family":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Family Thread</DialogTitle>
                        <DialogContent className="overflow-clip" dividers>
                            <div>
                                <div>

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


                                    <div className="center">
                                        <ul className="techdemo-list">
                                            <li><a target="_blank"
                                                   href={FamilyThreadUIMockup}>UI Mockups</a></li>
                                            <li><a target="_blank"
                                                   href={FamilyThreadSRS}>SRS
                                                IEEE Documentation</a></li>
                                            <li><a target="_blank"
                                                   href={FamilyThreadDiagrams}>Activity and Sequence Diagrams</a></li>
                                            <li><a target="_blank"
                                                   href={FamilyThreadInstallation}>Installation Guide
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={() => setActiveModal(null)}>Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                );

            case "checkmate":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">CheckMate</DialogTitle>
                        <DialogContent className="overflow-clip" dividers>
                            <div>
                                <div className="headers-img">
                                    <div className="div1">
                                        <video controls="controls" width="1024" height="576" name="Checkmate Demo">
                                            <source src={CheckMateDemo}/>
                                        </video>
                                    </div>
                                </div>
                                <div className="tech-demo">
                                        <span className="mb-10">
                                            Tech Demo
                                        </span>
                                    <ul className="techdemo-list">
                                        <li><img src={ReactLogo} className="techdemo-logos" alt="React"/></li>
                                        <li><img src='../assets/vite-svgrepo-com.svg' className="techdemo-logos"
                                                 alt="Vite"/></li>
                                        <li><img src={HTML5Logo} className="techdemo-logos"
                                                 alt="HTML / CSS / JavaScript"/></li>
                                        <li><img src={CSSLogo} className="techdemo-logos" alt="CSS"/></li>
                                        <li><img src={JSLogo} className="techdemo-logos"
                                                 alt="HTML / CSS / JavaScript"/></li>
                                        <li><img src={DockerLogo} className="techdemo-logos" alt="Docker"/></li>
                                        <li><img src={MongoLogo} className="techdemo-logos" alt="SQLite"/></li>
                                    </ul>
                                </div>
                                <div>
                                    Goal: <br/>
                                    Create a user-friendly, web-based checklist that helps people manage, prioritize,
                                    and track tasks efficiently and easily with a focus on simplicity and usability to
                                    boost productivity, reduce stress, and enhance users' sense of accomplishment.

                                    <br/><br/>
                                    Lessons Learned:
                                    <ol>
                                        <li>
                                            We learned the importance of using direct, concise, and essential
                                            information to convey requirements.
                                        </li>
                                        <li>
                                            Cross-team communication was invaluable in shaping the product and the
                                            importance of having clear goals and deliverables.
                                        </li>
                                        <li>
                                            We learned to be more concise in our documentation efforts to reduce effort
                                            duplication and to make items more visible to other teams and to divide the
                                            workload, collaborate effectively, and enjoy the process
                                        </li>
                                    </ol>

                                    <br/>
                                    Failures + Next-Steps:
                                    <ul>
                                        <li>
                                            Add additional social logins
                                        </li>
                                        <li>
                                            Create the ability for task duplication and repetition along with a search
                                            functionality for users who have many tasks or projects
                                        </li>
                                        <li>
                                            Setup automatic database migration to assist with updates to the schema
                                        </li>
                                    </ul>
                                    <br/>

                                    Link to Repository: <a
                                    href="https://github.com/Paul-Austin-Oswego-CSC480-HCI521/OZ-CSC-480-HCI-521-Fall-2024"> GitHub </a>
                                    <br/>

                                    <div className="center">
                                        Documents:
                                    </div>
                                    <div className="center">
                                        <ul className="techdemo-list">
                                            <li><a target="_blank"
                                                   href="https://docs.google.com/document/d/11B28y6oOiERerFPX_XxYENGVtfmS9Hh0Rd-VsAGmaLA/edit?tab=t.0">User
                                                Manual</a></li>
                                            <li><a target="_blank"
                                                   href="https://docs.google.com/document/d/1i-fUfkOxltjOwh3GldsWsaHDKplJdekDR866CqMVcRQ/edit?tab=t.0">SRS
                                                IEEE Documentation</a></li>
                                            <li><a target="_blank"
                                                   href="https://miro.com/app/board/uXjVKlwPhX8=/?share_link_id=482308476952">Miro
                                                Board Sprint Tracking</a></li>
                                            <li><a target="_blank"
                                                   href="https://www.figma.com/board/LKr1Mf6yCC5WPvgfSb5AuZ/Planning?node-id=0-1&t=HbVVpaVx5EFYIzQP-1">FigJam
                                                Sketches</a></li>
                                            <li><a target="_blank"
                                                   href="https://www.figma.com/design/W774lSGq4gQoIVCJtCOxg8/To-Do-List-Usability-Prototype?node-id=0-1&t=XQBOELElZ7PzIHcD-0">Figma
                                                Wireframes</a></li>
                                            <li><a target="_blank"
                                                   href="https://www.figma.com/proto/W774lSGq4gQoIVCJtCOxg8/To-Do-List-Usability-Prototype?node-id=840-4332&starting-point-node-id=840%3A4332&t=u3Fg35FUxNquK67E-1">High-Fidelity
                                                Prototype</a></li>
                                            <li><a target="_blank"
                                                   href="https://docs.google.com/document/d/12R4Os32mwC-Z_mf2vRKDYGAMDoETlb9WyL_Qd3IIKbE/edit?tab=t.0">Testing
                                                Plan</a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={() => setActiveModal(null)}>Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                );

            case "community":
                return (
                    <BootstrapDialog onClose={() => setActiveModal(null)} open={true} maxWidth='md' fullWidth>
                        <DialogTitle className="popup-title">Find My Community</DialogTitle>
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
                            <Button autoFocus onClick={() => setActiveModal(null)}>Close</Button>
                        </DialogActions>
                    </BootstrapDialog>
                );

            default:
                return null;
        }

    };

    const scrollModePluginInstance = scrollModePlugin();
    scrollModePluginInstance.switchScrollMode(ScrollMode.Horizontal);


    return (
        <>

            <div className="homepage">
                <NavBar/>
                <br/>

                {/*<h2>Featured</h2>*/}
                {/*<div className=" carousel-grid">*/}
                {/*    {featured.map((project, index) => (*/}
                {/*        <div className=" proj-cell" key={`featured-${index}`}*/}
                {/*             onClick={() => setActiveModal(project.modal)}>*/}
                {/*            <img src={project.image} alt={project.title} className="proj-logo"/>*/}
                {/*            <strong> {project.title} </strong>*/}
                {/*            <div className="project-description"> {project.description} </div>*/}
                {/*            <div className=" project-tags">*/}
                {/*                {project.tags.map((tag, i) => (*/}
                {/*                    <div key={`featured-tag-${index}-${i}`} className=" project-tag">{tag}</div>*/}
                {/*                ))}*/}
                {/*            </div>*/}
                {/*            <div className=" project-links">*/}
                {/*                {project.links.map((link, i) => (*/}
                {/*                    <a key={`featured-link-${index}-${i}`} href={link.url} target=" _blank" rel="*/}
                {/* noopener noreferrer">*/}
                {/*                        <img src={link.icon} alt={link.name}/>*/}
                {/*                    </a>*/}
                {/*                ))}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <h2>Solo</h2>
                <div className=" carousel-grid">
                    {projects.map((project, index) => (
                        <div className=" proj-cell" key={`solo-${index}`}
                             onClick={() => setActiveModal(project.modal)}>
                            <img src={project.image} alt={project.title} className=" proj-logo"/>
                            <strong> {project.title} </strong>
                            <div> {project.description} </div>
                            <div className=" project-tags">
                                {project.tags.map((tag, i) => (
                                    <div key={`solo-tag-${index}-${i}`} className=" project-tag">{tag}</div>
                                ))}
                            </div>
                            <div className=" project-links">
                                {project.links.map((link, i) => (
                                    <a key={`solo-link-${index}-${i}`} href={link.url} target=" _blank" rel="
                 noopener noreferrer">
                                        <img src={link.icon} alt={link.name}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Team</h2>
                <div className=" carousel-grid">
                    {team.map((project, index) => (
                        <div className=" proj-cell" key={`team-${index}`}
                             onClick={() => setActiveModal(project.modal)}>
                            <img src={project.image} alt={project.title} className=" proj-logo"/>
                            <strong> {project.title} </strong>
                            <div> {project.description} </div>
                            <div className=" project-tags">
                                {project.tags.map((tag, i) => (
                                    <div key={`team-tag-${index}-${i}`} className=" project-tag">{tag}</div>
                                ))}
                            </div>
                            <div className=" project-links">
                                {project.links.map((link, i) => (
                                    <a key={`team-link-${index}-${i}`} href={link.url} target=" _blank" rel="
                 noopener noreferrer">
                                        <img src={link.icon} alt={link.name}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <h2>Special Events</h2>
                <div className=" carousel-grid">
                    {special.map((project, index) => (
                        <div className=" proj-cell" key={`special-${index}`}
                             onClick={() => setActiveModal(project.modal)}>
                            <img src={project.image} alt={project.title} className=" proj-logo"/>
                            <strong> {project.title} </strong>
                            <div> {project.description} </div>
                            <div className=" project-tags">
                                {project.tags.map((tag, i) => (
                                    <div key={`special-tag-${index}-${i}`} className=" project-tag">{tag}</div>
                                ))}
                            </div>
                            <div className=" project-links">
                                {project.links.map((link, i) => (
                                    <a key={`special-link-${index}-${i}`} href={link.url} target=" _blank" rel="
                 noopener noreferrer">
                                        <img src={link.icon} alt={link.name}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {renderModalContent(activeModal)}

                <Footer/>
            </div>
        </>
    );
}
