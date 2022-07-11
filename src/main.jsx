import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { CountryApp } from './CountryApp'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <React.StrictMode>
      <CountryApp />
    </React.StrictMode>
  </BrowserRouter>
  
)
