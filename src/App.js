import React from 'react';
import style from './style.css'
import Currentweather from './Currentweather'
import Extendedweather from './Extendedweather'
import Uv from './Uv'
// import Photo from './Photo'
// import Calendar from './Calendar'
import { Link, Route, BrowserRouter } from 'react-router-dom'

function App(props) {
  return(
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Weather</Link></li>
            <li><Link to="/Extendedweather">Extended Weather</Link></li>
            <li><Link to ="/Uv"> UV Forecast </Link></li>
            {/* <Photo /> */}
          </ul>
        </nav>
        
        <Route path='/' exact component={Currentweather}/>
        <Route path='/extendedweather/' component={Extendedweather}/>
        <Route path='/uv/' component={Uv}/>
      </div>
    </BrowserRouter>
    )
  }

export default App