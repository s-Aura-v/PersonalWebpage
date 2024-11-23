import {NavBar} from "../components/NavBar.jsx";
import {Spotify} from "react-spotify-embed";
import React, {useEffect, useState} from "react";
import '../styles/library.css'

import PerfBlue from "../assets/Library/Movies/perf_blue.jpg"
import Papa from "papaparse";

export function Library() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 32;

    useEffect(() => {
        const csvFilePath = "/watched.csv";
        fetch(csvFilePath)
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        setMovies(results.data);
                    },
                });
            });
    }, []);

    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const totalPages = Math.ceil(movies.length / itemsPerPage);

    // Handle page change
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <NavBar />
            <div className="library-container">
                <div className="library-grid">
                    {currentMovies.map((movie, index) => (
                        <div className="library-cell-container" key={index}>
                            <div className="library-img">
                                {/*<img src={PerfBlue} alt={movie.Name}/>*/}
                            </div>
                            <div className="library-caption">
                                {movie.Name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
