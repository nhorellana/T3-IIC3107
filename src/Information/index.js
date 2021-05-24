import React from "react";
import styled from "styled-components/macro";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import {
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia as MuiCardMedia,
  Chip,
  Grid,
  Typography as MuiTypography,
} from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { spacing } from "@material-ui/system";

const residents_data = [
  { name: "Joaquin Jefe", operations: 2 },
  { name: "Pedro Sánchez", operations: 7 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
  },
  inline: {
    display: "inline",
  },
}));

const Card = styled(MuiCard)(spacing);

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Typography = styled(MuiTypography)(spacing);

function Flight({
  title,
  origin,
  destination,
  airline,
  residents,
  seats,
  plane,
}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    console.log("Test!");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Test!");
    setOpen(false);
  };

  const handleListItemClick = (value) => {
    console.log("Estoy apretando: " + value);
  };

  return (
    <Card mb={12}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography mb={4} component="p">
          {"Origen: " + origin}
        </Typography>
        <Typography mb={4} component="p">
          {"Destino: " + destination}
        </Typography>
        <Typography mb={4} component="p">
          {"Aerolínea: " + airline}
        </Typography>
        <Typography mb={4} component="p">
          {"Avión: " + plane}
        </Typography>
        <Typography mb={4} component="p">
          {"Asientos: " + seats}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Pasajeros
        </Button>
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Acá aparecé el listado de cada pasajero con su edad
          </DialogContentText>
          <List className={classes.root}>
            {residents.map((resident, index) => (
              <ListItem
                button
                onClick={() => handleListItemClick(resident.name)}
                key={index}
              >
                <ListItemText primary={resident.name} align="left" />
                <ListItemText primary={resident.age} align="right" />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Salir
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

function Flights(props) {
  const flights = props.flights;

  return (
    <React.Fragment>
      <Divider my={6} />

      <Grid container spacing={6}>
        {flights.map((flight, index) => (
          <Grid item xs={12} lg={6} xl={3}>
            <Flight
              title={"Vuelo: " + flight.code} //Codigo de avión
              origin={flight.origin}
              destination={flight.destination}
              residents={flight.passengers}
              seats={flight.seats}
              airline={flight.airline}
              plane={flight.plane}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default Flights;
