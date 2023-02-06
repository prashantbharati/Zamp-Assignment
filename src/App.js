import React, { useState } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import countries from "./countries";

import useStyles from "./styles.js";

import {
  faAddressBook,
  faBars,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
const App = () => {
  const [value, setValue] = useState("");
  const [result, setresult] = useState([]);
  const classes = useStyles();
  const handlechange = (e) => {
    setValue(e.target.value);
    console.log(value);
    let result1 = countries.filter(checkstring);
    console.log(result1);
    setresult(result1);
    console.log(result, "result printed");
  };

  function checkstring(country) {
    console.log(value, country);
    // return value === country.name;
    return country.name.includes(value);
  }

  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <div
            style={{
              height: "10vh",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              style={{
                color: "#5f6368",
                opacity: "1",
                height: "25px",
              }}
              icon={faBars}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "60px",
                  lineHeight: "24px",
                }}
                src="https://play-lh.googleusercontent.com/fvhPW8dpGXM42Y-6aQU8Yl25L1l_mVgeoM-n08FxAkM7umAHkNs8wcs4MA49E67a7WVt"
              />
              <Typography
                style={{
                  color: "#5f6368",
                  opacity: "1",
                  fontSize: "22px",
                  lineHeight: "24px",
                }}
              >
                Contacts
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            onChange={handlechange}
          />

          {value === "" &&
            countries.map((country) => (
              <div>
                <Typography> {country.name}</Typography>
              </div>
            ))}
          {result.map((country) => (
            <div>
              <Typography> {country.name}</Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default App;
