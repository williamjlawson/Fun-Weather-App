// three components are used for the app, as well as CSS to style them, a browser router, and a style from bootstrap

import React from 'react';
import style from './style.css'
import Currentweather from './Currentweather'
import Extendedweather from './Extendedweather'
import Uv from './Uv'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Col from 'react-bootstrap/Col';

// the links make up the nav bar, and are nested in an unordered list
function App(props) {
  return(
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <Col><Link to="/">Weather</Link></Col>
            <Col><Link to="/Extendedweather">Extended Weather</Link></Col>
            <Col><Link to ="/Uv"> UV Forecast </Link></Col>
          </ul>
        </nav>
        
        {/* links to home, extended weather component, and uv component  */}
        <Route path='/' exact component={Currentweather}/>
        <Route path='/extendedweather/' component={Extendedweather}/>
        <Route path='/uv/' component={Uv}/>
      </div>
    </BrowserRouter>
    )
  }

export default App