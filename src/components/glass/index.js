import './styles.css';
import Console from '../console'
import React from 'react' 
// import sun from '../../sun.svg'
import clear_day from '../../images/clear_day.png'
import clear_night from '../../images/clear_night.png'
import broken_clouds from '../../images/broken_clouds.png'
import few_clouds_day from '../../images/few_clouds_day.png'
import few_clouds_night from '../../images/few_clouds_night.png'
import mist from '../../images/mist.png'
import rain_day from '../../images/rain_day.png'
import rain_night from '../../images/rain_night.png'
import scattered_clouds from '../../images/scattered_clouds.png'
import shower_rain from '../../images/shower_rain.png'
import thunderstorm from '../../images/thunderstorm.png'
import snow from '../../images/snow.png'


export default class MainGlass extends React.Component {
  
  constructor(props){
    super(props);
  }
  calcIcon(code){
    if(code.icon_name === "01d"){
      return <img src = {clear_day} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "01n"){
      return <img src = {clear_night} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "02d"){
      return <img src = {few_clouds_day} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "02n"){
      return <img src = {few_clouds_night} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "03d"){
      return <img src = {scattered_clouds} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "04d"){
      return <img src = {broken_clouds} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "09d"){
      return <img src = {shower_rain} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "10d"){
      return <img src = {rain_day} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "10n"){
      return <img src = {rain_night} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "11d"){
      return <img src = {thunderstorm} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "13d"){
      return <img src = {snow} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "50d"){
      return <img src = {mist} alt = "loading..." width="100%" height="auto"></img>
    }
    else if(code.icon_name === "50n"){
      return <img src = {mist} alt = "loading..." width="100%" height="auto"></img>
    }
    else{
      return <img src = {few_clouds_day} alt = "loading..." width="100%" height="auto"></img>
    }
  }
   render(){
    const [city,state] = this.props.location;
    const icon_name = this.props.ic;
    return (
      <div className="glass">
        <div className = "dashboard">
          <div className = "temprature">
              <h1>{this.props.temprature+"°C"}</h1>
          </div>
          <div className = "location">
            <h2>{city+", "+ state}</h2>
          </div>
          <div className = "icon">
           {this.calcIcon({icon_name})}
          </div>
          <div className = "wind">
            <div className = "compass"><h2>{this.props.direction}</h2></div>
            <div className = "windspeed"><h3>{this.props.ws+' m/s'}</h3></div>
          </div>
          </div>
          
        <Console getVal={this.props.getVal} pr = {this.props.pressure} hu = {this.props.humidity} aqi = {this.props.aqi}/>
      </div>
    );
  }
}