import { createContext, useState } from "react";



const AppContext = createContext();


export const GreenwoodAppContextProvider = ({children})=>{
   
    const [location, setLocation] = useState('The Greenwood')
   

    return <AppContext.Provider value={{
        location:location,
        setLocation:setLocation,
    }}>
            {children}
    </AppContext.Provider>
}

export default AppContext;