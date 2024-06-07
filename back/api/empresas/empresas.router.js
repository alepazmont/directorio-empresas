const express = require("express");
const empresasRouter = express.Router();
const {
    create,
    getOne,
    getAll,
    updateOne,
    deleteOne,
    createMany
} = require("./empresas.controller");
const { isAuth } = require("../middleware/auth.middleware");
const { uploadMultiple } = require("../uploads/upload.controller");

// Rutas
empresasRouter.post("/register", [isAuth, uploadMultiple], create); // Ruta para crear una empresa
empresasRouter.post("/registerMany", [isAuth, uploadMultiple], createMany); // Ruta para crear muchas empresas de una vez
empresasRouter.get("/:id", getOne); // Ruta para obtener una empresa por su ID
empresasRouter.get("/", getAll); // Ruta para obtener todas las empresas
empresasRouter.patch("/:id", [isAuth], updateOne); // Ruta para actualizar una empresa por su ID
empresasRouter.delete("/:id", [isAuth], deleteOne); // Ruta para eliminar una empresa por su ID

module.exports = empresasRouter;
