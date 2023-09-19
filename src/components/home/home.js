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
    <ThemeProvider theme={defaultTheme}   >
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
         
        </Toolbar>
      </AppBar> */}
      <main 
     
   >

        <Box
          // sx={{
          //   bgcolor: "background.paper",
          //   pt: 8,
          //   pb: 6
          // }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
              paddingTop={18}
              fontFamily={"fantasy"}
            >
              A.T Landscaping
            </Typography>
            
            <Typography
              variant="h5"
              align="justify"
              color="text.primary"
              paragraph
              paddingTop={10}
            >
              <Typography variant="h4" align="center" color={"whitesmoke"}>
                {" "}
                🌿 Transform Your Garden! 🌼
              </Typography>
              <br></br>
              <Typography color = "whitesmoke" variant="h5">
              Are you dreaming of a vibrant, thriving garden that's the envy of
              your neighborhood? Look no further! Our team of passionate
              gardening experts is here to bring your garden dreams to life.
              </Typography>
              
            </Typography>

            {/* <Box style={{display: 'flex', alignItems:center'}}>
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
        <br></br>
        <ServiceCard></ServiceCard>
        <Typography color={"white"}>
        Let's make your garden the pride of the neighborhood. Call us to schedule a free consultation. 
        Discover the joy of a lush, thriving garden right at your doorstep.
        </Typography>
      </main>
      <br></br>
     
      <Box sx={{ bgcolor: "background.paper", p:6 }} component="footer">
      <Typography> ABN : 84 607 845 408</Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
