import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRegisterById, getRegisters } from "../axios";
import Context from '../context';

function ListRegister() {
  const history = useNavigate();
  const { setId } = useContext(Context)
  const [list, setList] = useState([]);

  const getRegistersList = async () => {
    const registers = await getRegisters();
    setList(registers.data);
  }

  const handleOnCLickDelete = async ({ target: { id }}) => {
    await deleteRegisterById(id);
    await getRegistersList();
  }

  const handleOnClickEdit = ({ target: { id } }) => {
    setId(id);
    history('/edit-register');
  }

  useEffect(() => {
    getRegistersList();
    console.log(list);
  }, [])

  useEffect(() => {
  }, [list]);

  return(
    <main>
      <h1>Lista de cadastro</h1>
      <section>
          <table>
            <thead>
              <tr>
              <th>Nome </th>
              <th>Data de Nascimento </th>
              <th>Idade </th>
              </tr>
            </thead>
            <tbody>
              { list.map(({ id, name, birthDate, age }) => { 
                return (
                  <tr key={id}>
                    <td>{name}</td>
                    <td>{new Date(birthDate).toLocaleDateString('pt-BR')}</td>
                    <td>{age}</td>
                    <button
                      id={id}
                      onClick={ handleOnCLickDelete }
                    >
                      Deletar cadastro
                    </button>
                    <button
                      id={id}
                      onClick={ handleOnClickEdit }
                    >
                      Editar cadastro
                    </button>
                  </tr>
              )})}
            </tbody>
          </table>
        </section>
    </main>
  )
}

export default ListRegister;