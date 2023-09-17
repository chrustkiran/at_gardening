import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './home.css';
//import call from 'react-native-phone-call';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function makePhone() {
  // call(756761432).catch(console.error)
}   
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        AT-Gardening
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4];
const imageList = ["https://assets-global.website-files.com/62a6520d16a4c82ce7aba2af/6321219141e05125fce32f8c_Hedging-with-fence.jpeg",
'https://media.istockphoto.com/id/475958716/photo/lawn-mower.jpg?s=2048x2048&w=is&k=20&c=6Q3aPOuE3eFtI18xN_RX1kO3r7O7ycS88oTSGMS4Jds=',
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ugaoo.com%2Fblogs%2Fgardening-basics%2Fways-to-prepare-healthy-garden-soil&psig=AOvVaw1A_jZIV9iWyAUP4bdbOOyS&ust=1695033410102000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjS4tS5sYEDFQAAAAAdAAAAABAE',
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmiraclegro.com%2Fen-ca%2Findoor-outdoor%2Fhow-to-plant-almost-anything.html&psig=AOvVaw3sF3DERVC8n4ztrOSMaL1W&ust=1695033430989000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjN5d65sYEDFQAAAAAdAAAAABAJ']

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
         
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              A.T Gardening
            </Typography>
            <Typography variant="h5" align="justify" color="text.secondary" paragraph>
            <Typography variant='h4' align='center'>  🌿 Transform Your Garden! 🌼</Typography>
          
            <br></br>
Are you dreaming of a vibrant, thriving garden that's the envy of your neighborhood? Look no further! 
Our team of passionate gardening experts is here to bring your garden dreams to life.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <a href="tel:123-456-7890" style={{flextWrap: 'wrap', alignItems: 'center', display: 'flex'}} className='btn'>
<CallIcon></CallIcon>  Call Us</a>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={8} sm={4} md={6}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={imageList[card-1]}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                        {card-1}
                      {imageList[card-1]}
                    </Typography>
                  </CardContent>
                
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}