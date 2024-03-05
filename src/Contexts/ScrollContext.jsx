import React, { createContext, useContext } from 'react';
//New context to provide a function to scroll to the about section
const ScrollContext = createContext();

//Custom hook to use the scroll function
export const useScroll = () => {
  return useContext(ScrollContext);
};

//Provider to provide the scroll function to the components
export const ScrollProvider = ({ children }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <ScrollContext.Provider value={{ scrollToAbout }}>
      {children}
    </ScrollContext.Provider>
  );
};
