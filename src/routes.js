const express = require('express');
const router = express.Router();

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

router.get('/ping',(req, res) =>{
   res.json({pong:true});
});

// Listar os estados do usuário
router.get('/states', UserController.getStates);

// Processo de login
router.post('/user/signin', AuthController.signin);
// Processo de cadastro
router.post('/user/signup', AuthController.signup);

// Pegar informações do próprio usuário
router.get('/user/me', UserController.info);
// Editar informações do usuário
router.put('user/me', UserController.editAction);

// Listar Categorias
router.get('/categories', AdsController.getCategories);

// Adicionar anúncio
router.post('ad/add', AdsController.addAction);
// Listar anúncios
router.get('/ad/list', AdsController.getList);
// Pegar informações de um anúncio específico
router.get('/ad/item', AdsController.getItem);
// Alterar informações do anúncio
router.post('/ad/:id', AdsController.editAction);

module.exports = router;