/** @format */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme/theme";
import { Grid, Alert, Snackbar, Typography, Link } from "@mui/material";
import Box from "@mui/material/Box";
import llaLogo from "../../assets/images/lla-logo.svg";
import loginBorder from "../../assets/login-border.svg";
import virtualIOTLogo from "../../assets/Iot-logo.svg";
import smartLogoText from "../../assets/images/smart-logo-text.svg";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserLogin } from "../../redux/actions/loginActions";
import useTranslation from "../../localization/translations";
import useStyles from "./styles";
import Footer from "components/Footer";
import llaBanner from "../../assets/images/login-bg1.jpg";
import llaLightBanner from "../../assets/lightThemeBanner.svg";
import {
  getAdminPanelConfigData,
  setAdminPanelConfigData,
} from "redux/actions/adminPanel";
import { getUserLogout, setUserLogin } from "redux/actions/loginActions";
import Loader from "elements/Loader";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { yourEmail, passwordTItle, loginNowButton, signInTitle } =
    useTranslation();

  const user = useSelector((state: any) => state.login.loginData);

  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData
  );

  const adminPanelSaveData = useSelector(
    (state: any) => state?.adminPanel?.configData
  );

  const [selectedTheme, setSelectedTheme] = useState<any>();
  const [appTheme, setAppTheme] = useState<any>();

  const [inCorrectCredentials, setInCorrectCredentials] =
    useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    dispatch(getAdminPanelConfigData({ isPreview: "N", isDefault: "N" }));
  }, []);

  useEffect(() => {
    setSelectedTheme(adminPanelData?.data?.body?.appearance);
  }, [adminPanelData]);

  useEffect(() => {
    setSuccess(false);
    dispatch(setUserLogin({}));
    dispatch(setAdminPanelConfigData({}));
  }, []);

  useEffect(() => {
    if (adminPanelSaveData?.data?.body?.isPreview === "Y") {
      dispatch(getAdminPanelConfigData({ isPreview: "Y", isDefault: "N" }));
    }
  }, [adminPanelSaveData]);

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

  const {
    loginBannerSection,
    loginFormSection,
    welcomeSection,
    welcomeContent,
    formTitle,
    inputTitle,
    inputField,
    inputFieldPassword,
    loginButton,
    innerForm,
    formikErrorClass,
    outlineInputField,
    incorrectCredential,
    llaLogoSection,
    formSection,
    innerPaddingBox,
    adminPanel,
  } = useStyles({ ...appTheme, selectedTheme: selectedTheme });

  useEffect(() => {
    if (
      user &&
      user?.data &&
      user?.data?.userName &&
      (user?.data?.currentRoleType === "USER" ||
        user?.data?.currentRoleType === "ADMIN") &&
      user?.status === 200
    ) {
      setSuccess(false);
      navigate("/home");
    } else if (
      user?.status === 500 ||
      user?.status === 404 ||
      user?.status === 400 ||
      user?.status === 409 ||
      user?.status === 413 ||
      user?.status === 410 ||
      user?.status === 401 ||
      adminPanelData?.status === 500 ||
      adminPanelData?.status === 404 ||
      adminPanelData?.status === 400 ||
      adminPanelData?.status === 409 ||
      adminPanelData?.status === 413 ||
      adminPanelData?.status === 410 ||
      adminPanelData?.status === 401 ||
      adminPanelSaveData?.status === 500 ||
      adminPanelSaveData?.status === 404 ||
      adminPanelSaveData?.status === 400 ||
      adminPanelSaveData?.status === 409 ||
      adminPanelSaveData?.status === 413 ||
      adminPanelSaveData?.status === 410 ||
      adminPanelSaveData?.status === 401
    ) {
      setSuccess(true);
      setInCorrectCredentials(true);
      setTimeout(() => {
        dispatch(setUserLogin({}));
        setSuccess(false);
      }, 2000);
    }
  }, [user, adminPanelData, adminPanelSaveData]);

  // useEffect(() => {
  //   if (inCorrectCredentials) {
  //     setTimeout(() => {
  //       setInCorrectCredentials(false);
  //     }, 10000);
  //   }
  // }, [inCorrectCredentials]);

  useEffect(() => {
    if (count > 3) {
      localStorage.removeItem("user");
      localStorage.clear();
      dispatch(getUserLogout());
      dispatch(setUserLogin({}));
      navigate("/login");
    }
  }, [count]);

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },
    validationSchema: Yup.object({
      userid: Yup.string()
        .min(2, "Mininum 2 characters")
        .required("Please Enter Username"),
      password: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(20, "Maximum 20 characters")
        .required("Please Enter Password"),
    }),
    onSubmit: (values) => {
      let payload = {
        userName: values.userid,
        passWord: values.password,
      };

      dispatch(getUserLogin(payload));
      // setInCorrectCredentials(false);
    },
  });

  const handleClose = () => {
    setSuccess(false);
  };

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setSuccess(false);
    dispatch(getAdminPanelConfigData({ isPreview: "N", isDefault: "N" }));
  };
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  useEffect(() => {
    setBackgroundLoaded(false)
    const backgroundImageUrl =
      selectedTheme === 'light' ? llaLightBanner : llaBanner;    
    const img = new Image();
    img.src = backgroundImageUrl;    
    img.onload = () => {      
      setBackgroundLoaded(true);     
    };

    // return () => {
    //   img.onload = null;
    // };
  }, [selectedTheme]);

  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDataLoaded(!isDataLoaded);
    }, 5000);
  }, []);

  const loaderAdminGetConfigData = useSelector(
    (state: any) => state?.adminPanel?.loadingGetConfigData
  );

  return (
    <>
      {!loaderAdminGetConfigData &&
      isDataLoaded &&
      appTheme && backgroundLoaded &&
      Object.keys(appTheme).length > 0 ? (
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
                  user?.status === 500 ||
                  user?.status === 404 ||
                  user?.status === 400 ||
                  user?.status === 409 ||
                  user?.status === 413 ||
                  user?.status === 410 ||
                  user?.status === 401 ||
                  adminPanelData?.status === 500 ||
                  adminPanelData?.status === 404 ||
                  adminPanelData?.status === 400 ||
                  adminPanelData?.status === 409 ||
                  adminPanelData?.status === 413 ||
                  adminPanelData?.status === 410 ||
                  adminPanelData?.status === 401 ||
                  adminPanelSaveData?.status === 500 ||
                  adminPanelSaveData?.status === 404 ||
                  adminPanelSaveData?.status === 400 ||
                  adminPanelSaveData?.status === 409 ||
                  adminPanelSaveData?.status === 413 ||
                  adminPanelSaveData?.status === 410 ||
                  adminPanelSaveData?.status === 401
                    ? "error"
                    : undefined
                }
                sx={{ width: "100%" }}
              >
                {(user?.status === 500 ||
                  adminPanelData?.status === 500 ||
                  adminPanelSaveData?.status === 500) && (
                  <div style={{ display: "flex" }}>
                    <Typography>Something went wrong...</Typography>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleClick}
                    >
                      Please try again
                    </Link>
                  </div>
                )}
                {(user?.status === 404 ||
                  adminPanelData?.status === 404 ||
                  adminPanelSaveData?.status === 404) && (
                  <div style={{ display: "flex" }}>
                    <Typography>Data Not Available</Typography>
                  </div>
                )}
                {(user?.status === 400 ||
                  adminPanelData?.status === 400 ||
                  adminPanelSaveData?.status === 400) && (
                  <div style={{ display: "flex" }}>
                    <Typography>Bad Request</Typography>
                  </div>
                )}
                {(user?.status === 409 ||
                  adminPanelData?.status === 409 ||
                  adminPanelSaveData?.status === 409) && (
                  <div style={{ display: "flex" }}>
                    <Typography>Already data available</Typography>
                  </div>
                )}
                {(user?.status === 413 ||
                  adminPanelData?.status === 413 ||
                  adminPanelSaveData?.status === 413) && (
                  <div style={{ display: "flex" }}>
                    <Typography>Request too large</Typography>
                  </div>
                )}
                {(user?.status === 410 ||
                  adminPanelData?.status === 410 ||
                  adminPanelSaveData?.status === 410) && (
                  <div style={{ display: "flex" }}>
                    <Typography>Request not available</Typography>
                  </div>
                )}
                {(user?.status === 401 ||
                  adminPanelData?.status === 401 ||
                  adminPanelSaveData?.status === 401) && (
                  <div style={{ display: "flex" }}>
                    <Typography>Unauthorized user</Typography>
                  </div>
                )}
              </Alert>
            </Snackbar>
          )}
          <div>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                className={loginBannerSection}
              >
                <div className={innerPaddingBox}>
                  <div className={formSection}>
                    <div className={llaLogoSection}>
                      {adminPanelData?.data?.body?.login && (
                        <img
                          src={`data:image/jpeg;base64,${adminPanelData?.data?.body?.login}`}
                        />
                      )}
                    </div>
                    <h2 className={formTitle}>
                      <img src={smartLogoText} />
                    </h2>
                  </div>
                  <div className={loginFormSection}>
                    <Grid item xs={12} className={innerForm}>
                      <Box>
                        <form onSubmit={formik.handleSubmit}>
                          <div className={welcomeSection}>
                            <p className={welcomeContent}>Sign In</p>
                            {/* {formik.values.userid &&
                          formik.values.password &&
                          inCorrectCredentials && (
                            <div className={incorrectCredential}>
                              Incorrect User Credentials
                            </div>
                          )} */}
                          </div>

                          <div>
                            <p className={inputTitle}>{yourEmail}</p>
                            <div className={outlineInputField}>
                              <OutlinedInput
                                className={inputField}
                                fullWidth
                                placeholder="Username@domainname.com"
                                type="text"
                                name="userid"
                                value={formik.values.userid}
                                onChange={formik.handleChange}
                                autoComplete="off"
                                inputProps={{
                                  autocomplete: "new-password",
                                  form: {
                                    autocomplete: "off",
                                  },
                                }}
                              />
                              {formik.errors.userid &&
                                formik.touched.userid && (
                                  <p className={formikErrorClass}>
                                    {formik.errors.userid}
                                  </p>
                                )}
                            </div>
                          </div>
                          <div>
                            <p className={inputTitle}>{passwordTItle}</p>
                            <div className={outlineInputField}>
                              <OutlinedInput
                                className={inputFieldPassword}
                                fullWidth
                                placeholder="&#9913;&#9913;&#9913;&#9913;&#9913;&#9913;&#9913;&#9913;"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                autoComplete="off"
                                inputProps={{
                                  autocomplete: "new-password",
                                  form: {
                                    autocomplete: "off",
                                  },
                                }}
                              />
                              {formik.errors.password &&
                                formik.touched.password && (
                                  <p className={formikErrorClass}>
                                    {formik.errors.password}
                                  </p>
                                )}
                            </div>
                          </div>
                          {/* <div className={radioButtonSection}>
                      <FormControlLabel
                        value="rememberMe"
                        control={<Radio />}
                        label="Remember me"
                      />
                    </div> */}
                          <div className={loginButton}>
                            <Button variant="contained" fullWidth type="submit">
                              {loginNowButton}
                            </Button>
                          </div>
                          {/* <div className={adminPanel} onClick={handleAdminPanel}>
                        Admin Panel
                      </div> */}
                        </form>
                      </Box>
                    </Grid>
                    {/* <p className={copyRights}>
                {copyRightTitle} <span>{contactSupport}</span>
              </p> */}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <Footer pageName={"login"} />
        </>
      ) : (
        <Loader isHundredVh={true} />
      )}
    </>
  );
};

export default Login;
