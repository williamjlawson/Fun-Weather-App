import React, { Component } from 'react'
import moment from "moment"


class Currentweather extends Component {

    // the default state of weather is null, until the API call is completed
    constructor() {
        super()
        this.state = { 
            weather: null  
         }
    }

     // the API call for the component
    async componentDidMount() {
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Louisville&units=imperial")
        const json = await res.json()
        this.setState({ weather: json })
    }

    // if the state is equal to null (hasn't loaded yet) the if statement returns the word loading
    render() {
        if (this.state.weather === null) {
            return <span>loading</span> 
        }
        return (
            <div>
            {/* the data called from the array fetched from the API is here */}
                <h1 className="header">Weather App</h1>
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
