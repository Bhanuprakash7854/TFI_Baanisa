import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import QuestionPage from './components/QuestionPage';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<QuestionPage />} />
        <Route path='/result' element={<Result />} />      
      </Routes>
    </BrowserRouter>
  )
}

export default App
