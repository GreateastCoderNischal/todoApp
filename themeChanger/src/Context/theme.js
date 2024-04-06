import React, { useContext } from 'react';

export const themeContext=React.createContext({
    Mode:'light',
    lightMode:()=>{},
    darkMode:()=>{},
});

export const ThemeProvider=themeContext.Provider;

function useTheme(){
    return useContext(themeContext);
}
export default useTheme