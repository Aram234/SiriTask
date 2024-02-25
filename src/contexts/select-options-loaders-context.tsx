import { createContext } from "react";
import { loadAICPositions, loadAICRelations } from "../api";

const loaders = {
  loadAICPositions,
  loadAICRelations,
};

type Loaders = typeof loaders;

type ProvidedProps = {
  children: JSX.Element;
};

export const SelectOptionsLoadersContext = createContext<Loaders>(
  {} as Loaders
);

export const SelectOptionsLoadersProvider = ({ children }: ProvidedProps) => {
  return (
    <SelectOptionsLoadersContext.Provider value={loaders}>
      {children}
    </SelectOptionsLoadersContext.Provider>
  );
};
