import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid md={12} item>
          <Typography align="center" style={{ paddingTop: "15%" }} variant="h1">
            The most transparent & security banking ever
            <div>
              <Link to="/transfer">
                <Button style={{ fontSize: "30px" }} type="button">
                  Get Started Transfering money
                </Button>
              </Link>
            </div>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
