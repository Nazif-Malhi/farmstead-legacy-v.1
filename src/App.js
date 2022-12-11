import { Routes, Route } from "react-router-dom";
import "./App.css";
import MockUp from "./components/pages/MockUp";
// import { MockUp } from "./components/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MockUp />} />
      <Route path="/detction/*">
        <Route path="crop_recomendation" />
      </Route>
    </Routes>
  );
}

export default App;
