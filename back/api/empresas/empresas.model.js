const mongoose = require("mongoose");

const empresasSchema = new mongoose.Schema({
    nameEmpresa: { type: String, required: true, trim: true, unique: true },
    categoria: { type: String, required: true },
    prodServ: { type: String, enum: ['Productos', 'Servicios', 'Ambos'], required: true },
    listaProd: { type: Array },
    listaServ: { type: Array },
    logo: { type: String, required: true, trim: true },
    galeriaFotos: { type: Array },
    direccion: { type: String, required: true, trim: true },
    codigoPostal: { type: Number, required: true, trim: true  },
    paradaMetro: { type: String },
    locMapa: { type: Array, required: true },
    telefono: { type: Array, trim: true }, 
    email: { type: String, required: true, trim: true },
    web: { type: String }, 
    redes: { type: Array }, 
    condiciones: { type: Boolean, default: false }
});

const Empresas = mongoose.model("Empresas", empresasSchema);

module.exports = Empresas;