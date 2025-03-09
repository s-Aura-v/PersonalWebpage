import {MovieLibrary} from "../components/MovieLibrary.jsx";
import {useState} from "react";
import {NavBar} from "../components/NavBar.jsx";
import {AnimeLibrary} from "../components/AnimeLibrary.jsx";
import {ArtLibrary} from "../components/ArtLibrary.jsx";

export function Library() {
    const [libraryState, setLibraryState] = useState(0);

    return (
        <>
            <NavBar/>

            <div className="library-container">
                <div className="tabs">
                    <ul className="tabs-list">
                        <li onClick={() => setLibraryState(0)}>ART</li>
                        {/*<li onClick={() => setLibraryState(1)}>MOVIES</li>*/}
                        {/*<li onClick={() => setLibraryState(2)}>ANIME</li>*/}
                    </ul>
                </div>
                {libraryState === 1 && <MovieLibrary/>} {/* Only render MovieLibrary if libraryState is 1 */}
                {/*{libraryState === 2 && <AnimeLibrary/>} /!* Only render MovieLibrary if libraryState is 1 *!/*/}
                {libraryState === 0 && <ArtLibrary/>} {/* Only render MovieLibrary if libraryState is 1 */}
            </div>
        </>
    );
}
