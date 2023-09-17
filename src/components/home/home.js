import * as React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import "./home.css";
import ServiceCard from "../card/card";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        AT-Gardening
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
         
        </Toolbar>
      </AppBar> */}
      <main 
      // style={{backgroundImage : `url(https://i.pinimg.com/originals/3b/1b/3b/3b1b3bd2b9f1b4663049a88fe8f6bf29.gif)`,
      //  backgroundRepeat:'round'}}
   >

        <Box
          sx={{
            bgcolor: "background.paper",
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
            <Typography
              variant="h5"
              align="justify"
              color="text.secondary"
              paragraph
            >
              <Typography variant="h4" align="center">
                {" "}
                🌿 Transform Your Garden! 🌼
              </Typography>
              <br></br>
              Are you dreaming of a vibrant, thriving garden that's the envy of
              your neighborhood? Look no further! Our team of passionate
              gardening experts is here to bring your garden dreams to life.
            </Typography>

            {/* <Box style={{display: 'flex', alignItems:'center'}}>
              <img 
                src= {`https://img1.picmix.com/output/stamp/normal/4/2/6/8/1508624_ff7be.gif`}
              ></img>
            </Box> */}
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <a
                href="tel:+61415945921"
                style={{
                  flextWrap: "wrap",
                  alignItems: "center",
                  display: "flex",
                }}
                className="btn"
              >
                <CallIcon></CallIcon> Call Us
              </a>
              <a
                href="mailto:anu.tharma27@hotmail.com"
                style={{
                  flextWrap: "wrap",
                  alignItems: "center",
                  display: "flex",
                }}
                className="btn"
              >
                <MailIcon></MailIcon> Mail Us
              </a>
              
           
            </Stack>
            
          </Container>
        </Box>

        <ServiceCard></ServiceCard>
        <Typography>
        Let's make your garden the pride of the neighborhood. Call us to schedule a free consultation. 
        Discover the joy of a lush, thriving garden right at your doorstep.
        </Typography>
      </main>
      <br></br>
      <Typography> ABN : 84 607 845 408</Typography>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
