const { Router } = require('express');
const router = Router();

// Rutas
router.get('/test', (req, res) => {
    const data = {
        "name": "Jesus",
        "website": "Videos de fut"
    }
    res.json(data);
});

module.exports = router;