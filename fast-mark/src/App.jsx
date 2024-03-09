
import React, { useState } from 'react';
import Workspace from './components/workspace/workspace'
import StartWindow from './components/startWindow/startWindow';
import { ResultWindowType, StartWindowType, WorkWindowType } from './const/windowTypes';

const App = () => {
  const [currentWindowType, setWindowType] = useState(StartWindowType)
  const [docURL, setDocURL] = useState("")

  if (currentWindowType === StartWindowType) {
    return (
        <StartWindow setWindowType={setWindowType} setImageURL={setDocURL}></StartWindow>
    );
  } else if (currentWindowType === WorkWindowType) {
    return (
      <div>
        
        <Workspace backgroundURL={docURL}></Workspace>
      </div>
    );
  } else if (currentWindowType === ResultWindowType) {
    return (
      <div>
        
      </div>
    );
  }
};

export default App;

