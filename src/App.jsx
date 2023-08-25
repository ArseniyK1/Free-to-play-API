import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Info from "./page/Info";
import GameOnePage from "./page/GameOnePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Info />} />
        <Route path="/one" element={<GameOnePage />} />
      </Route>
    </Routes>
  );
}

export default App;
