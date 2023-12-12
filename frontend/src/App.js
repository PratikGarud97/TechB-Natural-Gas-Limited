import './App.css';
import Home from './components/Home';
import NewCustomer from './components/NewCustomer';
import Update from './components/Update';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<NewCustomer/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </BrowserRouter>
  </div>
)}

export default App;
