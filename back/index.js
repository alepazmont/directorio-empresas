// Inicialización
const express = require("express");
const path = require("path");
require("dotenv").config();
const userRouter = require("./api/user/user.router"); // Import user router
const empresaRouter = require("./api/empresas/empresas.router");
const { connectMongo } = require("./utils/db");
const {
  notFoundHandler,
  errorHandler,
} = require("./api/middleware/error.middleware");

// Configuración
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

connectMongo();

// Endpoints
app.get("/", (req, res) => {
  res.json({ message: "El servidor está funcionando" });
});

// Route '/usuarios' to userRouter
app.use("/usuarios", userRouter); // Route '/usuarios' to userRouter

app.use("/empresas", empresaRouter);

// Manejo de excepciones / errores
app.use(notFoundHandler);
app.use(errorHandler);

// Activar servidor
app.listen(PORT, () => {
  console.log(`El servidor se ha iniciado en el puerto ${PORT}`);
});
