import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6388bc',
    },
    secondary: {
      main: '#BC6B63',
      light: '#f9f3f2',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '##f9f3f2',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
)
