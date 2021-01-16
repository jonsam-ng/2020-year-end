import React, { useReducer } from "react";
import { storeContext } from "./index";
import reducer from "./reducer";
import initState from "./store";

interface IProps {
  store: any;
  children: JSX.Element;
}

const Provider = (props: IProps) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <storeContext.Provider value={props.store}>
      {props.children}
    </storeContext.Provider>
  );
};

export default Provider;
