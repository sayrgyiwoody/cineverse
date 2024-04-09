import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
import ScrollToTop from './helpers/scrollToTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop></ScrollToTop>
        <App />

      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
)
