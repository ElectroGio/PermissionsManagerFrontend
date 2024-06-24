import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import { CssBaseline } from '@mui/material';
import Navbar from './components/navbar/Navbar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <Navbar />
      <AppRoutes />
    </Router>
  </React.StrictMode>,
);
