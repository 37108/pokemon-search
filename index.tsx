import { CssBaseline } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import PokemonPage from './src/pages/Pokemon';
import store from './src/store';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error();
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <PokemonPage />
    </Provider>
  </StrictMode>
);
