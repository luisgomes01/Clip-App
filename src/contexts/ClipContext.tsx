import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface Group {
  id: any;
  description: string;
  type: string;
}

interface Bill {
  id: any;
  description: string;
  date: Date;
  paid: boolean;
  groupId: any;
}

interface Clip {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  groups: Group[];
  addGroup: (group: Group) => void;
  bills: Bill[];
  addBill: (bill: Bill) => void;
}

const ClipContext = createContext({} as Clip);

export const ClipContextProvider = ({ children }: Props) => {
  const toggleDarkTheme = () => {
    setClipGlobalState((prev) => ({ ...prev, isDarkTheme: !prev.isDarkTheme }));
  };

  const addGroup = (group: Group) => {
    setClipGlobalState((prev) => ({
      ...prev,
      groups: [...prev.groups, group],
    }));
  };

  const addBill = (bill: Bill) => {
    setClipGlobalState((prev) => ({
      ...prev,
      bills: [...prev.bills, bill],
    }));
  };

  const [clipGlobalState, setClipGlobalState] = useState({
    isDarkTheme: false,
    toggleDarkTheme,
    groups: [],
    addGroup,
    bills: [],
    addBill,
  } as Clip);

  return (
    <ClipContext.Provider value={clipGlobalState}>
      {children}
    </ClipContext.Provider>
  );
};

export const useClip = () => useContext(ClipContext);
