const User = require("./user.model");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { nombre, apellidos, telefono, password, email, conditions, tipoUsuario } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        status: 400,
        message: "This email has already been used.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ nombre, apellidos, telefono, password: hashedPassword, email, conditions, tipoUsuario });
    const userDB = await newUser.save();

    return res.status(201).json({
      status: 201,
      message: `User ${userDB.email} created`,
    });
  } catch (error) {
    return next(error);
  }
}; 




const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userInfo = await User.findOne({ email });

    if (!userInfo) {
      return res.status(400).json({
        status: 400,
        message: "Invalid credentials - No user found",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, userInfo.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        status: 400,
        message: "Invalid credentials - No password match",
        data: null,
      });
    }

    const token = jwt.sign(
      {
        id: userInfo._id,
        email: userInfo.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    userInfo.password = "*************"; // Ocultar contraseña en la respuesta por seguridad

    return res.status(200).json({
      data: { message: "ok", user: userInfo, token: token },
    });
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    const token = null;
    return res.status(200).json({
      status: 200,
      message: "Logout successful",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { register, login, logout };
