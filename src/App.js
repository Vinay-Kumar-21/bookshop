import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import Authors from './components/Authors/Authors';
import BestBooks from './components/BestBooks/BestBooks';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import Popup from './components/Popup/Popup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const[orderPopup,setOrderPopup]=useState(false);

  const handleOrderPopup=()=>{
    setOrderPopup(!orderPopup);
  }
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh();
  },[])

  return(
    <BrowserRouter>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup}/>
      <Routes>
        <Route path='/' element={<Home handleOrderPopup={handleOrderPopup}/>}>
          </Route> 

          <Route path='/bestbooks' element={<BestBooks/>}></Route>
          <Route path='/authors' element={<Authors/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
