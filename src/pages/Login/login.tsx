import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme/theme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import loginBorder from "../../assets/login-border.svg";
import logisticLogo from "../../assets/logistic-logo.svg";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import loginIllustration from "../../assets/Illustration-Login.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getUserLogin } from "../../redux/actions/loginActions";
import useStyles from "./styles";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.login.loginData);

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   switch (selectedTheme) {
  //     case "red":
  //       setAppTheme(theme?.redTheme);
  //       break;
  //     case "green":
  //       setAppTheme(theme?.greenTheme);
  //       break;
  //     case "yellow":
  //       setAppTheme(theme?.yellowTheme);
  //       break;
  //     case "default":
  //       setAppTheme(theme?.defaultTheme);
  //       break;
  //     default:
  //       setAppTheme(theme?.defaultTheme);
  //       break;
  //   }
  // }, [selectedTheme]);

  const {} = useStyles(appTheme);

  useEffect(() => {
    if (user && user?.email) {
      localStorage.setItem("user", JSON.stringify({ role: "ADMIN" }));
      navigate("/dashboard");
    }
  }, [user]);

  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },
    validationSchema: Yup.object({
      userid: Yup.string()
        .min(2, "Mininum 2 characters")
        .required(" Please enter the user email address"),
      password: Yup.string()
        .min(8, "Mininum 2 characters")
        .max(12, "Maximum 15 characters")
        .required("Please enter the password"),
    }),
    onSubmit: (values) => {
      let payload = {
        deviceToken: "aaa",
        email: values.userid,
        passWord: values.password,
      };
      dispatch(getUserLogin(payload));
    },
  });

  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return <>Login</>;
};

export default Login;
