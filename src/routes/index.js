const { Router } = require('express');
const router = Router();

// Routes
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/about', (req, res) => {
    res.render('index', { 
        title: 'Mi aplicación', 
        message: '¡Bienvenido a mi aplicación!' 
    });
});

router.get('/hola', (req, res) => {
    res.send('hello world of the papi');
});

module.exports = router;