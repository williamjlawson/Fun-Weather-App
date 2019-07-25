import React, { Component } from 'react'
import moment from "moment"


class Currentweather extends Component {

    constructor() {
        super()
        this.state = { 
            weather: null  
         }
    }

    async componentDidMount() {
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Louisville&units=imperial&appid=5a143c33d3f1c41a6b7d7d1da8ce6de2")
        const json = await res.json()
        this.setState({ weather: json })
    }

    render() {
        if (this.state.weather === null) {
            return <span>loading</span> 
        }
        return (
            <div>
                <h1 className="header">Day of Week</h1>
                    <div className="div"> Date: {moment(this.state.weather.dt * 1000).format("ddd, MMM Do")} </div>
                    <div className="div"> City:  {this.state.weather.name}  </div>
                    <div className="div"> Temperature: {this.state.weather.main.temp}</div>
                    <div className="div"> High: {this.state.weather.main.temp_max}</div>
                    <div className="div"> Low: {this.state.weather.main.temp_min} </div>
                    <div className="div"> Humidity: {this.state.weather.main.humidity}</div>
            </div>
        )
    }
}

export default Currentweather
