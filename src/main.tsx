import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, CssBaseline } from '@mui/material';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {/* Your app components */}
      <App />

    </ThemeProvider>
  </>,
)
