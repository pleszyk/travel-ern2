import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";
import { getPhotoData } from "../../api";

import mapStyle from "./mapStyle";
import useStyles from "./styles";
import MapDetails from "./MapDetails";

const Map = ({
  setCoordinates,
  coordinates,
  places,
  setChildClicked
}) => {
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={13}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyle,
        }}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.geometry.location.lat)}
            lng={Number(place.geometry.location.lng)}
            key={i}
          >
            <MapDetails place={place} />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
