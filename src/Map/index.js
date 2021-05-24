import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { socket } from "../Server/index";
import icon from "leaflet/dist/images/marker-icon.png";

let DefaultIcon = new L.icon({
  iconUrl:
    "https://pics.freeicons.io/uploads/icons/png/7005019891536669219-512.png",
  iconSize: [40, 40],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map(props) {
  const flights = props.flights;
  const [positions, setPosition] = useState([]);

  useEffect(() => {
    socket.on("POSITION", (payload) => {
      var check = positions.find((x) => x.code === payload.code);
      if (typeof check !== "undefined") {
        positions[positions.indexOf(check)] = payload;
        setPosition(positions);
      } else {
        setPosition([...positions, payload]);
      }
    });
  }, [positions]);

  return (
    <MapContainer
      center={{ lat: 11.5927858, lng: -38.9303436 }}
      zoom={2}
      style={{ height: "50vh", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((flight) => (
        <Marker position={flight.position}>
          <Popup>{flight.code}.</Popup>
        </Marker>
      ))}
      ;
      {flights.map((flight, index) => (
        <div>
          <Polyline
            pathOptions={{ color: flight.color }}
            positions={[flight.origin, flight.destination]}
          >
            <Popup>{flight.code}</Popup>
          </Polyline>
        </div>
      ))}
    </MapContainer>
  );
}
