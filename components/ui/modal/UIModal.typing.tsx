import { Dispatch } from "react";

export interface IModalState {
  title?: string;
  body?: React.ReactElement | null;
  show?: boolean;
  dispatch?: Dispatch<IModalAction>;
}

export interface IModalAction {
  type: "open" | "close" | "template";
  payload?: IModalState;
}
