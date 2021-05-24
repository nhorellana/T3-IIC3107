import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import Map from "../Map";
import Chat from "../Chat/index";
import Flights from "../Information/index";
import { socket } from "../Server/index";

socket.emit("FLIGHTS");

const Colors = {
  aqua: "#00ffff",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  black: "#000000",
  blue: "#0000ff",
  brown: "#a52a2a",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgrey: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkviolet: "#9400d3",
  fuchsia: "#ff00ff",
  gold: "#ffd700",
  green: "#008000",
  indigo: "#4b0082",
  khaki: "#f0e68c",
  lime: "#00ff00",
  magenta: "#ff00ff",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  orange: "#ffa500",
  purple: "#800080",
  violet: "#800080",
  red: "#ff0000",
  yellow: "#ffff00",
};

function randomColor() {
  var result;
  var count = 0;
  for (var prop in Colors) if (Math.random() < 1 / ++count) result = prop;
  return result;
}

export default function CenteredGrid() {
  const [flights, setFlights] = useState([]);

  socket.on("FLIGHTS", (payload) => {
    for (let index = 0; index < payload.length; index++) {
      payload[index].color = randomColor();
      // Code, airline, origin, destination (coordenadas), plane, seats, passengers ([{name, age}])
    }
    setFlights(payload);
  });

  useEffect(() => {
    console.log("Se actualizó flights: " + flights);
  }, [flights]);

  return (
    <div>
      <Helmet title="T3 - Taller de integración" />
      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <Map flights={flights} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Chat />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <Flights flights={flights} />
        </Grid>
      </Grid>
    </div>
  );
}
