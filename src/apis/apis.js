url = "http://127.0.0.1:8000/";
export const simple_crop = async (payload) => {
  try {
    const result = await axios.post(
      `${url}/api/crop_recomendation_simple/`,
      payload
    );
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
