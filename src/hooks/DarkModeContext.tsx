import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext<any>({});

export const DarkModeProvider = ({ children }: any) => {
    const [isDark, setIsDark] = useState(true);
  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
