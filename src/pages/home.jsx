import '../styles/home.css'
import '../models/cube.js'
import {NavBar} from "../components/NavBar.jsx";
import {Footer} from "../components/Footer.jsx";
import GitHubLogo from "../assets/github.svg"
import LinkedInLogo from "../assets/linkedin.svg"
import EmailLogo from "../assets/email.svg"
import { useEffect, useRef, useCallback } from "react";
import * as THREE from 'three';

export function Home() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;

        const scene = new THREE.Scene();
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
        const mesh = new THREE.Mesh(geometry, material);

        // Position and Scale
        mesh.position.y = -1;
        mesh.scale.set(0.5, 2, 0.5);
        mesh.rotation.reorder('YXZ');
        mesh.rotation.set(.50, 1, 2);
        scene.add(mesh);

        // Camera settings
        const sizes = {
            width: 800,
            height: 600
        };
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 3;
        scene.add(camera);

        // Groups: Move multiple meshes at once
        const group = new THREE.Group();
        scene.add(group);

        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );
        const cube2 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );
        const cube3 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 0xff0000 })
        );
        group.add(cube1, cube2, cube3);
        cube1.position.x = -2;
        cube3.position.x = 2;
        group.position.y = 1;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });

        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);


    }, []);

    return (
        <>
            <div className="homepage" ref={containerRef}>

                <NavBar/>

                <div className="home-content">
                    <canvas className="cube" ref={canvasRef}></canvas>
                </div>

                <div className="external-links">
                    <div>
                        <a href="https://github.com/s-Aura-v"> <img src={GitHubLogo} alt={"github: /s-aura-v"}/> </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/s-aura-v/"> <img src={LinkedInLogo} alt={"linkedin: in/s-aura-v"}/> </a>
                    </div>
                    <div>
                        <a href="mailto:sauravl2004@gmail.com"> <img src={EmailLogo} alt={"email: sauravl2004@gmail.com"}/> </a>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}
