import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

const ClipContext = createContext({});

export const ClipContextProvider = ({ children }: Props) => {
  const [clipGlobalState, setClipGlobalState] = useState({});

  return (
    <ClipContext.Provider value={clipGlobalState}>
      {children}
    </ClipContext.Provider>
  );
};

export const useClip = () => useContext(ClipContext);
