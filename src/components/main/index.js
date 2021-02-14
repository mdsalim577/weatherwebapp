import React from "react";
import './styles.css';
import MainGlass from '../glass';

const url = 'http://api.airvisual.com/v2/nearest_city?key=26e0faac-c1ab-47f0-9206-11cb7b421b2c'
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        temp: [],
        direction: 'Loading...',
        location: ['',''],
        wind_speed: '',
        ic: "",
        hu:"",
        aqi:"",
        pr:"",
        cities:[]
    };
    
  }
 
  async componentDidMount(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const response = await fetch(url, requestOptions);
    const jsonData = await response.json();
    // console.log(jsonData)
    // const dir = jsonData.data.current.weather.wd;
      this.setState({
        temp: jsonData.data.current.weather.tp,
        location: [jsonData.data.city,jsonData.data.state],
        wind_speed: jsonData.data.current.weather.ws,
        ic: jsonData.data.current.weather.ic,
        hu: jsonData.data.current.weather.hu,
        pr: jsonData.data.current.weather.pr,
        aqi: jsonData.data.current.pollution.aqius
      });
      this.dirCalculate(jsonData)
      this.getVal = this.getVal.bind(this);
      // .catch(error => console.log('error', error))
  }
  dirCalculate(jsonData){
    const dir = jsonData.data.current.weather.wd;
    if(dir === 90){
      this.setState({
        direction: 'East'
      })
    }
    else if(dir === 270){
      this.setState({
        direction: 'West'
      })
    }
    else if(dir === 180){
      this.setState({
        direction: 'South'
      })
    }
    else if(dir === 0){
      this.setState({
        direction: 'North'
      })
    }
    else if(dir >0 && dir < 90){
      this.setState({
        direction: 'North - East'
      })
    }
    else if(dir >90 && dir < 180){
      this.setState({
        direction: 'South - East'
      })
    }
    
    else if(dir >180 && dir < 270){
      this.setState({
        direction: 'South - West'
      })
    }
    
    else if(dir >270 && dir < 360){
      this.setState({
        direction: 'North - West'
      })
    }

  }
  
  async getVal(value){
      console.log(value);  
  }
  //     let abc = value.split(",");
  //     let url = "http://api.airvisual.com/v2/cities?state="+abc[0]+"&country="+abc[1]+"&key=26e0faac-c1ab-47f0-9206-11cb7b421b2c";
      // var n = abc.length;
      // for(let i = 0; i<n; i++)
      // {
        // console.log(abc[i]);
      // }
    //   var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };
      
    //   const res = await fetch(url,requestOptions);
    //   const jsonData = await res.json();
    //   var n = jsonData.data.length;
    //   for(let i = 0;i<n; i++)
    //   {
    //     this.setState({
    //       cities : [jsonData.data[i]]
    //     });
    //   }
    //   console.log(this.state.cities);
    // }
  
  render(){
    
    return (
      <>
       
      <div className = "main">
      
        <MainGlass  getVal={this.getVal} temprature = {this.state.temp} direction = {this.state.direction} 
       ws = {this.state.wind_speed} ic = {this.state.ic} location = {this.state.location} 
       pressure = {this.state.pr} humidity = {this.state.hu} aqi = {this.state.aqi}/>
      </div>
      
      <div className = "heading"> 
          <h1 style={{textAlign: "center"}}>Weather</h1>
      </div>
      <div className = "circle1"></div>
      <div className = "circle2"></div>
      </>
    );
  }

}
