import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../axios";

function Register() {
  const history = useNavigate();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleOnChangeName = ({target: { value }}) => {
    setName(value);
    
  }

  const handleOnChangeDate = ({target: { value }}) => {
    setDate(value);
  }

  const handleOnClick = async() => {
    const register = await postRegister(name, date);
    setName('');
    setDate('');
    console.log(register);
  }

  const redirectListPage = () => {
    history('/list-register');
  }

  return(
    <div>
      <h1>REGISTER</h1>
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
          Cadastrar pessoa
        </button>
        <button
          type="button"
          onClick={ redirectListPage }
        >
          Lista de pessoas cadastradas
        </button>
      </section>
    </div>
    
  )
}

export default Register;