import './App.css'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';

import Slider from './Components/Slider'
import fondo from "./assets/Images/bg-color.jpg";




function App() {
  
  return (
    <div className='bg-cover' style={{ backgroundImage: `url(${fondo})` }}>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  )
}

export default App
