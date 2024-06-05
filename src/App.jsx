import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Projects} from "./pages/projects.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </>
    );
}

export default App
