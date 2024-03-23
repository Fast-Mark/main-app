import React, { useEffect, useRef, useState } from 'react';
import Workspace from './components/workspace/workspace'
import StartWindow from './components/startWindow/startWindow';
import { ResultWindowType, StartWindowType, WorkWindowType } from './const/windowTypes';
import LoginPage from './components/autorization/logInPage';
import SignUpPage from './components/autorization/signUpPgae';
import axios from 'axios';
import { baseURL } from './const/classNameConst';

const App = () => {
  const [currentWindowType, setWindowType] = useState(StartWindowType)
  const [docURL, setDocURL] = useState("")
  const [isLoginPage, setLoginPage] = useState(true)
  const [isAutorized, setAutorized] = useState(false)

  useEffect(() => {
    console.log(localStorage.token)
    axios.post(`${baseURL}/verify-user`, {}, 
    {
      headers: {
        'Authorization': `bearer ${localStorage.token}`,
      },
    })
    .then(function (response){
      setAutorized(true)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setAutorized(false)
    })
  }, [currentWindowType])

  if (!isAutorized) {
    return (
      <>
        {isLoginPage ?        
          <LoginPage setLoginPage={setLoginPage} setNextPage={setAutorized}></LoginPage> :
          <SignUpPage setLoginPage={setLoginPage} setNextPage={setLoginPage}></SignUpPage>}
      </>
    )
  }
  if (currentWindowType === StartWindowType) {
    return (
        <>
        <StartWindow setWindowType={setWindowType} setImageURL={setDocURL}></StartWindow>
        </>
    );
  } else if (currentWindowType === WorkWindowType) {
    return (
      <>
        <Workspace backgroundURL={docURL}></Workspace>
      </>
    );
  } else if (currentWindowType === ResultWindowType) {
    return (
      <div>
        
      </div>
    );
  }
};

export default App;

