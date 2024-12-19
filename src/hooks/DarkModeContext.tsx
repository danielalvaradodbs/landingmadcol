import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext<any>({});

export const DarkModeProvider = ({ children }: any) => {
    const [isDark, setIsDark] = useState(true);
    const [scrollingDown, setScrollingDown] = useState(false);
    const [isCentered, setIsCentered] = useState(false);
  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark, scrollingDown, setScrollingDown, isCentered, setIsCentered }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => {
    return useContext(DarkModeContext);
};
