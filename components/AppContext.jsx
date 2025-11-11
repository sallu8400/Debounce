"use client";
import { createContext, useContext, useState } from "react";

// 1️⃣ Create Context
const AppContext = createContext();

// 2️⃣ Provider Component
export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const alerFunc=()=>alert()
  

  return (
    <AppContext.Provider value={{ darkMode, toggleDarkMode,alerFunc }}>
      {children}
    </AppContext.Provider>
  );
};

// 3️⃣ Custom Hook for easy access
export const useAppContext = () =>useContext(AppContext)
