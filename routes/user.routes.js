// const express = require('express');
// const { register, login, getProfile, getAllusers } = require('../controllers/user.controller');
// const authMiddleware = require('../middleware/authMiddleware');

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get('/profile', authMiddleware, getProfile);
// router.get('/all',authMiddleware ,getAllusers);

// module.exports = router;

const express = require('express');
const {
    register,
    login,
    getProfile,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.get('/all', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;
