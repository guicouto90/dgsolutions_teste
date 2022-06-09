import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRegisterById, getRegisters } from "../axios";
import Context from '../context';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function ListRegister() {
  const history = useNavigate();
  const { setId } = useContext(Context)
  const [list, setList] = useState([]);

  const getRegistersList = async () => {
    const registers = await getRegisters();
    setList(registers.data);
  }

  const formatBirthDate = (birthDate) => {
    const dateArray = birthDate.split('-');
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2].split('T')[0];

    return `${day}/${month}/${year}`;
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
    <React.Fragment>
      <h1>Lista de cadastro</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Data de nascimento</TableCell>
            <TableCell>Idade</TableCell>
            <TableCell>Deletar</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(({ id, name, birthDate, age }) => (
            <TableRow key={id}>
              <TableCell>{name}</TableCell>
              <TableCell>{formatBirthDate(birthDate)}</TableCell>
              <TableCell>{age}</TableCell>
              <TableCell>
                <Button
                  id={id}
                  variant="contained"
                  color="error"
                  sx={{ mt: 0, mb: 1 }}
                  onClick={ handleOnCLickDelete }
                >
                  Deletar cadastro
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  id={id}
                  variant="contained"
                  color="info"
                  sx={{ mt: 0, mb: 1}}
                  onClick={ handleOnClickEdit }
                >
                  Editar cadastro
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 3, mb: 1}}
        onClick={ () => history('/register') }
      >
        Pagina para novo cadastro
      </Button>
    </React.Fragment>
  )
}

export default ListRegister;