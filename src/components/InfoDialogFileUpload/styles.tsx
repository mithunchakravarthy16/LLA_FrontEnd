/** @format */

import { makeStyles } from "@mui/styles";
import UploadIcon from "../../assets/uploadIcon.svg";

const useStyles = makeStyles(() => ({
  buttonContainer: (props: any) => ({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    padding: "1.5vh 0",
  }),
  cancelButtonContainer: (props: any) => ({
    paddingRight: "1vw",
    "& .MuiButtonBase-root": {
      color: "#444242",
      border: "none",
      borderRadius: "5px",
      fontSize: "0.8vw",
      padding: "1vh 2vh",
      fontFamily: "HelveticaNeue-Regular",
      background: "#F0F0F0",
      "&:hover": {
        border: "none",
        background: "#F0F0F0",
      },
    },
  }),
  updateButtonContainer: (props: any) => ({
    "& .MuiButtonBase-root": {
      color: "#FFFFFF",
      background: "#1A3175",
      borderRadius: "5px",
      fontSize: "0.8vw",
      fontFamily: "HelveticaNeue-Regular",
      padding: "1vh 2vh",
      "&:hover": {
        background: "#1A3175",
      },
    },
  }),
  dropContainer: (props: any) => ({
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    width: "28vw",
    height: "20vh",
    border: "1px dashed #5485B2",
    // background: "#F9F9F9",
    margin: "20px",
  }),
  container: (props: any) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "25vw",
    height: "25vh",
    background: "#F9F9F9",
  }),
  uploadIcon: (props: any) => ({
    width: "10vw",
    height: "8vh",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
    paddingTop: "30px",
  }),
  dropMessage: (props: any) => ({
    textAlign: "center",
    color: "#2D3748",
  }),
}));

export default useStyles;
