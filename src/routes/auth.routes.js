//PASO 1
const {Router}    = require('express');
const {userLogin} = require('../controllers/auth.controller');

const router = Router();
//para crear un login se usa POST
router.post('/auth/login', userLogin);

module.exports = router;