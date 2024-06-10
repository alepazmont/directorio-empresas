// uploads.controller.js

const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./cloudinary');
const path = require('path');
const axios = require('axios');

// Configuración de almacenamiento en Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => {
      const allowedFormats = ['jpg', 'jpeg', 'png', 'webp'];
      const extension = file.mimetype.split('/')[1];
      return allowedFormats.includes(extension) ? extension : 'jpg';
    },
    public_id: (req, file) => {
      const fileName = path.parse(file.originalname).name;
      return `${Date.now()}-${fileName}`;
    },
  },
});

// Filtro de archivos permitidos
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Formato de archivo no permitido. Solo se permiten jpg, jpeg, png y webp.'));
  }
};

// Configuración de multer
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Controlador para subir múltiples archivos
exports.uploadMultiple = upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'galeriaFotos', maxCount: 10 }
]);

// Controlador para manejar la respuesta después de subir archivos
exports.uploadFile = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No se han subido archivos.');
    }

    // Obtener las rutas de los archivos subidos en Cloudinary
    const logo = req.files['logo'] ? req.files['logo'][0].path : null;
    const galeriaFotos = req.files['galeriaFotos'] ? req.files['galeriaFotos'].map(file => file.path) : [];

    res.json({
      status: 200,
      message: 'Archivos subidos exitosamente',
      files: { logo, galeriaFotos }
    });
  } catch (error) {
    console.error('Error subiendo archivos a Cloudinary:', error);
    next(error); // Pasar el error al middleware de manejo de errores
  }
};
