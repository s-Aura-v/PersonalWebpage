import React, { useEffect, useState } from "react";
import XMLParser from 'react-xml-parser'; // Import XMLParser
import '../styles/library.css';

export function AnimeLibrary() {
    const [animeTitles, setAnimeTitles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 32; // Number of items per page


    useEffect(() => {
        // Fetch and parse XML data
        const fetchXMLData = async () => {
            try {
                // Use fetch to load the XML file
                const response = await fetch("/animelist.xml");
                const xmlText = await response.text();  // Get XML text response
                const parsedData = new XMLParser().parseFromString(xmlText); // Parse the XML
                const titles = extractAnimeTitles(parsedData);
                setAnimeTitles(titles);
            } catch (error) {
                console.error("Error fetching or parsing XML data:", error);
            }
        };

        fetchXMLData();
    }, []);

    // Function to extract anime titles from the parsed XML data
    const extractAnimeTitles = (xml) => {
        // Get all 'anime' elements
        const animeElements = xml.getElementsByTagName('anime');
        // Extract the series_title from each anime element
        return animeElements.map((anime) => anime.getElementsByTagName('series_title')[0].value);
    };

    // Pagination logic
    const indexOfLastAnime = currentPage * itemsPerPage;
    const indexOfFirstAnime = indexOfLastAnime - itemsPerPage;
    const currentAnime = animeTitles.slice(indexOfFirstAnime, indexOfLastAnime);
    const totalPages = Math.ceil(animeTitles.length / itemsPerPage);

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
                {currentAnime.map((title, index) => (
                    <div className="library-cell-container" key={index}>
                        <div className="library-item">
                            <h3>{title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </>
    );
}