import React, { Component } from 'react'

class Uv extends Component {

    constructor() {
        super()
        this.state = { 
            uv: null  
         }
    }

    async componentDidMount() {
        const res = await fetch("https://api.openweathermap.org/data/2.5/uvi/forecast?lat=38.2527&lon=-85.7585")
        const json = await res.json()
        console.log(json)
        this.setState({ uv: json })
    }

    render() {
        if (this.state.uv === null) {
            return <span>loading</span> 
        }
        return (
            <div className="div">
               <span>UV Forecast: {this.state.uv[0].value} </span><br></br>
               <span>Don't forget sunscreen UwU </span>
            </div>
        )
    }
}


        

export default Uv