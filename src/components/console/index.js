
import './styles.css';
import {React,useState, useRef} from 'react';
// import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import gas_mask from '../../images/gas-mask.svg';
import humidity from '../../images/humidity.svg';
import pressure from '../../images/barometer.svg';
import App from '../main';



const Console = (props) => {
  
  const {pr, hu ,aqi } = props
 
  const [val,getVal] = useState("");
  
  const textRef = useRef();
  const showRefContent = () => {
    // console.log(textRef.current.value);
    props.getVal(textRef.current.value)
  };

return (
  <div className = "right" style = {{padding:"2rem"}}>
    <div className= "console">
      <div className = "search_bar">
       
         <TextField
            label="Enter State and Country to search"
            id="search"
            style = {{width: 350, textAlign: "center"}}
            // onChange = {((event)=>props.getVal(event.target.value))}
            inputRef={textRef}
            
          />
           <Button onClick = {showRefContent} style = {{margin:"1rem"}}>Search</Button>
         
          {/* {console.log(val)} */}
        
      </div>
      <div className = "cards">
          <div className = "card">
            <img src = {gas_mask} alt = "" style = {{width:30 , height:"auto", padding:"1rem"}}></img>
            <div className = "card-info">
              <h2>Air Quality Index (PM 10)</h2>
              <p><h6>Particulate Matter are inhalable pollutant particles with a diameter less than 10 micrometeres. 
                Resulting in health issues. Exposure can result in eye and throat irritation, coughing or difficulty 
                breathing and aggravated asthama.
              </h6></p>
              <div className = "progress"></div>
            </div>
            <div className = "percentage">{aqi}</div>
          </div>

          <div className = "card">
            <img src = {humidity} alt = "" style = {{width:30 , height:"auto", padding:"1rem"}}></img>
            <div className = "card-info">
              <h2>Humidity</h2>
              <p><h6>Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous state of water, 
                is generally invisible to the human eye.
                Humidity indicates the likelihood for precipitation, dew, or fog to be present.
              </h6></p>
              <div className = "progress"></div>
            </div>
            <div className = "percentage">{hu+"%"}</div>
          </div>

          <div className = "card">
            <img src = {pressure} alt = "" style = {{width:30 , height:"auto", padding:"1rem"}}></img>
            <div className = "card-info">
              <h2>Pressure</h2>
              <p><h6>Atmospheric pressure is the weight of the atmosphere pressing down on the earth. For high pressure, often
                 you can expect cooler tempratures and clear skies but in low pressure lookout for warmer weather,
                 storms and rain.
              </h6></p>
              <div className = "progress"></div>
            </div>
            <div className = "percentage">{pr+" hPa"}</div>
          </div>
      </div>
      
    </div>
  </div>
  );}
  export default Console;



