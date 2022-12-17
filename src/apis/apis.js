import axios from "axios";

const url = "http://127.0.0.1:8000";
export const simple_crop = async (payload) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
  try {
    const result = await axios.post(
      `${url}/api/crop_recomendation_simple/`,
      {
        headers: headers,
      },
      payload
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const advance_crop = async (payload) => {
  try {
    const result = await axios.post(
      `${url}/api/crop_recomendation_advance/`,
      payload
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
