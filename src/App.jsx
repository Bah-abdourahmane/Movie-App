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
import Profile from './pages/Dashboard/Profile';
import Aos from 'aos';
import Password from './pages/Dashboard/Password';
import FavoritesMovies from './pages/Dashboard/FavoritesMovies';
import MovieList from './pages/Dashboard/Admin/MovieList';
import Dashboard from './pages/Dashboard/Admin/Dashboard';
import Categories from './pages/Dashboard/Admin/Categories';

const App = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  Aos.init()
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
      <Route path='/profile' element={<Profile/>} />
      <Route path='/password' element={<Password/>} />
      <Route path='/favorites' element={<FavoritesMovies/>} />
      <Route path='/movieslist' element={<MovieList/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
   </div>
  )
}

export default App
