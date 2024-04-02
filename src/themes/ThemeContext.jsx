import { createContext, useContext, useState } from "react";

const ButtonContext = createContext();

export const ButtonProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    
    const changeTheme = (newTheme) =>{
        setTheme(newTheme)
    };

    return (
        <ButtonContext.Provider value={{theme, changeTheme}} >
            {children}
        </ButtonContext.Provider>
    )
}

export const useTheme = () => useContext(ButtonContext);