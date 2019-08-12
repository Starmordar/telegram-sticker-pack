import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App/App';

import 'bootstrap/dist/css/bootstrap.css';


render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));