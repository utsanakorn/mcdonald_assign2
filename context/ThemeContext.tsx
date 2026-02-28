import React, { createContext, useContext, useState, ReactNode } from "react";
import { useColorScheme } from "react-native";

export const lightTheme = {
  background: "#f5f5f5",
  card: "#ffffff",
  text: "#000000",
  subText: "#555555",
  navBg: "#ffffff",
  navBorder: "#e0e0e0",
  headerBg: "#ffffff",
  border: "#FFC72C",
  inputBg: "#f0f0f0",
};

export const darkTheme = {
  background: "#1a1a1a",
  card: "#2c2c2c",
  text: "#ffffff",
  subText: "#aaaaaa",
  navBg: "#1f1f1f",
  navBorder: "#333333",
  headerBg: "#1f1f1f",
  border: "#FFC72C",
  inputBg: "#333333",
};

type Theme = typeof lightTheme;

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemScheme === "dark");
  const toggleTheme = () => setIsDark((prev) => !prev);
  const theme = isDark ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
