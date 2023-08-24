import { useContext } from "react";
import { FreeToPlayContext } from "./context/FreeToPlayProvider";

function App() {
  const ctx = useContext(FreeToPlayContext);

  return (
    <>
      {ctx.count} <button onClick={() => ctx.increment()}>++</button>
      <button onClick={() => ctx.decrement()}>--</button>
    </>
  );
}

export default App;
