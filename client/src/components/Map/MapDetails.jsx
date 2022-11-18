import React, { useState, useEffect } from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import { getPhotoData } from "../../api";

import useStyles from "./styles";

function MapDetails({ place }) {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  // const [photo, setPhoto] = useState("");

  // useEffect(() => {
  //   if (place.photos) {
  //     let photoRef = place.photos[0].photo_reference;
  //     getPhotoData(photoRef).then((res) => {
  //       setPhoto(res.data);
  //     });
  //   }
  // }, []);

  return (
    <>
      {!isDesktop ? (
        <LocationOnOutlinedIcon color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography
            className={classes.typography}
            varient="subtitle2"
            gutterBottom
          >
            {place.name}
          </Typography>
          {/* {place.photos ? (
            <img className={classes.pointer} src={photo} alt={place.name} />
          ) : (
            ""
          )} */}
          {place.rating ? (
            <Rating size="small" value={Number(place.rating)} readOnly />
          ) : (
            ""
          )}
        </Paper>
      )}
    </>
  );
}

export default MapDetails;
