import React, { createContext, useState, useContext } from 'react';

const selectedOptionContext = createContext({})
export const SelectedOptionsProvider = ({ children }) => {
    const [selectedLang, setSelectedLang] = useState('English');
    const [showLang, setShowLang] = useState(false);
  return (
    <selectedOptionContext.Provider value={{
        selectedLang, setSelectedLang, showLang, setShowLang
    }}>
        {children}
    </selectedOptionContext.Provider>
  )
}

export const useLangContext = () => useContext(selectedOptionContext)
// export default selectedOptionContext