const exp = require('express');
const {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    login
} = require('../controlers/users.controler');
const router = exp.Router();

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser)
router.post('/login', login)

module.exports = router;