export default interface IState {
  // ---------- interface of state ---------- //
  pageIndex: number;
}

export interface IContextProps {
  state: IState;
  dispatch: (action: IAction) => void;
}

export interface IAction {
  type: string;
  payload: any;
}
