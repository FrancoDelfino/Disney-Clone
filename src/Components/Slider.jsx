import { useEffect, useRef, useState } from 'react'
import { getTrendingMovies } from "../Services/trendingMoviesService";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setMovieList(data)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft -= screenWidth - 109
  }
  const sliderLeft = (element) => {
    element.scrollLeft += screenWidth - 109
  }


  return (
    <div className='relative'>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-4 cursor-pointer h-[100%]' onClick={() => sliderRight(elementRef.current)} />
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-4 right-0  cursor-pointer h-[100%]' onClick={() => sliderLeft(elementRef.current)} />
      <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef}>
        {movieList.map((item) => (
          <img key={item.id} src={IMAGE_BASE_URL + item.backdrop_path} alt={item.title} className='min-w-full h-[380px] object-cover object-center mr-5 rounded-md hover:border-[4px] border-gray-700 transition-all duration-75 ease-in shadow-[0_10px_4px_rgba(0,0,0,0.2)]' />
        ))}
      </div>

    </div>
  )
}

export default Slider
