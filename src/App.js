/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
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
  const [location, setLocation] = useState({city:''});

  
  const setLoc = (event) => {
    event.preventDefault();
    setLocation({
      ...location,
      [event.target.name]: event.target.value,
    })
  }
  
  const weather_app_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=metric&appid=b7d61ef3486144aebb1bbb78997254f1`;

  const searchLocation = () => {
    axios.get(weather_app_URL)
      .then((response) => {
        setData(response.data)
      })
    // const options = {
    //   method: 'GET',
    //   url: 'https://api.openweathermap.org/data/2.5/weather',
    //   params: { q: 'London', appid: 'b7d61ef3486144aebb1bbb78997254f1' }
    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
  }

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];



  return (

    <>

      <Navbar />

      <Container maxWidth="lg" component="div">

        <Box
          component="form"
          sx={{ margin: '.5rem auto', width: '60%' }}
          noValidate
          autoComplete="off"
        >

          <TextField id="standard-basic" label="City" variant="standard" size="small" fullWidth color="secondary" helperText="Please enter a city" required={true} type="text" name="city" onChange={setLoc} />

          <Button variant="outlined" color="secondary" sx={{ margin: ".5rem 0" }} onClick={searchLocation}>Search</Button>

        </Box>

        <Box maxWidth="30%" component="div" sx={{ margin: ".5rem auto" }} >

          <Card variant="outlined" color="secondary" sx={{ margin: '.4rem' }} raised="true">

            {data.main ? <CardHeader
              title={`${data.main.temp.toFixed()}°C`}
              subheader={data.name} /> : <CardHeader
              title='Temp'
              subheader='city' />}

            {data.weather ? <Typography variant="h5" color="text.primary" gutterBottom>
                {data.weather[0].main} 
              </Typography> : <Typography variant="h5" color="text.primary" gutterBottom>
                 
              </Typography>}

            <CardContent>

              <Typography variant="h5" color="text.primary" gutterBottom>
                Details 
              </Typography>
              {data.main ? <Typography variant="body1" color="text.secondary">
                Feels like: {data.main.feels_like.toFixed()}°C
              </Typography> : <Typography variant="body1" color="text.secondary">
                Feels like: 0°C
              </Typography>}
              {data.wind ? <Typography variant="body1" color="text.secondary">
                Wind: {data.wind.speed.toFixed()}Km/h
              </Typography> : <Typography variant="body1" color="text.secondary">
                Wind: 0Km/h
              </Typography>}
              {data.main ? <Typography variant="body1" color="text.secondary">
                Humidity: {data.main.humidity.toFixed()}%
              </Typography> : <Typography variant="body1" color="text.secondary">
                Humidity: %
              </Typography>}
              {data.main ? <Typography variant="body1" color="text.secondary">
                Pressure: {data.main.pressure}
              </Typography> : <Typography variant="body1" color="text.secondary">
                Pressure: 0
              </Typography>}

            </CardContent>

          </Card>

        </Box>

        <Box
          component="div"
          maxWidth="80%"
          sx={{
            margin: '1rem auto'
          }}>

          <Accordion expanded={expanded === 'panel1'} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Monday
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Feels like:
                Wind:
                Humidity:
                Pressure:
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Tuesday
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Feels like:
                Wind:
                Humidity:
                Pressure:
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Wednesday
              </Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Feels like:
                Wind:
                Humidity:
                Pressure:
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Thursday
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Feels like:
                Wind:
                Humidity:
                Pressure:
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel5'} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Friday
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Feels like:
                Wind:
                Humidity:
                Pressure:
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel6'} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6bh-content"
              id="panel6bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Saturday
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Feels like:
                Wind:
                Humidity:
                Pressure:
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel7'} TransitionProps={{ unmountOnExit: true }} onChange={handleChange('panel7')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel7bh-content"
              id="panel7bh-header"
            >
              <Typography sx={{ width: '50%', flexShrink: 0 }}>
                Sunday
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Feels like:
                Wind:
                Humidity:
                Pressure:
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Box>

      </Container>

      <Footer />

    </>

  );

}

export default App;
