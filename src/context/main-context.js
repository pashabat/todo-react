import { createContext } from "react";

export const MainContext = createContext();

export const MainContextComponent = (props) => {

    const value = {
        defaultValue: 'done',
    };

    return (
      <MainContext.Provider value={value}>
          {props.children}
      </MainContext.Provider>
    );
}
