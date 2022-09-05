import React from 'react'
import './App.css'
import {BrowserRouter as  Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';
import  Table from './Component/Table'
import Form from './Component/Form'


function App() {
  return (
<Router>
    <Navbar />
  <Routes>
    <Route exact path ='/form' element={<Form />} />
        <Route exact path ='/table' element={<Table />} />
    </Routes>  
</Router>
  )
}

export default App
