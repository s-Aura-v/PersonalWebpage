import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Projects} from "./pages/projects.jsx";
import {Worker} from "@react-pdf-viewer/core";
import React from "react";
import {Library} from "./pages/library.jsx";
import {TestingGround} from "./pages/test.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/journal" element={<Library/>} />
                <Route path="/test" element={<TestingGround />} />
            </Routes>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            </Worker>

        </>
    );
}

export default App
