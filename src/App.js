/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import axios from 'axios';


import './App.scss';
import './Styles/Main.scss'
import Navbar from './Components/Modules/Navbar';
import Footer from './Components/Modules/Footer';


function App() {

  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({})
  const [location, setLocation] = useState({ city: '' });
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');


  const setLoc = (event) => {
    event.preventDefault();
    setLocation({
      ...location,
      [event.target.name]: event.target.value,
    })
  }

  const weather_api_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=metric&appid=b7d61ef3486144aebb1bbb78997254f1`;

  const forecast_api_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b7d61ef3486144aebb1bbb78997254f1`

  async function searchForecast() {
    const resp = await axios.get(forecast_api_URL);
    let currentForecast = resp.data;
    setForecast(currentForecast);
    console.log(currentForecast);
  }


  const searchWeather = () => {
    axios.get(weather_api_URL)
      .then((response) => {
        setData(response.data);
        setLat(response.data.coord.lat);
        setLon(response.data.coord.lon);
      })
    searchForecast();
  }

  // const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];



  return (

    <>

      <Navbar />

      <Container maxWidth="lg" component="div" >

        <Box
          component="form"
          Validate
          autoComplete="off"
          className="input_field"
        >

          <TextField id="standard-basic" label="City" variant="standard" size="small" fullWidth color="primary" helperText="Please enter a city" required={true} type="text" name="city" onChange={setLoc} />

          <Button variant="contained" color="primary" sx={{ margin: ".5rem 0" }} onClick={searchWeather}>Search</Button>

        </Box>

        <Box maxWidth="30%" component="div" sx={{ margin: ".5rem auto" }} >

          <div className="weather_card" style={{ marginTop: "4rem" }}>

            <div className="weather">

              {data.main ? <CardHeader
                title={`${data.main.temp.toFixed()}°C`}
                subheader={data.name} /> : <CardHeader
                title='0°C'
                subheader='city' />}

              <div className="weather_description">

                {data.weather ? <img alt="weather" src={`./Img/${data.weather[0].icon}.png`} /> : null}
                {data.weather ? <Typography variant="p" color="text.secondary" gutterBottom>
                  {data.weather[0].main}
                </Typography> : null}

              </div>

            </div>

            <CardContent>

              <Typography variant="h5" color="text.secondary" gutterBottom>
                Details
              </Typography>
              {data.main ? <Typography variant="body1" color="text.primary">
                Feels like: {data.main.feels_like.toFixed()}°C
              </Typography> : <Typography variant="body1" color="text.primary">
                Feels like: 0°C
              </Typography>}
              {data.wind ? <Typography variant="body1" color="text.primary">
                Wind: {data.wind.speed.toFixed()} Km/h
              </Typography> : <Typography variant="body1" color="text.primary">
                Wind: 0 Km/h
              </Typography>}
              {data.main ? <Typography variant="body1" color="text.primary">
                Humidity: {data.main.humidity.toFixed()}%
              </Typography> : <Typography variant="body1" color="text.primary">
                Humidity: 0%
              </Typography>}
              {data.main ? <Typography variant="body1" color="text.primary">
                Pressure: {data.main.pressure} hPa
              </Typography> : <Typography variant="body1" color="text.primary">
                Pressure: 0 hPa
              </Typography>}

            </CardContent>

          </div>

        </Box>

      </Container>

      <Footer />

    </>

  );

}

export default App;
