import { NavBar } from "../components/NavBar.jsx";
import React, { useEffect, useState } from "react";
import '../styles/library.css';
import Papa from "papaparse";
import axios from "axios"; // We will use Axios for API calls
import TMBD from '../assets/tmdb.png'

const TMDB_API_KEY = import.meta.env.VITE_TMDB_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const TMDB_IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function MovieLibrary() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviePosters, setMoviePosters] = useState({});
    const itemsPerPage = 32; // 4 rows of 8 columns

    useEffect(() => {
        // Fetch the CSV file
        const csvFilePath = "/watched.csv";
        fetch(csvFilePath)
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        setMovies(results.data);
                        fetchMoviePosters(results.data);
                    },
                });
            });
    }, []);

    const fetchMoviePosters = async (movies) => {
        let posters = {};
        const posterPromises = movies.map(async (movie) => {
            try {
                const response = await axios.get(TMDB_BASE_URL, {
                    params: {
                        api_key: TMDB_API_KEY,
                        query: movie.Name,
                        language: 'en-US',
                    }
                });
                const movieData = response.data.results[0];
                if (movieData && movieData.poster_path) {
                    posters[movie.Name] = `${TMDB_IMG_BASE_URL}${movieData.poster_path}`;
                }
            } catch (error) {
                console.error('Error fetching movie poster:', error);
            }
        });
        await Promise.all(posterPromises);
        setMoviePosters(posters);
    };


    // Pagination logic
    const indexOfLastMovie = currentPage * itemsPerPage;
    const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const totalPages = Math.ceil(movies.length / itemsPerPage);

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
                <div className="library-grid">
                    {currentMovies.map((movie, index) => (
                        <div className="library-cell-container" key={index}>
                            <div className="library-img">
                                <img
                                    src={moviePosters[movie.Name]}
                                    alt={movie.Name}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination controls */}
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
                    <br/>
                </div>
                <br/>
                <div className="center">
                    <img src={TMBD} alt="Images pulled from TMDB"/>
                </div>

        </>
    );
}
