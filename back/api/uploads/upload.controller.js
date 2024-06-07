const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

exports.uploadMultiple = upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'galeriaFotos', maxCount: 10 }
]);

exports.uploadFile = (req, res) => {
    res.send({ data: 'Archivos subidos exitosamente', files: req.files });
};
