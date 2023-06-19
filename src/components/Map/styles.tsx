import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  containerStyle: (props: any) => ({
    width: "100%",
    height: "calc(100vh - 0px)",
  }),

  googleMapStyle: (props: any) => ({
    "& .gm-style-iw-d": {
      overflow: "auto !important",
    },

    "& .gm-style .gm-style-iw-tc::after, .gm-style .gm-style-iw-tc::before": {
      background: `${props?.palette?.dashboardList?.markerInfoWindowBg} !important`, //markerInfoWindowBg
    },

    "& .gm-style-iw-t > div > button": {
      display: "none !important",
    },

    "& .gm-style-iw": {
      background: `${props?.palette?.dashboardList?.markerInfoWindowBg} !important`,
      borderRadius: "8px",
      boxShadow: `0 2px 7px 1px ${props?.palette?.dashboardList?.lightShadeGray1}`,
      fontSize: "13px",
      fontWeight: 300,
      padding: "0px !important",
      fontFamily: `'Nunito Sans', sans-serif !important`,
    },
    "& .gm-style .gm-style-cc a, .gm-style .gm-style-cc button, .gm-style .gm-style-cc span":
      {
        display: "none !important",
      },
  }),
  footerSection: (props: any) => ({
    background: 'black',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: 'fixed',
    bottom: 0,
    zIndex:' 1111111',
    width: '100%',
    height: '50px',
    color: '#8d8d8d',
    fontSize: 14
  }),
});
export default useStyles;
