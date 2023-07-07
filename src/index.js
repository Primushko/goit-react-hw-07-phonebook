import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react' - видаляємо
import { store } from './redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Компонент <Provider> робить Redux store доступним для будь-яких вкладених компонентів,
 яким потрібен доступ до сховища Redux. */}
    <Provider store={store}>
      {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> - видаляємо*/}
      <App />
      {/* </PersistGate> - видаляємо*/}
    </Provider>
  </React.StrictMode>
);
