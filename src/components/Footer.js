import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        backgroundColor: "rgba(0,0,0, 1)",
        p: 6,
        color: "#FFFFFF00", // Set the color to white
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              style={{ color: "white" }}
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              About Us
            </Typography>
            <Typography variant="body2" style={{ color: "white" }}>
              We are Sanmax Company, dedicated to providing the best service to
              our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} style={{ color: "white" }}>
            <Typography
              variant="h6"
              style={{ color: "white" }}
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" style={{ color: "white" }}>
            Sanmax Mercado ,
            Registered Head Quarters 
            Queensbay Kochi, India 

            </Typography>
            <Typography variant="body2" style={{ color: "white" }}>
              Email: sanmax@gmail.com
            </Typography>
            <Typography variant="body2" style={{ color: "white" }}>
              Phone: +971 58 589 6602
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              style={{ color: "white" }}
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook sx={{ color: "white" }} />{" "}
            </Link>
            <Link
              href="https://www.instagram.com/sanojkt/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram sx={{ color: "white" }} />{" "}
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter sx={{ color: "white" }} />{" "}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" style={{ color: "white" }} align="center">
            {"Copyright "}
            <Link style={{ color: "white" }} href="https://sanmax.netlify.app/">
              Sanmax Mecado
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
