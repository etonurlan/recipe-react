import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App.tsx'
import './index.css'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/recipe-react'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)