import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function ServiceCard() {
  const cards = [1, 2, 3, 4];
  const imageList = [
    {
      image:
        "https://assets-global.website-files.com/62a6520d16a4c82ce7aba2af/6321219141e05125fce32f8c_Hedging-with-fence.jpeg",
      heading: "Hedging",
    },
    {
      image:
        "https://media.istockphoto.com/id/475958716/photo/lawn-mower.jpg?s=612x612&w=0&k=20&c=TIGBHDkXS9IJbq84NHtfsFIPp_aqy6APWni2r_oS2NQ=",
      heading: "Lawn Care",
    },
    {
      image:
        "https://www.ugaoo.com/cdn/shop/articles/shutterstock_319814978.jpg?v=1661851104",
      heading: "Soild Preparation",
    },
    {
      image:
        "https://images.contentstack.io/v3/assets/blt8a7a033b27ce226d/blt37e0a285136bb4c3/638766d5a447b710177c5a39/Scotts_053014_Planting_Basil-104.jpg",
      heading: "Planting",
    },
  ];

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={32} sm={12} md={6}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="div"
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image={imageList[card - 1].image}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {imageList[card - 1].heading}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
