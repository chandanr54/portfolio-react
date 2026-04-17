import { useState } from 'react'

import './App.css'
import Home from './page/Home'
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import NoUserFound from './components/NoUserFound';
import Login from './components/Login';

import { Toaster } from 'react-hot-toast';
import Register from './components/Register';


function App() {
  const [count, setCount] = useState(0)

  return (
    <><Toaster position="top-right" />
     <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       {/*  <Route path="/" element={<NoUserFound />} />*/}
         <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
     </HashRouter>
  
      
    </>
  )
}

export default App
