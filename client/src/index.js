import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Home from './pages/Home/Home';
import Book from './pages/Book/Book';
import NotFound from './pages/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <React.StrictMode>
    <Router>
      <Routes>
        <Route index exact path='/' element={<Home/>}/>
        <Route exact path='/kitap' element={<Book/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </React.StrictMode> 
  );
}

root.render(<App/>);