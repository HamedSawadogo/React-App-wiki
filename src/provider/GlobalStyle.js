import React, {useContext} from 'react';
import {createGlobalStyle} from 'styled-components';
import {ThemeContext} from '../context/ThemeContext';

const StyledGlobalStyle = createGlobalStyle `
body {
   background: ${
   ({isDarkMode}) => isDarkMode ? '#2F2E41' : 'whitesmoke'
};
   margin : 0;
}
`;

const GlobalStyle = () => {
   const {theme} = useContext(ThemeContext);
   console.log(theme);
   return <StyledGlobalStyle isDarkMode={
      theme == 'dark'
   }/>
};

export default GlobalStyle;
