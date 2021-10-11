import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const history = useHistory();

  const addUser = () => {
    axios
      .post("https://arcane-depths-62061.herokuapp.com/users/addUser", {
        name: name,
        email: email,
        amount: amount,
      })
      .then((res) => history.go(0))
      .catch((err) => console.log(err));
  };

  return (
    <Grid container spacing={3}>
      <Grid style={{ margin: "2%" }} md={6} xs={12} item>
        <form>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Input
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl style={{ marginTop: "3%" }} fullWidth>
            <InputLabel id="demo-simple-select-label">E-Mail</InputLabel>
            <Input
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl style={{ marginTop: "3%" }} fullWidth>
            <InputLabel id="demo-simple-select-label">amount</InputLabel>
            <Input
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormControl>

          <FormControl style={{ marginTop: "3%" }} fullWidth>
            <Button type="button" onClick={addUser}>
              Add
            </Button>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddUser;
