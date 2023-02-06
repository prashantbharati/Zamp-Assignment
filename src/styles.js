import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifContent: "center",
    alignItems: "center",
    transition: "0.6s",
    padding: "40px 100px",
    zIndex: "100",
  },

  headersticky: {
    padding: "5px 100px",
    transform: "trans",
    height: "16vh",
    background: "rgba(0, 0, 0, 0.45);",
    backdropFilter: "saturate(180%) blur(20px)",
  },

  headersticky2: {
    padding: "5px 100px",
    height: "25vh",
    background: "rgba(0, 0, 0, 0.45);",
    backdropFilter: "saturate(180%) blur(20px)",
  },

  button: {
    // display: "table-cell",
    padding: "8px 30px",
    marginLeft: "30px",
    backgroundColor: "#68CBC1",
    color: "white",
    textTransform: "uppercase",
    fontSize: "16px",
    fontWeight: "500",
    letterSpacing: "0.2px",

    borderStyle: "none",
    borderRadius: "999px 999px 999px 999px",
    boxShadow: "0px 5px 15px 0px rgb(39 48 112 / 51%)",
  },

  headerlogo: {
    position: "relative",
    fontWeight: "700",
    color: "#fff",
    textDecoration: "none",
    fontSize: "2em",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  headerstickylogo: {
    position: "relative",

    // color: "#fff",
    textDecoration: "none",
    fontSize: "1.1em",
    fontWeight: "500",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#fff",
  },

  headerul: {
    position: "relative",
    fontFamily: "Montserrat",
    display: "flex",

    alignItems: "center",
  },

  headerulli: {
    fontFamily: "Montserrat",
    position: "relative",
    listStyle: "none",
  },

  headerullia: {
    position: "relative",
    margin: "0 10px",
    textDecoration: "none",
    color: "#fff",
    letterSpacing: "1px",
    fontWeight: "500px",
    fontSize: "17px",
    transition: "0.6s",
  },

  banner: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "url(admin-ajax.jpg)",
    backgroundSize: "cover",
  },

  headerstickyullia: {
    color: "#000",
    fontSize: "125px",
  },
}));
