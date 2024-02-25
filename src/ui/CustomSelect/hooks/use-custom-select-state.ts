import { useState } from "react";

type UseCustomSelectStateProps<T extends TagOption> = {
  //
};
export function useCustomSelectState<
  T extends TagOption
>({}: UseCustomSelectStateProps<T>) {
  const [state, setState] = useState<T[]>([]);

  return {};
}
