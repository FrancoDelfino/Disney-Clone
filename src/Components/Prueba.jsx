import React, { useEffect, useRef, useState } from 'react'
import { getMoviesByGenres } from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"


const Prueba = () => {
    const [genreList, setGenreList] = useState([])
    const elementRef = useRef(null);

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
    

    const sliderRight = (element) => {
        element.scrollLeft += 500
      }
    const sliderLeft = (element) => {
        element.scrollLeft -= 500
      }

    return (
        <div>

            {Object.entries(genreList).map(([genre, movies]) => (
                <div className="ml-10 relative" key={genre}>

                    <h2 className='text-[20px] text-white font-bold '>{genre}</h2>
                    <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-4 pb-10 cursor-pointer h-[100%] z-10' onClick={() => sliderLeft(elementRef.current)} />
                    <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-4 pb-10 right-0  cursor-pointer h-[100%] z-10' onClick={() => sliderRight(elementRef.current)} />
                     
                    <ul ref={elementRef} className='flex scrollbar-hide px-3 overflow-hidden' >
                            {movies.map((movie) => (
                                <img className='w-[100px] md:w-[150px] mx-2 my-4 rounded-xl hover:scale-110 hover:border-[3px] cursor-pointer border-gray-400 object-cover object-center transition-all duration-50 ease-in' key={movie.id} src={IMAGE_BASE_URL + movie.poster_path} alt={movie.title} />
                            ))}
                        </ul>
                   


                </div>
            ))}

        </div>
    )
}

export default Prueba