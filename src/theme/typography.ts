import { createTheme } from "@mui/material/styles";
//import fontTTF from './fonts/font.ttf';

const theme = createTheme();

const h1 = {
  fontFamily: 'HelveticaNeue-Regular',
  fontWeight: 500,
  fontSize: "48px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "24px",
    lineHeight: 1.4,
    letterSpacing: "",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "36px",
    lineHeight: 1.4,
    letterSpacing: "",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "48px",
    lineHeight: 1.4,
    letterSpacing: "",
  },
};

const h2 = {
  fontFamily: 'HelveticaNeue-Regular',
  fontWeight: 500,
  [theme.breakpoints.up("xs")]: {
    fontSize: "36px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "52px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "70px",
    lineHeight: 1,
    letterSpacing: "",
  },
};

const h3 = {
  fontFamily: 'HelveticaNeue-Regular',
  fontWeight: 500,
  [theme.breakpoints.up("xs")]: {
    fontSize: "18px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "36px",
    lineHeight: 1,
    letterSpacing: "",
  },
};

const h4 = {
  fontFamily: 'HelveticaNeue-Regular',
  fontWeight: 500,
  [theme.breakpoints.up("xs")]: {
    fontSize: "16px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "24px",
    lineHeight: 1,
    letterSpacing: "",
  },
};

const h5 = {
  fontFamily: 'HelveticaNeue-Regular',
  fontWeight: 500,
  [theme.breakpoints.up("xs")]: {
    fontSize: "14px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
    lineHeight: 1,
    letterSpacing: "",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "20px",
    lineHeight: 1,
    letterSpacing: "",
  },
};

const h6 = {};

const body = {};

const button = {};

const infSmall = {};
const infMedium = {};
const infLarge = {};
const infXLarge = {};

const typography = {
  fontFamily: 'HelveticaNeue-Regular',
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  body: body,
  button: button,
  infSmall: infSmall,
  infMedium: infMedium,
  infLarge: infLarge,
  infXLarge: infXLarge,
};

export default typography;
