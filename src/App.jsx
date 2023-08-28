import { Route, Routes } from "react-router-dom";
import Layout from "./page/Layout";
import Info from "./page/Info";
import GameOnePage from "./page/GameOnePage";
import ErrorPage from "./page/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Info />} />
        <Route path="/:id" element={<GameOnePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
