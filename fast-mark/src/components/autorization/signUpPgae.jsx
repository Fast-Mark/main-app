import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { baseURL } from '../../const/classNameConst';


const SignUpPage = ({setLoginPage, setNextPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [secondPassword, setSecondPassword] = useState('')
  const [name, setName] = useState('')

  function handleSignUp() {

    axios.get(`${baseURL}/create-user?username=${name}&email=${email}&password=${password}`)
    .then(function (response) {
      // handle success
      setNextPage(true)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }


 return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Регистрация
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
          onChange={(event) => {setName(event.target.value)}}
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          onChange={(event) => {setEmail(event.target.value)}}
        />
        <TextField
          fullWidth
          id="password"
          label="Пароль"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={(event) => {setPassword(event.target.value)}}
        />
        {/* <TextField
          fullWidth
          id="confirmPassword"
          label="Подтвердите пароль"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={(event) => {setSecondPassword(event.target.value)}}
        /> */}
        <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
          Зарегистрироваться
        </Button>
      </form>


      <Button variant="outlined" onClick={() => {setLoginPage(true)}} color="primary" fullWidth>
          Войти в аккаунт
      </Button>
    </Container>
 );
};

export default SignUpPage;