import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import { getPhotoData } from "../../api";

import useStyles from "./styles.js";

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const classes = useStyles();
  
// console.log(place)
//   const [photo, setPhoto] = useState("");

//   useEffect(() => {
//     if (place.photos) {
//       let photoRef = place.photos[0].photo_reference;
//       getPhotoData(photoRef).then((res) => {
//         setPhoto(res.data);
//       });
//     }
//   }, [place]);

  // console.log(photo)

  return (
    <Card elevation={6}>
      {/* {place.photos ? (
        <CardMedia style={{ height: 150 }} image={photo} title={place.name} />
      ) : (
        ""
      )} */}
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        {place.user_ratings_total ? (
          <Box display="flex" justifyContent="space-between" my={2}>
            <Rating name="read-only" value={Number(place.rating)} readOnly />
            <Typography component="legend">
              {place.user_ratings_total} review
              {place.user_ratings_total > 1 && "s"}
            </Typography>
          </Box>
        ) : (
          ""
        )}
        {place.price_level ? (
          <Box display="flex" justifyContent="space-between">
            <Typography component="legend">Price level</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level === 3
                ? "$$$"
                : place.price_level === 2
                ? "$$"
                : place.price_level === 1
                ? "$"
                : ""}
            </Typography>
          </Box>
        ) : (
          ""
        )}
        {place.vicinity && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon />
            {place.vicinity}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
