import React, { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import useStyles from "./styles";

const EnergyManagementContainer = () => {

    const [appTheme, setAppTheme] = useState();
    // const [selectedTheme, setSelectedTheme] = useState(
    //     JSON.parse(localStorage.getItem("theme")!)
    //   );

    //   useEffect(() => {
    //     switch (selectedTheme) {
    //       case "light":
    //         setAppTheme(customTheme?.lightTheme);
    //         break;
    //       case "dark":
    //         setAppTheme(customTheme?.darkTheme);
    //         break;
    //       default:
    //         setAppTheme(customTheme?.defaultTheme);
    //         break;
    //     }
    //   }, [selectedTheme]);

    const {
        flipCardContainer,
        frontFlipCard,
        backFlipCard,
      } = useStyles(appTheme);

const [isFlipped, setIsFlipped]=useState<boolean>(false)

const handleFlipCardClick = ()=>{
    setIsFlipped(!isFlipped)
}

  return (
    <>
       <Grid container xs={12} style={{color: "#fff", background: "#1d2c4d"}}>
       <Grid item xs={12} >
        <Grid container xs={12}>
          <Grid item xs={4} style={{background: "#1b1b1b", border: "1px solid #FF0000"}}>
            <Grid container xs={12}>
              <Grid item xs={12} style={{display: "flex", justifyContent: "space-between", padding: "20px"}}>
                <div><img src='' alt='img'/>{` | ENERGY MANAGEMENT`}   </div>
                <div style={{display: "flex", columnGap: "20px"}}>
                  <div style={{display: "flex"}}><img src='' alt='img'/><div>147</div> </div>
                  <div style={{display: "flex"}}><img src='' alt='img'/><div>47</div> </div>
                </div>
              </Grid>
              <Grid item xs={12} style={{padding: "0px 15px 15px 15px"}}>
                <Grid container xs={12} style={{height: "180px"}}>
                  <Grid item xs={4} >Graph 1</Grid>
                  <Grid item xs={4}>Graph 2</Grid>
                  <Grid item xs={4}>Graph 3</Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{padding: "0px 30px 30px 30px"}}>15% Energy Saving</Grid>
            </Grid>
          </Grid>

          <Grid item xs={4} style={{background: "#1b1b1b", borderTop: "1px solid #FF0000", borderBottom: "1px solid #FF0000"}}>
            <Grid container xs={12}>
              <Grid item xs={12} style={{display: "flex", justifyContent: "space-between", padding: "20px"}}>
                <div><img src='' alt='img'/>{` | ENERGY MANAGEMENT`}   </div>
                <div style={{display: "flex", columnGap: "20px"}}>
                  <div style={{display: "flex"}}><img src='' alt='img'/><div>147</div> </div>
                  <div style={{display: "flex"}}><img src='' alt='img'/><div>47</div> </div>
                </div>
              </Grid>
              <Grid item xs={12} style={{padding: "0px 15px 15px 15px"}}>
                <Grid container xs={12} style={{height: "180px"}}>
                  <Grid item xs={4} >Graph 1</Grid>
                  <Grid item xs={4}>Graph 2</Grid>
                  <Grid item xs={4}>Graph 3</Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{padding: "0px 30px 30px 30px"}}>15% Energy Saving</Grid>
            </Grid>
          </Grid>

          <Grid item xs={4} style={{background: "#1b1b1b", border: "1px solid #FF0000"}}>
            <Grid container xs={12}>
              <Grid item xs={12} style={{display: "flex", justifyContent: "space-between", padding: "20px"}}>
                <div><img src='' alt='img'/>{` | ENERGY MANAGEMENT`}   </div>
                <div style={{display: "flex", columnGap: "20px"}}>
                  <div style={{display: "flex"}}><img src='' alt='img'/><div>147</div> </div>
                  <div style={{display: "flex"}}><img src='' alt='img'/><div>47</div> </div>
                </div>
              </Grid>
              <Grid item xs={12} style={{padding: "0px 15px 15px 15px"}}>
                <Grid container xs={12} style={{height: "180px"}}>
                  <Grid item xs={4} >Graph 1</Grid>
                  <Grid item xs={4}>Graph 2</Grid>
                  <Grid item xs={4}>Graph 3</Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{padding: "0px 30px 30px 30px"}}>15% Energy Saving</Grid>
            </Grid>
          </Grid>


        </Grid>

       </Grid>
       <Grid item xs={12} style={{color: "#fff", background: "#1d2c4d", height: "calc(100vh - 311px)"}}></Grid>
       </Grid>
      </>
  )
}

export default EnergyManagementContainer
