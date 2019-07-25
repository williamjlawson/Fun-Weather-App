import React, { Component } from 'react'
import moment from "moment"

class Extendedweather extends Component {

    constructor() {
        super()
        this.state =  {}}

    async componentDidMount() {
        const res = await fetch("https://api.openweathermap.org/data/2.5/forecast?zip=40206&units=imperial&appid=5a143c33d3f1c41a6b7d7d1da8ce6de2")
        const json = await res.json()
        console.log(json)
        this.setState({ forecast: json })
    }

    // numbers 0-40, each one is every four hours. 
    // 0 is first day at 21 hours, when viewed at 5pm 
    // 8 is second day at 21 hours 
    // 16 is third day at 21 hours
    // 24 is fourth day at 21 hours
    // 32 is fifth day at 21 hours 

    // this.state.weather.name}

    render() { 
        if(!this.state.forecast) return <div> loading </div> 
        console.log(this.state)
        return(
            <div>
             {/* .dt is how I got the date. Moment and format are for formatting the date. It's multiplied by  */}
             {/* [2],[10],[18],[26],[34] are at 6am. [6],[14],[22],[30].[38] are at 6pm.  */}
                <h1 className="header">Extended Weather: Louisville</h1>
                <div className="my-div">
                    <span className="day"> {moment(this.state.forecast.list[2].dt * 1000).format("ddd, MMM Do") } </span>  
                    <span className="temp"> {this.state.forecast.list[2].main.temp_min} </span>
                    <span className="temp"> - {this.state.forecast.list[6].main.temp_min} °F </span>
                </div>
                <div className="my-div">
                    <span className="day"> {moment(this.state.forecast.list[10].dt * 1000).format("ddd, MMM Do")} </span>
                    <span className="temp"> {this.state.forecast.list[10].main.temp_min} </span>
                    <span className="temp"> - {this.state.forecast.list[14].main.temp_min} °F</span>
                </div>
                <div className="my-div">
                    <span className="day"> {moment(this.state.forecast.list[18].dt * 1000).format("ddd, MMM Do")} </span>
                    <span className="temp"> {this.state.forecast.list[18].main.temp_min} </span>
                    <span className="temp"> - {this.state.forecast.list[22].main.temp_min} °F</span>
                </div>
                <div className="my-div">
                    <span className="day"> {moment(this.state.forecast.list[26].dt * 1000).format("ddd, MMM Do")} </span>
                    <span className="temp"> {this.state.forecast.list[26].main.temp_min} </span>
                    <span className="temp"> - {this.state.forecast.list[30].main.temp_min} °F</span>
                </div>
                <div className="my-div">
                    <span className="day"> {moment(this.state.forecast.list[34].dt * 1000).format("ddd, MMM Do")} </span>
                    <span className="temp"> {this.state.forecast.list[34].main.temp_min} </span>
                    <span className="temp"> - {this.state.forecast.list[38].main.temp_min} °F</span>
                </div>
            </div>
        )
    }
}

export default Extendedweather