import { useContext } from "react";
import { SelectOptionsLoadersContext } from "../contexts";

export const useSelectorsOptionsLoadersContext = () => {
  return useContext(SelectOptionsLoadersContext);
};
