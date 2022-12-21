import React, { useState } from "react";

const SwitchesContext = React.createContext();

function SwitchesProvider({children}) {
    const [placesDiv, setPlacesDiv] = useState(false)


    return <SwitchesContext.Provider value={{placesDiv, setPlacesDiv}}>
                {children}
            </SwitchesContext.Provider>
}

export { SwitchesContext, SwitchesProvider}