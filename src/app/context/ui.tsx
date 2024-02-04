import React, { createContext, useContext, useReducer } from "react";

interface UIContextProps {
  isHold: boolean;
  name: string;
  description: string;
  hovered: boolean;
  dispatch: React.Dispatch<UIAction>;
}

type UIAction =
  | { type: "SET_IS_HOLD"; payload: boolean }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_DESCRIPTION"; payload: string }
  | { type: "SET_HOVERED"; payload: boolean };

const initialUIContext: UIContextProps = {
  isHold: false,
  name: "",
  description: "",
  hovered: false,
  dispatch: () => {},
};

const uiReducer = (state: UIContextProps, action: UIAction): UIContextProps => {
  switch (action.type) {
    case "SET_IS_HOLD":
      return { ...state, isHold: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, description: action.payload };
    case "SET_HOVERED":
      return { ...state, hovered: action.payload };
    default:
      return state;
  }
};

export const UIContext = createContext<UIContextProps>(initialUIContext);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(uiReducer, initialUIContext);

  return (
    <UIContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
