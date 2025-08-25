import React, { useContext } from "react";

const LayoutContext = React.createContext();

const LayoutProvider = ({ children }) => {
    const [showHeader, setShowHeader] = React.useState(true);
    const [showFooter, setShowFooter] = React.useState(true);

    return (
        <LayoutContext.Provider value={{ showHeader, setShowHeader, showFooter, setShowFooter }}>
            {children}
        </LayoutContext.Provider>

    )
}

export default LayoutProvider;   // instead of this we'll return custom 

// now instead of const[value] = useContext(LayoutContext) we will use below function
// .ie. const [value] = useLayout();
export function useLayout() {    
    return useContext(LayoutContext);
}