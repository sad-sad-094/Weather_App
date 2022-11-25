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


import './App.scss';
import './Styles/Main.scss'
import Navbar from './Components/Modules/Navbar';
import Footer from './Components/Modules/Footer';


function App() {

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

            <TextField id="standard-basic" label="City" variant="standard" size="small" fullWidth color="secondary" helperText="Please enter a city" />

            <Button variant="outlined" color="secondary" sx={{ margin:".5rem 0"}}>Search</Button>

          </Box>

          <Box maxWidth="30%" component="div" sx={{ margin:".5rem auto"}} >

            <Card variant="outlined" color="secondary" sx={{ margin: '.4rem' }} raised="true">

              <CardHeader
                title="City"
                subheader="Weather" />

              <CardContent>

                <Typography variant="h5" color="text.primary" gutterBottom>
                  Details
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Feels like:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Wind:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Humidity:
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Pressure:
                </Typography>

              </CardContent>

            </Card>

          </Box>

          <Box
            component="div"
            maxWidth="80%"
            sx={{
              margin:'1rem auto'
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
