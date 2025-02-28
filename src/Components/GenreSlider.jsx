import React, { useRef } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"


const GenreMovie = ({genre, movies, index}) => {

    const elementRef = useRef(null);

    const sliderRight = (element) => {
        element.scrollLeft += 700
      }
    const sliderLeft = (element) => {
        element.scrollLeft -= 700
      }
  return (
    <div className="ml-10 relative" key={genre}>
    
                        <h2 className='text-[20px] text-white font-bold '>{genre}</h2>
                        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-4 pb-10 cursor-pointer h-[100%] z-10' onClick={() => sliderLeft(elementRef.current)} />
                        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-4 pb-10 right-0  cursor-pointer h-[100%] z-10' onClick={() => sliderRight(elementRef.current)} />
                         
                        <ul key={genre} ref={elementRef} className='flex scrollbar-hide px-3 overflow-x-auto scroll-smooth ' >
                                {movies.map((movie) => (
                                  
                                    <img className='w-[100px] md:w-[150px] mx-2 my-4 rounded-xl hover:scale-110 hover:border-[3px] cursor-pointer border-gray-400 object-cover object-center transition-all duration-50 ease-in shadow-md shadow-gray-950' key={movie.id} src={index % 3 === 0  ? IMAGE_BASE_URL + movie.poster_path : IMAGE_BASE_URL + movie.backdrop_path}
                                    alt={movie.title} />
                                ))}
                            </ul>
                       
    
    
                    </div>
  )
}

export default GenreMovie