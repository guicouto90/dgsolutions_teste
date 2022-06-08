import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRegisterById, updateRegisterById } from "../axios";
import Context from '../context';

function EditRegister() {
  const history = useNavigate();
  const { id } = useContext(Context);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const getRegister = async() => {
    const register = await getRegisterById(id);
    setName(register.data.name);
    setDate(register.data.date);
  }

  const handleOnChangeName = ({target: { value }}) => {
    setName(value);
  }

  const handleOnChangeDate = ({target: { value }}) => {
    setDate(value);
  }

  const handleOnClick = async() => {
    await updateRegisterById(id, name, date);
    history('/list-register')
  }

  useEffect(() => {
    getRegister();
  }, [])

  return(
    <main>
      <h1>EDIT REGISTER</h1>
      <section>
        <label htmlFor="name">
          Digite o nome:
          <input 
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={ handleOnChangeName }
          />
        </label>
        <label htmlFor="date">
          Preencha com a data de nascimento
          <input 
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={ handleOnChangeDate }
          />
        </label>
      </section>
      <section>
        <button
          type="submit"
          onClick={ handleOnClick }
        >
          Editar cadastro
        </button>
      </section>
    </main>
  )
}

export default EditRegister;