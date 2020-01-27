import React from 'react';
import './App.css';

import Form from './component/form'
import WeatherForm from './component/weatherForm'

import backWeather from './background/weather19.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'

import {geolocated} from 'react-geolocated'

 class App extends React.Component {
 
   state = {
    city : undefined, 
    country: undefined,
    icon : '',
    main: '',
    description: '',
    temp_max: undefined,
    temp_min: undefined,
    celsuis : undefined,
    let: undefined, 
    lon: undefined,
    error: false
   }

   weatherIcon = {
     Thunderstorm : 'wi wi-thunderstorm',
     Drizzle: 'wi wi-sleet',
     Rain: 'wi wi-storm-showers', 
     Snow: 'wi wi-snow',
     Atmosphere: 'wi wi-fog',
     Clear: 'wi wi-day-sunny',
     Clouds: 'wi wi-day-fog'
   }


   // get weather
   getWeather = async (lat, lon ) => {
      let city = this.state.city2
      let country = this.state.country
     // api key
    const API_KEY = '6d0fec3c5fc17973eaea1228813668c1'
      // link 
    const link = city && country ? 
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}` :
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
     try{
    const getData = await fetch(link);
    const response = await getData.json()

    // get range id 
    let range = response.weather[0].id
    // set icon
    this.weatherIconSwitch(range)
    
    // set weather
      this.setState({
       city : response.name,
       main: response.weather[0].main,
       description: response.weather[0].description,
       temp_max: this.cal(response.main.temp_max),
       temp_min: this.cal(response.main.temp_min),
       celsuis : this.cal(response.main.temp)
      }) }catch(e){
        this.setState({
          error: 'data error'
        })
      }   
   }

     // calculate temp
    cal = (temp) =>{
      var cal = Math.floor(temp - 273.15)
      return cal
    }

    // switch weather icon
    weatherIconSwitch = (rangeId) => {  
      // SWITCH ICONS
      switch (true){
        case rangeId >= 200 && rangeId <= 232:
          this.setState({ icon: this.weatherIcon.Thunderstorm})
          break;
        case rangeId >= 300 && rangeId <= 321:
          this.setState({ icon: this.weatherIcon.Drizzle})
          break;
        case rangeId >= 500 && rangeId <= 531:
          this.setState({ icon: this.weatherIcon.Rain})  
          break;
        case rangeId >= 600 && rangeId <= 622:
          this.setState({ icon: this.weatherIcon.Snow})
          break;
        case rangeId >= 701 && rangeId <= 781:
          this.setState({ icon: this.weatherIcon.Atmosphere})
          break;
        case rangeId === 800:
          this.setState({ icon: this.weatherIcon.Clear})
          break;
        case rangeId >= 801 && rangeId <= 804:
          this.setState({icon: this.weatherIcon.Clouds})  
          break;
          default:  
      }
      
    }

    // get city 
    onChangeCity =(e)=>{
      this.setState({
         [e.target.name] : e.target.value
      })
    }

    // get country 
    onChangeCountry = (e)=>{
      this.setState({
        [e.target.name] : e.target.value
      })
    }
    
    // on submit
    onSubmit = (e) =>{
     e.preventDefault()
     
     this.getWeather()
    }
    
  render(){
      
    return !this.props.isGeolocationAvailable ? (
      <div>your browser doesn't support geolocation</div>
       ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not Enabled</div>
       ): this.props.coords ? (
      <div className="App">

        <div>

            <img src={backWeather} alt='img' className = 'img' 
            ></img>
             
            <Form onChangeCity = {this.onChangeCity}
                  onChangeCountry = {this.onChangeCountry}
                  onSubmit = {this.onSubmit} 
                  error = {this.state.error}/>

            <WeatherForm loadweather = {this.getWeather}
                         lat = {this.props.coords.latitude}
                         lon = {this.props.coords.longitude}
                         city= {this.state.city} 
                         icon = {this.state.icon}
                         main = {this.state.main}
                         celsuis = {this.state.celsuis}
                         description = {this.state.description}
                         temp_max = {this.state.temp_max}
                         temp_min = {this.state.temp_min}/>
              
           

        </div>
         
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    )
  }
}

export default geolocated ({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App)

