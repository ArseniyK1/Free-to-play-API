import { createContext, useState } from "react";

export const FreeToPlayContext = createContext({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

export const FreeToPlayProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const value = { count, increment, decrement };

  return (
    <FreeToPlayContext.Provider value={value}>
      {children}
    </FreeToPlayContext.Provider>
  );
};
