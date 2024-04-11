import { useEffect, useState } from 'react'
import './App.css'
import Home from './view/Home'
import { Route, Routes } from 'react-router'
import DetailPage from './view/DetailPage'
import NotFound from './view/NotFound'
import Navbar from './components/layout/Navbar'
import SearchPage from './view/SearchPage'


function App() {

  const [navFix ,setNavFix] = useState(false);

  useEffect(() => {
    const toggleNavFix = () => {
      if (window.pageYOffset > 300) {
        setNavFix(true);
      } else {
        setNavFix(false);
      }
    };
    // Event listener to handle scroll
    window.addEventListener('scroll', toggleNavFix);
    
    // Clean up the event listener
    return () => window.removeEventListener('scroll', toggleNavFix);
  },[]);

  return (
    <>
      
    <Navbar navFix={navFix}></Navbar>


    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/searchMovies' element={<SearchPage></SearchPage>}></Route>
      <Route path='/detail/:movieId' element={<DetailPage></DetailPage>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </>
  )
}

export default App
