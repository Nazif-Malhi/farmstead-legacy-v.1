import { Routes, Route } from "react-router-dom";
import "./App.css";
import MockUp from "./components/pages/MockUp";
// import { MockUp } from "./components/pages";
import NavbarHeader2 from "./components/navbar/NavbarHeader2";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <NavbarHeader2/>
      <Routes>
        <Route path="/" element={<MockUp />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
