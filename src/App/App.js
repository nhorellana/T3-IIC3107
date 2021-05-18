import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Helmet } from "react-helmet";
import Map from "../Map";
import Chat from "../Chat/index";
import Rotations from "../Information/index";

export default function CenteredGrid() {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <Helmet title="Analytics Dashboard" />
          <Map />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Chat />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <Rotations />
        </Grid>
      </Grid>
    </div>
  );
}
