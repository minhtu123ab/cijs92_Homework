import React, { createContext, useContext, useState } from 'react';

const SharedDataContext = createContext();

export const useSharedData = () => useContext(SharedDataContext);

export const SharedDataProvider = ({ children }) => {
  const [name, setName] = useState("");

  const updateName = (newName) => {
    setName(newName);
  };

  return (
    <SharedDataContext.Provider value={{ name, updateName }}>
      {children}
    </SharedDataContext.Provider>
  );
};
