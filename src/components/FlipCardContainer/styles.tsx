import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
      
    flipCardContainer: (props: any) => ({
      
    }),

    frontFlipCard: (props: any) => ( {
        height: "150px",
        width: "150px",
        background: "red",
        border: "2px solid black",
      }),
      
      backFlipCard: (props: any) => ( {
        height: "150px",
        width: "150px",
        background: "blue",
        border: "2px solid black",
      }),

  }));
  
  export default useStyles;