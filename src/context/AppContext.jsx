import React from 'react'
import {createContext} from 'react'

const appcontext = createContext()

export const AppContextProvider = ({children})=>{

}

const AppContext = () => {
  return (
    <appcontext.Provider value={{

    }}>
            {children}
    </appcontext.Provider>
  )
}

export default AppContext