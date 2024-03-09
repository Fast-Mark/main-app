import React, { useState } from 'react';
import Workspace from './components/workspace/workspace'
import StartWindow from './components/startWindow/startWindow';
import { ResultWindowType, StartWindowType, WorkWindowType } from './const/windowTypes';
import Header from './components/header/Header';

const App = () => {
  const [currentWindowType, setWindowType] = useState(StartWindowType)
  const [docURL, setDocURL] = useState("")

  if (currentWindowType === StartWindowType) {
    return (
        <>
        <Header />
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

