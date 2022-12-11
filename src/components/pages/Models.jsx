import React from "react";
import Crop_Disease_Detection from "../detection_inputs/Crop_Disease_Detection";
import Crop_Recomendation from "../detection_inputs/Crop_Recomendation";
import Fertilizer_Recomendation from "../detection_inputs/Fertilizer_Recomendation";
import Pest_Detection from "../detection_inputs/Pest_Detection";
import { Routes, Route } from "react-router-dom";

const Models = () => {
  return (
    <Routes>
      <Route path="models">
        <Route path="crop_recomendation" element={<Crop_Recomendation />} />
        <Route
          path="crop_disease_detection"
          element={<Crop_Disease_Detection />}
        />
        <Route path="pest_detection" element={<Pest_Detection />} />
        <Route
          path="crop_recomendation"
          element={<Fertilizer_Recomendation />}
        />
      </Route>
    </Routes>
  );
};

export default Models;
