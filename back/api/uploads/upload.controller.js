const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => {
      const allowedFormats = ['jpg', 'jpeg', 'png', 'webp'];
      const extension = file.mimetype.split('/')[1];
      return allowedFormats.includes(extension) ? extension : 'jpg';
    },
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Formato de archivo no permitido. Solo se permiten jpg, jpeg, png y webp.'));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

exports.uploadMultiple = upload.fields([
  { name: 'logo', maxCount: 1 },
  { name: 'galeriaFotos', maxCount: 10 }
]);

exports.uploadFile = (req, res) => {
  try {
    res.send({ data: 'Archivos subidos exitosamente', files: req.files });
  } catch (error) {
    console.error('Error subiendo archivos a Cloudinary:', error);
    res.status(500).send({ error: 'Error subiendo archivos a Cloudinary' });
  }
};
