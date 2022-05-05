import {
  PropsWithChildren,
  ReactElement,
  useReducer,
  createContext,
} from "react";
import { IModalState, IModalAction } from "./UIModal.typing";

const initialState: IModalState = {
  title: "",
  body: null,
  show: false,
};

const reducer = (state: IModalState, action: IModalAction): IModalState => {
  switch (action.type) {
    case "open":
      return { ...state, show: true };
    case "close":
      return {
        ...initialState,
      };
    case "template":
      return {
        ...state,
        title: action.payload?.title,
        body: action.payload?.body,
      };
    default:
      throw new Error(`Неизвестное действие '${action.type}' модуля Modal.`);
  }
};

export const UIModalContext = createContext(initialState);

UIModalContext.displayName = "UIModalContext";

const UIModalContextProvider: React.FunctionComponent<
  PropsWithChildren<unknown>
> = ({ children }): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UIModalContext.Provider
      value={Object.assign(state, {
        dispatch,
      })}
    >
      {children}
    </UIModalContext.Provider>
  );
};

export default UIModalContextProvider;
