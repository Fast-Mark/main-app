import React, { useState } from 'react';
import Workspace from './components/workspace/workspace'
import StartWindow from './components/startWindow/startWindow';
import { ResultWindowType, StartWindowType, WorkWindowType } from './const/windowTypes';
import { ThemeProvider, createTheme } from '@mui/material';

const App = () => {
  const [currentWindowType, setWindowType] = useState(StartWindowType)
  const [docURL, setDocURL] = useState("")

  const theme = createTheme({
    typography: {
      fontFamily: 
        "Onest",
    },
  })

  if (currentWindowType === StartWindowType) {
    return (
        
        <ThemeProvider theme={theme}>
          <StartWindow setWindowType={setWindowType} setImageURL={setDocURL}></StartWindow>
        </ThemeProvider>
        
    );
  } else if (currentWindowType === WorkWindowType) {
    return (
      <ThemeProvider theme={theme}>
        <Workspace backgroundURL={docURL}></Workspace>
      </ThemeProvider>
    );
  } else if (currentWindowType === ResultWindowType) {
    return (
      <div>
        
      </div>
    );
  }
};

export default App;

