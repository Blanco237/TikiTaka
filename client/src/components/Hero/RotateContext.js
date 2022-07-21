import React from 'react'

export const RotateContext = React.createContext();

const RotateProvider = ({ children }) => {

    const [rotate, setRotate] = React.useState(true);

  return (
    <RotateContext.Provider value={{rotate, setRotate}}>
        {children}
    </RotateContext.Provider>
  )
}

export default RotateProvider