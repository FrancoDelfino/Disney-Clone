import React, { useEffect, useState } from 'react'
import { getMoviesByGenres } from '../Services/GlobalApi'

import GenreMovie from './GenreSlider'




const GenreMovieList = () => {
    const [genreList, setGenreList] = useState([])
    

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const data = await getMoviesByGenres();
                setGenreList(data)
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchGenres();
    }, []);
    

    return (
        <div>

            {Object.entries(genreList).map(([genre, movies], index) => (
                
                <GenreMovie
                key={genre}
                genre={genre}
                movies={movies}
                index={index}
                />
            ))}

        </div>
    )
}

export default  GenreMovieList