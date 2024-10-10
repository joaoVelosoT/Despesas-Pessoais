const {Router} = require('express');
const UserController = require('../controllers/userController');
const router = Router();


router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/:id',UserController.getOne);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);


module.exports = router;