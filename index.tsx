import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './modules';
import PokemonPage from './pages/Pokemon';
import { CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <PokemonPage />
    </Provider>
  </StrictMode>
);
