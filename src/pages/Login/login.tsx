/** @format */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme/theme";
import Grid from "@mui/material/Grid";
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

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { yourEmail, passwordTItle, loginNowButton } = useTranslation();

  const user = useSelector((state: any) => state.login.loginData);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const [inCorrectCredentials, setInCorrectCredentials] =
    useState<boolean>(false);

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
  } = useStyles(appTheme);

  useEffect(() => {
    if (user && user?.userName) {
      localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
      navigate("/home");
    }
  }, [user]);

  useEffect(() => {
    if (inCorrectCredentials) {
      setTimeout(() => {
        setInCorrectCredentials(false);
      }, 10000);
    }
  }, [inCorrectCredentials]);

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
      if (
        values?.userid === "Mike@ross" &&
        values?.password === "Mikeross@2023#"
      ) {
        let payload = {
          userName: values.userid,
          passWord: values.password,
        };
        dispatch(getUserLogin(payload));
        setInCorrectCredentials(false);
      } else {
        setInCorrectCredentials(true);
      }
    },
  });

  const handleAdminPanel = () => {
    navigate("/adminLogin");
  };

  return (
    <>
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
                  {/* <img src={llaLogo} /> */}
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
                        {formik.values.userid &&
                          formik.values.password &&
                          inCorrectCredentials && (
                            <div className={incorrectCredential}>
                              Incorrect User Credentials
                            </div>
                          )}
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
                          {formik.errors.userid && formik.touched.userid && (
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
  );
};

export default Login;
