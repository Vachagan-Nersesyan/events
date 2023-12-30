import { createContext, useState, useContext } from "react";

const LanguageContext = createContext({});

export const LanguageProvider: React.FC<OwnProps> = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const changeLanguage = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};


interface OwnProps {
    children: React.ReactElement<ChildProps> | React.ReactElement<ChildProps>[] | null;
}

interface ChildProps {
    text: string;
}