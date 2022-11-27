import { StatusBarStyle } from "expo-status-bar";
import { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

interface Props {
  children: ReactNode;
}

export interface Theme {
  name: StatusBarStyle;
  primary: string;
  background: string;
  titles: string;
  text: string;
  accent: string;
}

export const ThemeContext = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
