import React from 'react';
import{BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
         <Navbar />
        <Routes>
        <Route exact path='/form'  element={<Form />} />
        </Routes>
      </Router>
  );
}

export default App;
