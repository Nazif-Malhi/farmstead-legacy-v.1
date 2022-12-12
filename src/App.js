import { Routes, Route } from "react-router-dom";
import "./App.css";
import MockUp from "./components/pages/MockUp";
// import { MockUp } from "./components/pages";
import PestDetectionPage from "./components/pages/pestDetectPage";
import NavbarHeader2 from "./components/navbar/NavbarHeader2";

import Footer from "./components/layouts/Footer";
function App() {
  return (
    <>
    <NavbarHeader2/>
    <Routes>
      <Route path="/" element={<MockUp />} />
      <Route path="/pest-detection" element={<PestDetectionPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
