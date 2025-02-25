import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import fondo from "./assets/Images/bg-color.jpg";

function App() {

  return (
   <div className='' style={{ backgroundImage: `url(${fondo})` }}>
      <Header/>
         <Slider/>
   </div>
  )
}

export default App
