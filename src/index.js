import React from 'react';
import { render } from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import { persistStore } from 'redux-persist'

import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react'
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
let persistor = persistStore(store)

const root = document.getElementById("root");
const queryClient = new QueryClient({
  refetchOnWindowFocus: false
})


render(<QueryClientProvider client={queryClient}>

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CssBaseline />
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
    </PersistGate>
  </Provider>
</QueryClientProvider>,

  document.getElementById('root')
)


