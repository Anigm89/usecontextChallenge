import { useTheme } from "../themes/ThemeContext";

const Themeselector = () =>{
    const { theme, changeTheme } = useTheme();

    const handleChangeTheme = (e) => {

        const newTheme = theme === 'light' ? 'dark' : 'light'; 
        changeTheme(newTheme)     
    }

    return (
            <button value={theme} onClick={handleChangeTheme}>Cambiar modo</button>
        )
}

export default Themeselector;
