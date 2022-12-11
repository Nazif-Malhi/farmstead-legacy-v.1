import { Routes, Route } from "react-router-dom";
import "./App.css";
import MockUp from "./components/pages/MockUp";
// import { MockUp } from "./components/pages";
import NavbarHeader2 from "./components/navbar/NavbarHeader2";
import Footer from "./components/layouts/Footer";
import Crop_Recomendation from "./components/detection_inputs/Crop_Recomendation";
import Crop_Disease_Detection from "./components/detection_inputs/Crop_Disease_Detection";

function App() {
  return (
    <>
      <NavbarHeader2 />
      <Routes>
        <Route path="/" element={<MockUp />} />
        <Route path="/models/*">
          <Route path="crop_recomendation" element={<Crop_Recomendation />} />
          <Route
            path="crop_disease_detection"
            element={<Crop_Disease_Detection />}
          />
          <Route path="pest_detection" element={<Crop_Recomendation />} />
          <Route path="crop_recomendation" element={<Crop_Recomendation />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
