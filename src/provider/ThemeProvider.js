import React, {useEffect, useState} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const ThemeProvider = ({children}) => {
   const [theme, setTheme] = useState("light");
   useEffect(()=>{
      setTheme(window.localStorage.theme);
   },[]);
   const toogleTheme = () => {
      setTheme(theme == 'dark' ? "light" : "dark");
   }
   return (
      <ThemeContext.Provider value={
         {theme, toogleTheme}
      }>
      {children} </ThemeContext.Provider>
   );
};
export default ThemeProvider;
