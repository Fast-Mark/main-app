import { useState } from "react"
import axios from 'axios'
import baseURL from '../../const/endpoints'


const loginPage = "login"
const createUserPage = "createUser"

export default function authorizationWindow({switchNextPage}) {
    const [currentPage, setCurrentPage] = useState(loginPage)

        // TODO: надо бы вывести в отдельные компоненты вход и создание ака

    return (
        <>


            {currentPage === loginPage? 
            <>
                <loginPage setCurrentPage={setCurrentPage} switchNextPage={switchNextPage}></loginPage>
            </>
            :  
            <>
                <SignUpPage></SignUpPage>
                    
            </>
            }
        </>
    )
}

function loginPage({setCurrentPage, switchNextPage}) {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

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
            localStorage.token = response.data.access_token;
            console.log(response.headers.get('Authorization'))
            switchNextPage(true)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            switchNextPage(false)
          })
          console.log(response)
    }

    return(
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Вход
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          id="name"
          label="Имя"
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
      </form>

        <Button variant="contained" onClick={() => {setCurrentPage(loginPage)}} color="primary" fullWidth>
            Войти в аккаунт
        </Button>   
        <Button variant="outlined" onClick={() => {setCurrentPage(createUserPage)}} color="primary" fullWidth>
            Зарегистрироваться
        </Button>   
    </Container>
    
    )
}

function SignUpPage() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [secondPassword, setSecondPassword] = useState('')
  const [name, setName] = useState('')

  function handleSignUp() {

    axios.get(`${baseURL}/create-user?username=${name}&email=${email}&password=${password}`)
    .then(function (response) {
      setNextPage(false)
    })
    .catch(function (error) {
      setNextPage(false)
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
          label="Имя"
          variant="outlined"
          margin="normal"
          onChange={(event) => {setName(event.target.value)}}
        />
        <TextField
          fullWidth
          id="email"
          label="Почта"
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
 )
}