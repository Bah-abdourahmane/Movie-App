import React, { useEffect } from 'react'
import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Movies from './pages/Movies';
import Login from './pages/Login';
import Register from './pages/Register';
import WatchPage from './pages/WatchPage';
import SingleMovie from './pages/SingleMovie';

const App = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about-us' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/movie/:id' element={<SingleMovie/>} />
      <Route path='/watch/:id' element={<WatchPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
   </div>
  )
}

export default App
