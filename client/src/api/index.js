import axios from "axios";

export const getPlacesData = async (type, lat, lng) => {
  try {
    const data = await axios.get("http://localhost:4000/data", {
      params: {
        type,
        lat,
        lng,
      },
    });

    // console.log(data.data.results);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhotoData = async (photoRef) => {
  try {
    const photoUrl = await axios.get("http://localhost:4000/photo", {
      params: {
        photoRef,
      },
    });
    return photoUrl;
  } catch (error) {
    console.log(error);
  }
};
