import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Alert } from '@mui/material';
import axios from 'axios';
import { baseURL } from '../../const/classNameConst';

const LoginPage = ({setLoginPage, setNextPage}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [notSucces, setNotSucces] = useState(null)

    function handleLogin() {
      const response = axios.post(`${baseURL}/token`, {
        username: name,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(function (response) {
        // handle success
        // console.log(data)
        localStorage.token = response.data.access_token;
        setNextPage(true)
      })
      .catch(function (error) {
        // handle error
        console.log(error);

        setNotSucces(<Alert severity="error">Неправильный логин или пароль</Alert>)
      })
      console.log(response)
    }


    // ЗАЧЕМ? Для создания личного кабинета... Чтобы при нажатии "получить результат" сервер действительно далал картинки и сохранял их в папку пользователя.

// На будущее: при всех следующих запросах нужно отправлять токен
    // headers: {
    //   ...options.headers,
    //   Authorization: `Bearer ${localStorage.token}`,
    // };

 return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Вход
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
          id="password"
          label="Пароль"
          type="password"
          variant="outlined"
          margin="normal"
          onChange={(event) => {setPassword(event.target.value)}}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
          Войти
        </Button>
      </form>

      {notSucces}

      <Button variant="outlined" onClick={() => { setLoginPage(false)}} color="primary" fullWidth>
          Зарегистрироваться
      </Button>
    </Container>
 );
};

export default LoginPage;