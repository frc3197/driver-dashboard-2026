import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { NT4Provider } from '@frc-web-components/react'
import type { IPAddress } from './types.ts';
import { IP_ADDRESS_ID } from './localstorage.ts';

const defaultAddress:IPAddress = '127.0.0.1';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NT4Provider address={localStorage.getItem(IP_ADDRESS_ID) as IPAddress ?? defaultAddress}>
      <App />
    </NT4Provider>
  </StrictMode>
)
