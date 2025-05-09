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
    const [moviePosters, setMoviePosters] = useState({});

    useEffect(() => {
        // Fetch the CSV file
        const csvFilePath = "/ratings.csv";
        fetch(csvFilePath)
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const sortedMovies = results.data.sort((a, b) => {
                            const ratingA = parseFloat(a.Rating); // Convert to number
                            const ratingB = parseFloat(b.Rating); // Convert to number
                            return ratingB - ratingA; // Sort from highest to lowest
                        });
                        setMovies(sortedMovies);
                        fetchMoviePosters(sortedMovies);
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

    return (
        <>
            <div className="center">
                <h2>please wait a few seconds for the movies to load...</h2>
            </div>

            <div className="library-grid">
                {movies.map((movie, index) => (
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
            <div className="center">
                <img src={TMBD} alt="Images pulled from TMDB"/>
            </div>
        </>
    );
}
