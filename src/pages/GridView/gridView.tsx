/** @format */

import { useState, useEffect } from "react";
import { Grid, Alert, Snackbar, Typography, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import GridViewScreenOne from "components/GridViewScreens/GridViewScreenOne";
import GridViewScreenTwo from "components/GridViewScreens/GridViewScreenTwo";
import GridViewScreenThree from "components/GridViewScreens/GridViewScreenThree";
import GridViewScreenFour from "components/GridViewScreens/GridViewScreenFour";
import GridViewScreenFive from "components/GridViewScreens/GridViewScreenFive";
import GridViewScreenSix from "components/GridViewScreens/GridViewScreenSix";
import theme from "../../theme/theme";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";
import Loader from "elements/Loader";
import {
  getFleetManagementOverspeeding,
  setFleetManagementOverAllTripDetails,
} from "redux/actions/fleetManagementNotificationActions";
import { getUserLogout, setUserLogin } from "redux/actions/loginActions";

const GridView: React.FC<any> = (props) => {
  const dispatch = useDispatch();

  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const loaderFleetManagementNotification = useSelector(
    (state: any) => state?.fleetManagementNotification?.loadingAnalytics
  );

  const fleetManagementResponse = useSelector(
    (state: any) =>
      state?.fleetManagementNotification?.fleetManagementOverspeeding
  );

  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setSelectedTheme(adminPanelData?.appearance);
  }, [adminPanelData]);

  useEffect(() => {
    switch (selectedTheme) {
      case "light":
        setAppTheme(theme?.lightTheme);
        break;
      case "dark":
        setAppTheme(theme?.darkTheme);
        break;
      default:
        setAppTheme(theme?.defaultTheme);
        break;
    }
  }, [selectedTheme]);

  const { rootContainer, mainSection } = useStyles(appTheme);

  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
  };

  // const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsDataLoaded(!isDataLoaded);
  //   }, 500);
  // }, []);

  useEffect(() => {
    setSuccess(false);
    dispatch(getFleetManagementOverspeeding({ type: "Day" }));
  }, []);

  useEffect(() => {
    setSuccess(false);
    if (
      fleetManagementResponse?.status === 500 ||
      fleetManagementResponse?.status === 404 ||
      fleetManagementResponse?.status === 400 ||
      fleetManagementResponse?.status === 409 ||
      fleetManagementResponse?.status === 413 ||
      fleetManagementResponse?.status === 410
    ) {
      setSuccess(true);
    } else if (fleetManagementResponse?.status === 200) {
      setSuccess(false);
    }
  }, [fleetManagementResponse]);

  useEffect(() => {
    if (count > 3) {
      localStorage.removeItem("user");
      localStorage.clear();
      dispatch(getUserLogout());
      dispatch(setUserLogin({}));
      navigate("/login");
    }
  }, [count]);

  const handleClose = () => {
    setSuccess(false);
  };

  const handleClickApi = () => {
    setCount((prev) => prev + 1);
    setSuccess(false);
    dispatch(getFleetManagementOverspeeding({ type: "Day" }));
  };

  return (
    <>
      {success && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={success}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={
              fleetManagementResponse?.status === 500 ||
              fleetManagementResponse?.status === 404 ||
              fleetManagementResponse?.status === 400 ||
              fleetManagementResponse?.status === 409 ||
              fleetManagementResponse?.status === 413 ||
              fleetManagementResponse?.status === 410
                ? "error"
                : undefined
            }
            sx={{ width: "100%" }}
          >
            {fleetManagementResponse?.status === 500 && (
              <div style={{ display: "flex" }}>
                <Typography>Something went wrong...</Typography>
                <Link
                  component="button"
                  variant="body2"
                  onClick={handleClickApi}
                >
                  Please try again
                </Link>
              </div>
            )}
            {fleetManagementResponse?.status === 404 && (
              <div style={{ display: "flex" }}>
                <Typography>Data Not Available</Typography>
              </div>
            )}
            {fleetManagementResponse?.status === 400 && (
              <div style={{ display: "flex" }}>
                <Typography>Bad Request</Typography>
              </div>
            )}
            {fleetManagementResponse?.status === 409 && (
              <div style={{ display: "flex" }}>
                <Typography>Already data available</Typography>
              </div>
            )}
            {fleetManagementResponse?.status === 413 && (
              <div style={{ display: "flex" }}>
                <Typography>Request too large</Typography>
              </div>
            )}
            {fleetManagementResponse?.status === 410 && (
              <div style={{ display: "flex" }}>
                <Typography>Request not available</Typography>
              </div>
            )}
          </Alert>
        </Snackbar>
      )}
      {loaderFleetManagementNotification ? (
        <Loader isHundredVh={true} />
      ) : (
        <div className={rootContainer}>
          <Grid container className={mainSection}>
             {/* Grid 6 */}
             <GridViewScreenSix
              handleClick={handleClick}
              selectedTheme={selectedTheme}
            />
             {/* Grid 5 */}
             <GridViewScreenFive
              handleClick={()=>{}}
              selectedTheme={selectedTheme}
              fleetManagementResponse={fleetManagementResponse}
            />

           
            {/* Gride 1 */}
            <GridViewScreenOne
              handleClick={handleClick}
              selectedTheme={selectedTheme}
            />

            {/* Grid 2 */}
            <GridViewScreenTwo
              handleClick={()=>{}}
              selectedTheme={selectedTheme}
            />

            {/* Grid 3 */}
            <GridViewScreenThree
              handleClick={()=>{}}
              selectedTheme={selectedTheme}
            />

            {/* Grid 4 */}
            <GridViewScreenFour
              handleClick={()=>{}}
              selectedTheme={selectedTheme}
            />

           
          </Grid>
        </div>
      )}
    </>
  );
};

export default GridView;
