import { Dispatch, SetStateAction, useMemo, useState } from "react";

export const useBoolean = (
  initialState: boolean = false
): [
  boolean,
  {
    set: Dispatch<SetStateAction<boolean>>;
    toggle: () => void;
    on: () => void;
    off: () => void;
    reset: () => void;
  },
] => {
  const [value, set] = useState(initialState);

  const operators = useMemo(
    () => ({
      set,
      toggle: () => {
        set((v) => !v);
      },
      on: () => set(true),
      off: () => set(false),
      reset: () => set(initialState),
    }),
    [set, initialState]
  );

  return [
    value,
    {
      ...operators,
    },
  ];
};
