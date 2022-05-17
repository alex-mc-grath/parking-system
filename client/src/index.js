
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './containers/App'
import Theme from './components/theme/Theme'
import {BrowserRouter as Router} from 'react-router-dom'

import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Theme layout={<App/>}/>
    </Router>
  </React.StrictMode>
)