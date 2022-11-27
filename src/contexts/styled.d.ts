import { StatusBarStyle } from "expo-status-bar";

declare module "styled-components/native" {
  export interface DefaultTheme {
    name: StatusBarStyle;
    primary: string;
    background: string;
    borderColor: string;
    titleColor: string;
    labelColor: string;
    placeholder: string;
    accent: string;
    listItemBackgroundColor: string;
    green: string;
  }
}
