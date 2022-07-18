import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import cardsData from './mock/cardsData.json';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App cardList={cardsData}/>
  </React.StrictMode>,
);
