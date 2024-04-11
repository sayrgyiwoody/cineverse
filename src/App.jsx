import { useState } from 'react'
import './App.css'
import Home from './view/Home'
import { Route, Routes } from 'react-router'
import DetailPage from './view/DetailPage'
import NotFound from './view/NotFound'
import Navbar from './components/layout/Navbar'

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
