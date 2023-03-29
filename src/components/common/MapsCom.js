import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Backdrop, CircularProgress } from "@mui/material";

export default function MapsCom({ zoom, position }) {
  return position ? (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyA_OC0GDGUb6Otsghg_9o4NocnNSH6-n6I">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "400px",
          }}
          center={position}
          zoom={zoom ? zoom : 13}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  ) : (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
