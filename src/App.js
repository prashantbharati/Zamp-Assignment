import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import countries from "./countries";
import dropdown from "./dropdown.js";
import plus from "./images/plus.jpeg";

import useStyles from "./styles.js";

import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";

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
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "15px",
            }}
          >
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

            <Button className={classes.button} variant="contained">
              <FontAwesomeIcon
                style={{
                  color: "yellow",
                  opacity: "1",
                  height: "25px",
                }}
                icon={faPlus}
              />

              <Typography
                style={{
                  color: "#5f6368",
                  opacity: "1",
                  fontSize: "15px",
                  lineHeight: "24px",
                }}
              >
                Create contact
              </Typography>
            </Button>

            {dropdown.map((data) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  // justifyContent: "center",
                  gap: "10px",
                  lineHeight: "1.3em",
                  marginLeft: "20px",

                  opacity: ".8",
                  overflow: "hidden",
                  transition: ".15s transform",
                }}
              >
                <FontAwesomeIcon
                  style={{
                    color: "#616161",
                    opacity: "1",
                    height: "20px",
                  }}
                  icon={data.img}
                />

                <div style={{ width: "10px" }}></div>

                <Typography
                  style={{
                    color: "#616161",
                    cursor: "pointer",
                    height: "7px",
                  }}
                >
                  {data.name}
                </Typography>
              </div>
            ))}
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
