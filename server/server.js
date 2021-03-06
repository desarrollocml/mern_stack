const express = require("express");
const app = express();

//Coneccion a Base de datos
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/garaje-live-coding")
  .then(() => console.log("Conectado a Base de Datos"));

//Model
const Coaster = require("./Models/Coaster.model");

//Routing
app.get("/", (req, res) =>
  res.json([{ mesagge: "hola json" }, { mesagge: "hola json2" }])
);
app.get("/api/coasters", (req, res) => {
  Coaster
  .find()
  .then((allCoasters) => res.json(allCoasters));
});
app.get("/api/details/:coaster_id", (req, res) => {
  const { coaster_id } = req.params;
  Coaster
  .findById(coaster_id)
  .then(coaster=>res.json(coaster))
  
});

app.listen(5005, () => console.log("SERVIDOR LEVANTADO"));
