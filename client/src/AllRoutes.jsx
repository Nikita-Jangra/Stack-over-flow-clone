import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Auth from './Pages/Auth/Auth.jsx'
import Questions from './Pages/Questions/Questions.jsx'
import AskQuestion from './Pages/AskQuestion/AskQuestion.jsx'
import DisplayQuestion from './Pages/Questions/DisplayQuestion.jsx'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/Questions' element={<Questions/>}/>
      <Route path='/AskQuestion' element={<AskQuestion/>}/>
      <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
    </Routes>
  )
}

export default AllRoutes
