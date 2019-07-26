import React, { Component } from 'react'

class Uv extends Component {

    // the default state of uv is null, until the API call is completed
    constructor() {
        super()
        this.state = { 
            uv: null  
         }
    }

    // the API call for the component
    async componentDidMount() {
        const res = await fetch("https://api.openweathermap.org/data/2.5/uvi/forecast?lat=38.2527&lon=-85.7585")
        const json = await res.json()
        console.log(json)
        this.setState({ uv: json })
    }

    // if the state is equal to null (hasn't loaded yet) the if statement returns the word loading
    render() {
        if (this.state.uv === null) {
            return <span>loading</span> 
        }

        // the data called from the array fetched from the API is here
        // the break statements were added for spacing, a future build would fix this
        return (
            <div className="div"><br></br>
               <span>UV Forecast: {this.state.uv[0].value} </span><br></br>
               <span>Don't forget sunscreen! </span>
            </div>
        )
    }
}


        

export default Uv