import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router'
import DetailPage from './components/DetailPage'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <Navbar></Navbar>


    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/detail/:movieId' element={<DetailPage></DetailPage>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </>
  )
}

export default App
