"use client";

import React, { createContext, Dispatch, useReducer } from "react";
import { Action } from "./actions";
import { reducer, initialState, State } from "./reducer";

interface StoreContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const StoreContext = createContext<StoreContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
