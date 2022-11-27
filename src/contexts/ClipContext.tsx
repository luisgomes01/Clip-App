import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface Clip {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

const ClipContext = createContext({} as Clip);

export const ClipContextProvider = ({ children }: Props) => {
  const toggleDarkTheme = () => {
    setClipGlobalState((prev) => ({ ...prev, isDarkTheme: !prev.isDarkTheme }));
  };

  const [clipGlobalState, setClipGlobalState] = useState({
    isDarkTheme: false,
    toggleDarkTheme,
  } as Clip);

  return (
    <ClipContext.Provider value={clipGlobalState}>
      {children}
    </ClipContext.Provider>
  );
};

export const useClip = () => useContext(ClipContext);
