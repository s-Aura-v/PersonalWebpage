import { MovieLibrary } from "../components/MovieLibrary.jsx";
import { useState } from "react";
import { NavBar } from "../components/NavBar.jsx";
import {AnimeLibrary} from "../components/AnimeLibrary.jsx";
import {ArtLibrary} from "../components/ArtLibrary.jsx";

export function Library() {
    const [libraryState, setLibraryState] = useState(0);

    return (
        <>
            <NavBar />
            <div className="tabs">
                <ul className="tabs-list">
                    <li onClick={() => setLibraryState(1)}>MOVIES</li>
                    <li onClick={() => setLibraryState(2)}>ANIME</li>
                    <li onClick={() => setLibraryState(3)}>ART</li>
                </ul>
            </div>
            <div className="library-container">
                {libraryState === 1 && <MovieLibrary />} {/* Only render MovieLibrary if libraryState is 1 */}
                {libraryState === 2 && <AnimeLibrary />} {/* Only render MovieLibrary if libraryState is 1 */}
                {libraryState === 3 && <ArtLibrary />} {/* Only render MovieLibrary if libraryState is 1 */}
            </div>
        </>
    );
}
