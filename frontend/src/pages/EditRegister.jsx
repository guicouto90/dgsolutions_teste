import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRegisterById, updateRegisterById } from "../axios";
import Context from '../context';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function EditRegister() {
  const theme = createTheme();
  const history = useNavigate();
  const { id } = useContext(Context);
  const [disable, setDisable] = useState(true);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const getRegister = async() => {
    const register = await getRegisterById(id);
    setName(register.data.name);
  }

  const enableButton = () => {
    if(name.length >= 3 && date.length >= 10) {
      setDisable(false);
    } else {
      setDisable(true); 
    }
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

 useEffect(() => {
    enableButton();
  }, [name, date]);

  return(
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3">
          Editar Cadastro
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              Nome Completo:
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Nome Completo"
                autoFocus
                value={name}
                onChange={ handleOnChangeName }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              Data de nascimento:
              <TextField
                required
                fullWidth
                id="date"
                name="date"
                autoComplete="family-name"
                type="date"
                onChange={ handleOnChangeDate }
              />
            </Grid>
          </Grid>
          <span>* Preencha os dois campos para habilitar o botão</span>
          <Button
            fullWidth
            disabled={disable}
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
            onClick={ handleOnClick }
          >
            Editar cadastro
          </Button>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
)}

export default EditRegister;