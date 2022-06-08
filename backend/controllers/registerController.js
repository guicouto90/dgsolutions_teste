const { newRegister, getAllRegisters, removeRegisterById, editRegisterById, verifyRegisterById } = require("../services/registerService");
const { CREATED, OK } = require("../utils/statusCode");

const insertRegister = async (req, res, next) => {
  try {
    const register = await newRegister(req.body);

    return res.status(CREATED).json(register);
  } catch (error) {
    next(error);
  }
}

const listAllRegisters = async(req, res, next) => {
  try {
    const registers = await getAllRegisters();

    return res.status(OK).json(registers);
  } catch (error) {
    next(error);
  }
}

const listRegisterById = async(req, res, next) => {
  try {
    const register = await verifyRegisterById(req.params.id);

    return res.status(OK).json(register);
  } catch (error) {
    next(error);
  }
}

const updateRegisterById = async(req, res, next) => {
  try {
    const result = await editRegisterById(req.params.id, req.body);

    return res.status(OK).json(result);
  } catch (error) {
    next(error);
  }
}

const deleteRegisterById = async(req, res, next) => {
  try {
    const result = await removeRegisterById(req.params.id);

    return res.status(OK).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  insertRegister,
  listAllRegisters,
  listRegisterById,
  deleteRegisterById,
  updateRegisterById
}