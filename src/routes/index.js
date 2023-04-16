const { Router } = require('express');
const router = Router();

router.get('/hello', (req, res) => {
    res.send('hello world of the papi');
});

module.exports = router;