import { useState } from 'react';
import { MainContext } from './MainContext';

export const MainProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <MainContext.Provider value={{ isLoading, setIsLoading, currentPage, setCurrentPage }}>
      {children}
    </MainContext.Provider>
  );
};
