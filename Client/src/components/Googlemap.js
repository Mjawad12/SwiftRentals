import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export default function Google() {
  return (
    <div>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -88 }}
        mapContainerClassName="mapContainer"
      >
        <Marker position={{ lat: 44, lng: -88 }}></Marker>
      </GoogleMap>
    </div>
  );
}
