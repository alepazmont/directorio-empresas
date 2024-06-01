const mongoose = require("mongoose");

/* const bcrypt = require("bcrypt");
const salt = 10; */

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: true,
  },
  apellidos: {
    type: String,
    trim: true,
    required: true,
  },
  telefono: {
    type: Number,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  conditions: {
    type: Boolean,
    required: true,
  },
  tipoUsuario: {
    type: String,
    enum: ['propietario', 'gestor', 'agencia publicitaria', 'otro'],
    required: true,
  }
});

/* // Middleware para hash de contraseña antes de guardar
userSchema.pre("save", async function(next) {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
}); */

const User = mongoose.model("User", userSchema);
module.exports = User;
