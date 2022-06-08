import axios from "axios";

const url = 'http://localhost:3001';

// NEW REGISTER
const postRegister = async(name, birthDate) => {
  try {
    const response = await axios.post(`${url}/register`, {
      name, birthDate
    });
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

// GET ALL REGISTERS
const getRegisters = async() => {
  try {
    const response = await axios.get(`${url}/register`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

// DELETE REGISTER BY ID
const deleteRegisterById = async(id) => {
  try {
    const response = await axios.delete(`${url}/register/${id}`);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

export {
  postRegister,
  getRegisters,
  deleteRegisterById
}