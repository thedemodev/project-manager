import React, { createContext, useContext, useReducer } from 'react';

// Create Context
export const StateContext = createContext();

// HOC Component to provide global state to the app
export const StateProvider = ({ reducer, initialState, children }) => (
    //wrap the children components with the provider
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// State Provider to our components
export const useStateValue = () => useContext(StateContext);