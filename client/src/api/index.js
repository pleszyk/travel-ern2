import axios from "axios";

export const getPlacesData = async (type, lat, lng) => {
  try {
    const data = await axios.get("/data", {
      params: {
        type,
        lat,
        lng,
      },
    });
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotoData = async (photoRef) => {
  try {
    const photoUrl = await axios.get("/photo", {
      params: {
        photoRef,
      },
    });
    return photoUrl;
  } catch (error) {
    console.log(error);
  }
};
