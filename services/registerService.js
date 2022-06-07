const joi = require('@hapi/joi');
const { Registers } = require('../models');
const errorConstructor = require('../utils/errorConstructor');
const { registerNotFound } = require('../utils/errorMessages');
const { NOT_FOUND } = require('../utils/statusCode');

const registerSchema = joi.object({
  name: joi.string().min(3).required(),
  birthDate: joi.date().iso().required()
})

const validateRegisterSchema = (name, birthDate) => {
  const { error } = registerSchema.validate({ name, birthDate });
  if(error) throw error;
}

//REF: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
const calculateAge = (birthDate) => {
  const currentDate = new Date();
  const birthDay = new Date(birthDate);
  const ageDifMs = currentDate.getTime() - birthDay.getTime();
  const ageDate = new Date(ageDifMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return age;
}

const verifyRegisterById = async(id) => {
  const register = await Registers.findByPk(id);
  if(!register) {
    throw errorConstructor(NOT_FOUND, registerNotFound);
  }
  return register;
}

const newRegister = async (body) => {
  const { name, birthDate } = body;
  
  validateRegisterSchema(name, birthDate);
  const age = calculateAge(birthDate);
  const register = await Registers.create({ name, birthDate, age });
  return register;
}

const getAllRegisters = async() => {
  const registers = await Registers.findAll();

  return registers;
}

const editRegisterById = async(id, body) => {
  const { name, birthDate } = body;
  await verifyRegisterById(id);
  validateRegisterSchema(name, birthDate);
  const age = calculateAge(birthDate);
  await Registers.update(
    { name, birthDate, age }, { where: { id } }
  )
  
  return { message: `Register with id ${id} updated` };
}

const removeRegisterById = async (id) => {
  await verifyRegisterById(id);
  await Registers.destroy({ where: { id } });
  return { message: `Register with id ${id} removed` };
}

module.exports = {
  newRegister,
  getAllRegisters,
  editRegisterById,
  verifyRegisterById,
  removeRegisterById
}