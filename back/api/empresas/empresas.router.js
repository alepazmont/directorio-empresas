const express = require('express');
const router = express.Router();

// Define tus rutas aquí
router.get('/', (req, res) => {
  res.send('Empresa router funcionando');
});

module.exports = router;