import { Routes, Route } from "react-router-dom";
import "./App.css";
import MockUp from "./components/pages/MockUp";
import Models from "./components/pages/Models";

function App() {
  return (
    <>
      <Routes>
        <Route path="farmstead" element={<MockUp />} />
        <Route path="farmstead/test/*" element={<Models />} />
      </Routes>
    </>
  );
}

export default App;
