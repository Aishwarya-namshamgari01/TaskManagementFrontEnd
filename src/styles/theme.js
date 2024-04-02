import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
    h0: {
      fontSize: "30px",
      fontWeight: 700,
      color: "var(--text-color-0)",
    },
    h1: {
      fontSize: "22px",
      fontWeight: 700,
      color: "var(--text-color-0)",
    },
    h2: {
      fontSize: "15px",
      fontWeight: 900,
      color: "var(--text-color-0)",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 700,
      color: "var(--text-color-1)",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
      color: "var(--text-color-0)",
    },
    h5: {
      fontSize: "14px",
      fontWeight: 500,
      color: "var(--text-color-1)",
    },
    h6: {
      fontSize: "12px",
      fontWeight: 500,
      color: "var(--text-color-1)",
    },
    pageHeading: {
      fontSize: "20px",
      fontWeight: 600,
      color: "var(--text-color-0)",
    },
    paragraph: {
      fontSize: "14px",
      fontWeight: 400,
      color: "var(--paragraph)",
    },
    numbersCount: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "21.6825px",
      lineHeight: "37px",
      letterSpacing: "-0.005em",
      color: "var(--text-color-1)",
    },
    h10: {
      fontSize: "10px",
      fontWeight: 400,
      // color: "var(--text-color-2)",
    },
    body1: {
      fontSize: "14px",
      color: "var(--text-color-1)",
      fontWeight: 500,
    },
    body2: {
      fontSize: "14px",
      color: "var(--text-color-1)",
      fontWeight: 700,
    },
    iconsBgColor: {
      backgroundColor: "#fec629",
      borderRadius: "30px",
    },
    subtitle1: {
      fontSize: "13px",
      color: "var(--text-color-1)",
    },
    subtitle2: {
      fontSize: "12px",
      color: "var(--text-color-1)",
      fontWeight: 500,
    },
    textBgColor: {
      backgroundColor: "var(--bg-color)",
      borderRadius: "10px",
      padding: "8px",
    },
  },
});

export default theme;
