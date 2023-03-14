import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/index.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFund from './pages/NotFund';
import ThemeProvider from './provider/ThemeProvider';
import GlobalStyle from './provider/GlobalStyle';
import Blog from './pages/Blog';
import BlogInfo from './pages/BlogInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
   <BrowserRouter>
      <ThemeProvider>
         <GlobalStyle/>
         <Routes>
            <Route path='/'
               element={<Home/>}/>
            <Route path='/contact'
               element={<Contact/>}/>
            <Route path='/blog'
               element={<Blog/>}/>
            <Route path='/blog/:id'
               element={<BlogInfo/>}/>
            <Route path='*'
               element={<NotFund/>}/>
         </Routes>
      </ThemeProvider>
   </BrowserRouter>

);
