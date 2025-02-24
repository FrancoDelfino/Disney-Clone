import { useEffect, useState } from 'react'
import { getTrendingMovies } from "../Services/trendingMoviesService";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"

const Slider = () => {
    const [movieList, setMovieList] = useState([])
    
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
     
  return (
    
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide'>
      {movieList.map((item) => (
        <img key={item.id} src={IMAGE_BASE_URL+item.backdrop_path} alt={item.title} className='min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md scrollbar-none ' />
      ))} 
    </div>
    
  )
}

export default Slider
