import IState, { IAction } from "./interface";
import config from "../config";
import actionType from "./action";

const { total } = config;

// ---------- Reducer of Store ---------- //
const reducer = (state: IState, action: IAction) => {
  const { pageIndex } = state;
  const { type } = action;
  switch (type) {
    case actionType.NEXT_PAGE:
      return { ...state, pageIndex: (pageIndex + 1) % total };
    default:
      return state;
  }
};

export default reducer;
