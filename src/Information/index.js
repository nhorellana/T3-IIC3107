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

function Rotation({ title, description, chip }) {
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
        {chip}
        <Typography mb={4} component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Mas Informacion
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
            Acá aparecé el listado de residentes con sus respectivo numero de
            procedimientos
          </DialogContentText>
          <List className={classes.root}>
            {residents_data.map((resident, index) => (
              <ListItem
                button
                onClick={() => handleListItemClick(resident.name)}
                key={index}
              >
                <ListItemText primary={resident.name} align="left" />
                <ListItemText primary={resident.operations} align="right" />
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

function Rotations() {
  return (
    <React.Fragment>
      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} xl={3}>
          <Rotation
            title="Rotación 1"
            description="Esta es la rotación de X personas den Y unidad. La idea es que al hacer click acá se abra un modal donde salga una lista de cada miembro de la rotación con sus procedimientos (totales, de la semana, etc) y al hacerle click, se pueda dirigir al perfil del residente"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Rotation
            title="Rotación 2"
            description="Esta es la rotación de X personas den Y unidad. La idea es que al hacer click acá se abra un modal donde salga una lista de cada miembro de la rotación con sus procedimientos (totales, de la semana, etc) y al hacerle click, se pueda dirigir al perfil del residente"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Rotation
            title="Rotación 3"
            description="Esta es la rotación de X personas den Y unidad. La idea es que al hacer click acá se abra un modal donde salga una lista de cada miembro de la rotación con sus procedimientos (totales, de la semana, etc) y al hacerle click, se pueda dirigir al perfil del residente"
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Rotation
            title="Rotación 4"
            description="Esta es la rotación de X personas den Y unidad. La idea es que al hacer click acá se abra un modal donde salga una lista de cada miembro de la rotación con sus procedimientos (totales, de la semana, etc) y al hacerle click, se pueda dirigir al perfil del residente"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Rotations;
