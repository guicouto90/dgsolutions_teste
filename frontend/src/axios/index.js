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

// GET REGISTER BY ID
const getRegisterById = async(id) => {
  try {
    console.log(`ID: ${id}`)
    const response = await axios.get(`${url}/register/${id}`);
    
    return response;
  } catch (error) {
    console.error(error.message);
  }
}

// EDIT REGISTER BY ID
const updateRegisterById = async(id, name, birthDate) => {
  try {
    const response = await axios.put(`${url}/register/${id}`, {
      name, birthDate
    });

    return response;
  } catch (error) {
    console.error(error.message);
  }
}

// DELETE REGISTER BY ID
const deleteRegisterById = async(id) => {
  try {
    console.log(`ID: ${id}`)
    const response = await axios.delete(`${url}/register/${id}`);
    return response;
  } catch (error) {
    console.error(error.message);
  }
}



export {
  postRegister,
  getRegisters,
  getRegisterById,
  deleteRegisterById,
  updateRegisterById
}