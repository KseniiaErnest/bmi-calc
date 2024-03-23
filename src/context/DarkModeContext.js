import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
setDarkMode(!darkMode);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{darkMode: darkMode, toggleDarkMode: toggleDarkMode}}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
};

export {DarkModeContext, DarkModeProvider};