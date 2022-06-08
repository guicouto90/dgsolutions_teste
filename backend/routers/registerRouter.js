const express = require('express');
const { insertRegister, listAllRegisters, deleteRegisterById, updateRegisterById, listRegisterById } = require('../controllers/registerController');

const registerRouter = express.Router();

registerRouter.get('/', listAllRegisters);

registerRouter.get('/:id', listRegisterById);

registerRouter.post('/', insertRegister);

registerRouter.put('/:id', updateRegisterById);

registerRouter.delete('/:id', deleteRegisterById);

module.exports = registerRouter;