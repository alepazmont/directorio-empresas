const multer = require('multer');

// Configuración del almacenamiento para Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Ruta donde se guardarán los archivos subidos
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // Nombre de archivo único
    }
});

// Configuración del middleware de Multer
const upload = multer({ storage: storage });

// Middleware para subir múltiples archivos
exports.uploadMultiple = upload.fields([
    { name: 'logo', maxCount: 1 }, // Campo para el logo (1 archivo máximo)
    { name: 'galeriaFotos', maxCount: 10 } // Campo para la galería de fotos (hasta 10 archivos)
]);

// Controlador para enviar la respuesta después de subir los archivos
exports.uploadFile = (req, res) => {
    res.send({ data: 'Archivos subidos exitosamente', files: req.files }); // Respuesta con los archivos subidos
};
