/** @format */

import { makeStyles } from "@mui/styles";
import muiTheme from "../../theme/muiTheme";

const useStyles = makeStyles({
  root: (props: any) => ({ background: "transparent" }),
  tabLabel: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "HelveticaNeue-Regular",
    fontSize: 16,

    [muiTheme.breakpoints.up(3839)]: {
      fontSize: 30,
      lineHeight: "56px",
    },
    [muiTheme.breakpoints.down(3073)]: {
      fontSize: 22,
      lineHeight: "46px",
    },
    [muiTheme.breakpoints.down(2049)]: {
      fontSize: 15,
      lineHeight: "28px",
    },
    [muiTheme.breakpoints.down(1921)]: {
      fontSize: 13,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1793)]: {
      fontSize: 12,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1545)]: {
      fontSize: props.pageName === "parking" ? 14 : 11,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1281)]: {
      fontSize: props.pageName === "parking" ? 13 : 10,
      lineHeight: "21px",
    },
    [muiTheme.breakpoints.down(1153)]: {
      fontSize: props.pageName === "parking" ? 12 : 8,
      lineHeight: "21px",
    },
  }),

  tabLabelFleetInfoDialogue: (props: any) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8vw",
  }),

  tabLabelText: (props: any) => {
    console.log(
      "COLOR PROPERTY",
      props?.appTheme?.palette?.notification?.listItemLabel
    );
    return { color: props?.appTheme?.palette?.notification?.listItemLabel };
  },

  tabLabelTextSelected: (props: any) => {
    console.log(
      "COLOR PROPERTY",
      props?.appTheme?.palette?.notification?.listItemLabel
    );
    return {
      color: props?.appTheme?.palette?.notification?.listItemLabelSelected,
    };
  },

  tabCountContainer: (props: any) => {
    return {
      width: 45,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "28px",
      background: "#5B5B5B",
      borderRadius: "30px",
      color: "#B7B6B6",
      marginBottom: 6,
      [muiTheme.breakpoints.up(3839)]: {
        fontSize: "30px",
        lineHeight: "50px",
        marginBottom: 16,
        width: 90,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "24px",
        lineHeight: "42px",
        marginBottom: 16,
        width: 90,
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "18px",
        lineHeight: "36px",
        marginBottom: 16,
        width: 70,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "14px",
        lineHeight: "27px",
        marginBottom: 16,
        width: 60,
      },
      [muiTheme.breakpoints.down(1545)]: {
        fontSize: "11px",
        lineHeight: "21px",
        marginBottom: 16,
        width: 40,
      },
      [muiTheme.breakpoints.down(1153)]: {
        fontSize: "10px",
        lineHeight: "16px",
        marginBottom: 16,
        width: 35,
      },
    };
  },

  tabCountContainerSelected: (props: any) => {
    return {
      width: 45,
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "28px",
      background: props?.appTheme?.palette?.notification?.listItemLabelSelected,
      borderRadius: "30px",
      color: "#B7B6B6",
      marginBottom: 6,
      [muiTheme.breakpoints.up(3839)]: {
        fontSize: "30px",
        lineHeight: "50px",
        marginBottom: 16,
        width: 90,
      },
      [muiTheme.breakpoints.down(3073)]: {
        fontSize: "24px",
        lineHeight: "42px",
        marginBottom: 16,
        width: 90,
      },
      [muiTheme.breakpoints.down(2049)]: {
        fontSize: "18px",
        lineHeight: "36px",
        marginBottom: 16,
        width: 70,
      },
      [muiTheme.breakpoints.down(1921)]: {
        fontSize: "14px",
        lineHeight: "27px",
        marginBottom: 16,
        width: 60,
      },
      [muiTheme.breakpoints.down(1545)]: {
        fontSize: "11px",
        lineHeight: "21px",
        marginBottom: 16,
        width: 40,
      },
      [muiTheme.breakpoints.down(1153)]: {
        fontSize: "10px",
        lineHeight: "16px",
        marginBottom: 16,
        width: 35,
      },
    };
  },

  labelCountStyle: (props: any) => ({
    padding: "0px 15px",
    background: props?.appTheme?.palette?.notification?.tabTextColor,
    borderRadius: "11px",
  }),
  listCount: (props: any) => ({}),
});
export default useStyles;
