import React, { useContext, createContext, useReducer, FC } from "react";
import reducer from "./reducer";
import initState from "./store";
import { IContextProps } from "./interface";
import actionType from "./action";

export const storeContext: React.Context<IContextProps> = createContext(
  {} as IContextProps
);

const ContextProvider: FC = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </storeContext.Provider>
  );
};

export const useStore = () => useContext(storeContext);
export { actionType };
export default ContextProvider;
