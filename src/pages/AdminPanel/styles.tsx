/** @format */

import { makeStyles } from "@mui/styles";
import MenuShapes from "../../assets/admin-leftpan-shape.png";
const useStyles = makeStyles(() => ({
  adminContentPanel: () => ({
  }),
  adminLeftPanel: () => ({
    padding: "20px 20px 20px 20px",
  }),
  adminRightPanel: () => ({
    background: "#F3F7FF",
    height: "100vh",
  }),
  menuItemList: () => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: "600",
    fontSize: "0.8999999999999999vw",
    color: "#91A2DE",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  appearanceSection: () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingRight: "1.5vw",
    paddingTop: "1.5vw",
    '& .MuiFormControlLabel-label': {
      fontSize: '0.8999999999999999vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 600,
    color: 'rgba(68, 91, 125, 1)',
    
    },
    '& .Mui-checked': {
      color: 'black !important',
      '&.MuiFormControlLabel-label': {
        color: 'black !important'

      }
    }
  }),
  colorPickerText: () => ({
    paddingRight: "2.5vw",
    fontSize: '0.8999999999999999vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 500
    
  }),
  colorPickerList: () => ({
    paddingBottom: "0.5vw",
    fontSize: '0.8999999999999999vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 500
  }),
  colorPickerSection: () => ({
   display: "flex",
   paddingTop: '12.5%'
  }),
  appearanceSectionCustom: () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '& .MuiFormControlLabel-label': {
      fontSize: '0.8999999999999999vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 600,
    color: 'rgba(68, 91, 125, 1)',
    
    },
    '& .Mui-checked': {
      color: 'black !important',
      '&.MuiFormControlLabel-label': {
        color: 'black !important'

      }
    }
  }),
  imageAppearance: () => ({
    width: '8.2vw'
  }),
  logoExtension: () => ({
    fontSize: '0.8vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 600,
    color: 'rgba(103, 98, 98, 1)',
  }),
  logoText: () => ({
    fontSize: '1.2vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 600,
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: '0.5%'
  }),
  customTextField: () => ({
    width: '50%',
    '& .MuiInputBase-input': {
      fontSize: '1vw',
      padding: '12px 16px',
      fontFamily: `'Montserrat', sans-serif`,
      background: '#fff',
      width: '100%',
      fontWeight: 700
    }
  }),
  customTextField2: () => ({
    '& .MuiInputBase-input': {
      fontSize: '0.8vw',
      padding: '20px 16px',
      fontFamily: `'Montserrat', sans-serif`,
      background: '#fff',
      width: '100%',
      fontWeight: 700
    }
  }),
  adminDashboard: () => ({
    padding: '1.3%'
  }),
  appearanceText: () => ({
    fontSize: '0.8999999999999999vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 600,
    color: 'rgba(68, 91, 125, 1)'
  }),
  appearanceSite: () => ({
    paddingTop: '2vw',
    paddingBottom: '0.5vw',
    fontSize: '0.8999999999999999vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 600,
    color: 'rgba(68, 91, 125, 1)'
  }),
  appearanceTitle: () => ({
    fontSize: '0.8999999999999999vw',
    fontFamily: `'Montserrat', sans-serif`,
    fontWeight: 700,
    color: 'rgba(0,0,0, 1)'
  }),
  menuIconSection: () => ({
    marginRight: "0.5vw",
  }),
  menuItemListActive: () => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: "600",
    fontSize: "0.8999999999999999vw",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  adminRightPanelHeader: () => ({
    borderBottom: "1px solid #00000020",
    display: "flex",
    alignItems: "center",
    padding: "1.3%",
  }),
  adminHeaderButtonSection: () => ({
    display: "flex",
    justifyContent: "flex-end",
    width: "21vw",
    margin: "0 0 0 auto",
    "& :last-child": {
      marginRight: "0 !important",
    },
  }),
  previewButton: () => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500 !important",
    fontSize: "0.8999999999999999vw !important",
    color: "#1A3175 !important",
    border: "1px solid #1a3175 !important",
    padding: "8px 16px !important",
    marginRight: "20px !important",
    flex: 1,
  }),
  cancelButton: () => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500 !important",
    fontSize: "0.8999999999999999vw !important",
    // color: "#1A3175 !important",
    padding: "8px 16px !important",
    marginRight: "20px !important",
    flex: 1,
  }),

  updateButton: () => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: " 500 !important",
    fontSize: "0.8999999999999999vw !important",
    color: "white !important",
    background: "#1a3175 !important",
    padding: "8px 16px !important",
    marginRight: "20px !important",
    flex: 1,
  }),
  colorSchemeHeading: () => ({
    fontFamily: `'Poppins', sans-serif`,
    fontWeight: 600,
    fontSize: "1.2vw",
    color: "#000000",
  }),
  innerPanel: () => ({
    background: "#F3F7FF",
    borderRadius: "24px",
    height: "100%",
  }),

  colorSchemeSubeading: () => ({
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#000000",
  }),
  backgroundColor: () => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: " 22px",
    textAlign: "left",
    color: " #445B7D",
    padding: " 30px 30px 0px 30px ",
  }),
  radioButton: () => ({
    paddingBottom: "30px !important",
    "& .MuiFormControlLabel-label": {
      color: "#445B7D",
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      textAlign: "left",
    },
  }),
  radioButtonHeader: () => ({
    fontFamily: "Montserrat",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "left",
    color: "#000000",
    marginBottom: "18px",
  }),
  adminRightPanelBody: () => ({
    padding: "30px 30px 0px 30px ",
    alignItems: "center",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  }),
  adminRightPanelBackgroundColor: () => ({
    padding: "30px 30px 30px 30px ",
    borderBottom: "1px solid rgb(0 0 0 / 10%)",
  }),
  customSelects: () => ({
    minWidth: "100px !important",
    minheight: "5px !important",
    paddingRight: "24px",
    paddingBottom: "30px",
    "& .MuiSelect-select": {
      padding: "15px 11px !important",
      background: "#FFFFFF",
      border: "1px solid #93A8C1",
      borderRadius: " 5px",
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "22px",
      textAlign: "left",
      color: "#000000",
    },
    "& .MuiInputBase-root": {
      borderRadius: "50px",
      fontSize: 14,
      // lineHeight: 21,
      textAlign: "center",
      fontWeight: "bold",
      position: "relative",
      color: "#000",
      "& .MuiSvgIcon-root": {
        position: "absolute",
        right: "10px",
        color: "black !important",
      },

      "& .MuiOutlinedInput-notchedOutline": {
        display: "none !important",
      },
    },

    "& .MuiSelect-iconOutlined": {
      color: `#000 !important`,
    },
  }),
  adminPlusIconClass: () => ({
    position: "relative",
    "& img": {
      position: "absolute",
      top: "57px",
      left: "77px",
      cursor: "pointer",
    },
  }),
  colorPickerItem: () => ({
    width: "250px !important",
  }),
  deleteIconClass: () => ({
    position: "relative",
    "& img": {
      position: "absolute",
      top: "55px",
      left: "26px",
      cursor: "pointer",
    },
  }),
  insideContainer: () => ({
    height: "calc(100vh - 340px)",
    overflow: " auto",
  }),
  fileUploadContainer: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "36px",
    marginBottom: "0px",
  },
  fileUploadTitle: {
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "22px",
    color: "#445B7D",
    marginBottom: "20px",
  },
  fileUploadContent: {
    display: "flex",
    alignItems: "center",
    paddingTop: "1vw",
    paddingRight: '4vw',
    paddingBottom: '1vw'
  },
  logoPreviewWrapper: {
    border: "7px solid #F9F9F9",
    background: "#FFFFFF",
    borderRadius: "5px",
    marginRight: "30px",
    flex: 1
  },
  logoPreviewInnercontainer: {
    border: "1px dashed #5485B3",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: '12%',
  },
  logoPreview: {
    width: "9.3vw",
  },
  invisibleDisplay: {
    display: "none",
  },
  adminLogo: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "14%",
    borderBottom: "1px solid rgba(58, 63, 168, 1)",
    "& img": {
      width: "9.1vw",
    },
  }),
  adminLeftPanelContainer: (props) => ({
    background: "#0D0F36",
    height: '100%'
  }),
  spaceBottom: () => ({
    paddingBottom: '1.3%'
  }),
  space: () => ({
    paddingBottom: '1.3%',
    paddingTop: '1.3%'
  })
}));
export default useStyles;
