import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ActionProvider } from './contexts/ActionContext';
import { LoadingProvider } from './contexts/LoadingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ActionProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </ActionProvider>
  </BrowserRouter>
);
