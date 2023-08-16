/** @format */

import { useState, useEffect, Fragment } from "react";
import { Grid, Alert, Snackbar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme/theme";
import useStyles from "./styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import ColorPicker from "elements/ColorPicker";
import llaLogo from "../../assets/adminLogo.svg";
import ConfigIcon from "../../assets/configuration.svg";
import LightIcon from "../../assets/lightIcon.svg";
import DarkIcon from "../../assets/darkIcon.svg";
import Button from "@mui/material/Button";
import TextField from "elements/TextField";
import DefaultLogo from "../../assets/defaultLogo.svg";
import logoutImg from "../../assets/login/logout.svg";
import InfoDialogFileUpload from "components/InfoDialogFileUpload";
import FavIcon from "../../assets/favIcon.svg";
import {
  getAdminUserLogout,
  setAdminUserLogin,
} from "../../redux/actions/adminLoginActions";
import {
  getAdminPanelConfig,
  setAdminPanelConfig,
  getAdminPanelConfigData,
  getAdminPanelCancelConfigData,
  setAdminPanelCancelConfigData,
} from "redux/actions/adminPanel";

const AdminPanel = () => {
  const adminPanelSaveData = useSelector(
    (state: any) => state?.adminPanel?.configData
  );

  const adminPanelData = useSelector(
    (state: any) => state?.adminPanel?.getConfigData?.data?.body
  );

  const adminPanelCancelData = useSelector(
    (state: any) => state?.adminPanel?.CancelConfigData
  );

  const dispatch = useDispatch();

  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [selectTheme, setSelectTheme] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [selectRadio, setSelectRadio] = useState<any>("");
  const [uploadImage, setUploadImage] = useState<boolean>(false);
  const [uploadImageTitle, setUploadImageTitle] = useState<string>("");
  const [uploadImageLogo, setUploadImageLogo] = useState<any>();
  const [uploadFinalImageLogo, setUploadFinalImageLogo] = useState<any>();
  const [colorChange, setColorChange] = useState<string>("#2D3748");
  const [footerTitle, setFooterTitle] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [uploadHeaderImageLogo, setUploadHeaderImageLogo] = useState<any>();
  const [uploadHeaderFinalImageLogo, setUploadHeaderFinalImageLogo] =
    useState<any>();
  const [uploadFavIconLogo, setUploadFavIconLogo] = useState<any>();
  const [uploadFinalFavIconLogo, setUploadFinalFavIconLogo] = useState<any>();
  const [uploadFooterLogo, setUploadFooterLogo] = useState<any>();
  const [uploadFinalFooterLogo, setUploadFinalFooterLogo] = useState<any>();
  const [uploadImageLogoLocal, setUploadImageLogoLocal] = useState<any>();
  const [uploadFinalImageLogoLocal, setUploadFinalImageLogoLocal] =
    useState<any>();
  const [uploadHeaderImageLogoLocal, setUploadHeaderImageLogoLocal] =
    useState<any>();
  const [uploadFinalHeaderImageLogoLocal, setUploadFinalHeaderImageLogoLocal] =
    useState<any>();
  const [uploadFavIconLogoLocal, setUploadFavIconLogoLocal] = useState<any>();
  const [uploadFinalFavIconLogoLocal, setUploadFinalFavIconLogoLocal] =
    useState<any>();
  const [uploadFooterLogoLocal, setUploadFooterLogoLocal] = useState<any>();
  const [uploadFinalFooterLogoLocal, setUploadFinalFooterLogoLocal] =
    useState<any>();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [uploadImageLogoTemp, setUploadImageLogoTemp] = useState<any>();
  const [uploadHeaderImageLogoTemp, setUploadHeaderImageLogoTemp] =
    useState<any>();
  const [uploadFavIconLogoTemp, setUploadFavIconLogoTemp] = useState<any>();
  const [uploadFooterLogoTemp, setUploadFooterLogoTemp] = useState<any>();
  const [isReset, setIsReset] = useState<boolean>(false);
  const {} = useStyles(appTheme);

  const {
    adminContentPanel,
    adminLeftPanel,
    adminRightPanel,
    menuItemList,
    menuItemListActive,
    adminRightPanelHeader,
    previewButton,
    adminHeaderButtonSection,
    updateButton,
    colorSchemeHeading,
    innerPanel,
    backgroundColor,
    radioButtonHeader,
    adminRightPanelBody,
    adminRightPanelBackgroundColor,
    customSelects,
    adminPlusIconClass,
    colorPickerItem,
    radioButton,
    adminLogo,
    adminLeftPanelContainer,
    fileUploadContent,
    logoPreviewWrapper,
    logoPreviewInnercontainer,
    logoPreview,
    cancelButton,
    menuIconSection,
    appearanceText,
    appearanceSection,
    imageAppearance,
    appearanceTitle,
    appearanceSite,
    customTextField,
    logoText,
    logoExtension,
    appearanceSectionCustom,
    colorPickerSection,
    colorPickerText,
    colorPickerList,
    customTextField2,
    adminDashboard,
    spaceBottom,
    space,
    logoutSection,
    logoPreviewEmpty,
    logoPreviewFilled,
  } = useStyles();
  const [activePage, setActivePage] = useState<any>();
  const handleClick = (event: any, id: any) => {
    setActivePage(id);
  };
  const menuItems = [
    { name: "Configuration", id: 0, icon: ConfigIcon },
    // { name: "Logo", id: 1 },
    // { name: "Users", id: 2 },
    // { name: "Font Family", id: 3 },
    // { name: "Components", id: 4 },
  ];
  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    dispatch(getAdminUserLogout());
    dispatch(setAdminUserLogin({}));
    navigate("/adminLogin");
  };
  useEffect(() => {
    setActivePage(0);
  }, []);

  useEffect(() => {
    dispatch(getAdminPanelConfigData({ isPreview: "N", isDefault: "N" }));
    setSuccess(false);
  }, []);

  useEffect(() => {
    setSelectTheme(adminPanelData?.appearance);
    setTitle(adminPanelData?.siteTitle);
    setFooterTitle(adminPanelData?.footerText);
    setColorChange(adminPanelData?.footerColor);
    setSelectRadio(adminPanelData?.footerImage ? "image" : "text");
    if (isReset && adminPanelData?.isPreview === "N") {
      setSuccess(true);
    }
  }, [adminPanelData]);

  useEffect(() => {
    if (adminPanelSaveData?.statusCodeValue === 200) {
      setSuccess(true);
      if (adminPanelSaveData?.body?.isPreview === "Y") {
        window.open(`${window.origin}/login`, "_blank");
      }
      setTimeout(() => {
        dispatch(setAdminPanelConfig({}));
        setSuccess(false);
      }, 3000);
    } else if (adminPanelSaveData?.statusCodeValue === 400) {
      setSuccess(true);
    }
  }, [adminPanelSaveData]);

  useEffect(() => {
    if (adminPanelCancelData?.iscancel) {
      setSuccess(true);
      setTimeout(() => {
        dispatch(setAdminPanelCancelConfigData({}));
        setSuccess(false);
      }, 3000);
    }
  }, [adminPanelCancelData]);

  const radioButtons = [
    {
      label: "Light",
      value: "light",
      icon: LightIcon,
    },
    {
      label: "Dark",
      value: "default",
      icon: DarkIcon,
    },
  ];

  // Theme Change
  const handleChange = (event: any) => {
    setSelectTheme(event.target.value);
  };

  // Title Change
  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  // Footer Change
  const handleRadioChange = (event: any) => {
    setSelectRadio(event.target.value);
    setFooterTitle("");
    setUploadFooterLogo("");
    setUploadFinalFooterLogo("");
    setColorChange("");
    setUploadFinalFooterLogoLocal("");
  };

  // Footer Color Change
  const onFooterTextColorChange = (evt: any) => {
    setColorChange(evt.target.value);
  };

  // Footer title change
  const handleFooterTitleChange = (e: any) => {
    setFooterTitle(e.target.value);
  };

  // Save
  const handleSave = () => {
    const formData = new FormData();
    formData.append("appearance", selectTheme);
    formData.append("siteTitle", title);
    formData.append("login", uploadFinalImageLogo);
    formData.append("header", uploadHeaderFinalImageLogo);
    formData.append("favIcon", uploadFinalFavIconLogo);
    formData.append("footer", uploadFinalFooterLogo);
    formData.append("footerText", footerTitle);
    formData.append("footerColor", colorChange);
    formData.append("isPreview", "N");
    formData.append("isDefault", "N");
    dispatch(getAdminPanelConfig(formData));
    setSuccess(false);
  };

  // success message
  const handleClose = () => {
    setSuccess(false);
  };

  // Logo Change
  const onLogoChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
    setUploadImageLogoTemp("");
  };

  const handleCancelClick = () => {
    setUploadImage(false);
    setUploadImageLogo("");
    setUploadImageLogoLocal("");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleSaveClick = () => {
    if (!uploadImageLogoTemp) {
      setErrorMsg("Upload Image");
      setSuccessMsg("");
    } else {
      setUploadImage(false);
      setUploadFinalImageLogo(uploadImageLogo);
      setUploadFinalImageLogoLocal(uploadImageLogoLocal);
      setErrorMsg("");
      setSuccessMsg("");
    }
  };

  const handleUploadChange = (event: any) => {
    const file = event.target.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = file?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadImageLogo(file);
      setUploadImageLogoLocal(URL.createObjectURL(event.target.files[0]));
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadImageLogoTemp(
        event.target.files[0] ? event.target.files[0] : ""
      );
    }
  };

  const dropDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = files?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadImageLogo(files);
      setUploadImageLogoLocal(URL.createObjectURL(e.dataTransfer.files[0]));
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadImageLogoTemp(
        e.dataTransfer.files[0] ? e.dataTransfer.files[0] : ""
      );
    }
  };

  // Header Change

  const headerChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
    setUploadHeaderImageLogoTemp("");
  };

  const handleHeaderCancelClick = () => {
    setUploadImage(false);
    setUploadHeaderImageLogo("");
    setUploadHeaderImageLogoLocal("");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleHeaderSaveClick = () => {
    if (!uploadHeaderImageLogoTemp) {
      setErrorMsg("Upload Image");
      setSuccessMsg("");
    } else {
      setUploadImage(false);
      setUploadHeaderFinalImageLogo(uploadHeaderImageLogo);
      setUploadFinalHeaderImageLogoLocal(uploadHeaderImageLogoLocal);
      setErrorMsg("");
      setSuccessMsg("");
    }
  };

  const handleHeaderChange = (event: any) => {
    const file = event.target.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = file?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadHeaderImageLogo(file);
      setUploadHeaderImageLogoLocal(URL.createObjectURL(event.target.files[0]));
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadHeaderImageLogoTemp(
        event.target.files[0] ? event.target.files[0] : ""
      );
    }
  };

  const dropDropHeader = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = files?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadHeaderImageLogo(files);
      setUploadHeaderImageLogoLocal(
        URL.createObjectURL(e.dataTransfer.files[0])
      );
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadHeaderImageLogoTemp(
        e.dataTransfer.files[0] ? e.dataTransfer.files[0] : ""
      );
    }
  };

  // Fav Icon Change

  const onFavIconChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
    setUploadFavIconLogoTemp("");
  };

  const handleFavIconCancelClick = () => {
    setUploadImage(false);
    setUploadFavIconLogo("");
    setUploadFavIconLogoLocal("");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleFavIconSaveClick = () => {
    if (!uploadFavIconLogoTemp) {
      setErrorMsg("Upload Image");
      setSuccessMsg("");
    } else {
      setUploadImage(false);
      setUploadFinalFavIconLogo(uploadFavIconLogo);
      setUploadFinalFavIconLogoLocal(uploadFavIconLogoLocal);
      setErrorMsg("");
      setSuccessMsg("");
    }
  };

  const handleFavIconChange = (event: any) => {
    const file = event.target.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = file?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadFavIconLogo(file);
      setUploadFavIconLogoLocal(URL.createObjectURL(event.target.files[0]));
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadFavIconLogoTemp(
        event.target.files[0] ? event.target.files[0] : ""
      );
    }
  };

  const dropDropFavIcon = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = files?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadFavIconLogo(files);
      setUploadFavIconLogoLocal(URL.createObjectURL(e.dataTransfer.files[0]));
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadFavIconLogoTemp(
        e.dataTransfer.files[0] ? e.dataTransfer.files[0] : ""
      );
    }
  };

  // Footer Change

  const onFooterChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
    setUploadFooterLogoTemp("");
  };

  const handleFooterCancelClick = () => {
    setUploadImage(false);
    setUploadFooterLogo("");
    setUploadFooterLogoLocal("");
    setErrorMsg("");
    setSuccessMsg("");
  };

  const handleFooterSaveClick = () => {
    if (!uploadFooterLogoTemp) {
      setErrorMsg("Upload Image");
      setSuccessMsg("");
    } else {
      setUploadImage(false);
      setUploadFinalFooterLogo(uploadFooterLogo);
      setUploadFinalFooterLogoLocal(uploadFooterLogoLocal);
      setErrorMsg("");
      setSuccessMsg("");
    }
  };

  const handleFooterChange = (event: any) => {
    const file = event.target.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = file?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadFooterLogo(file);
      setUploadFooterLogoLocal(URL.createObjectURL(event.target.files[0]));
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadFooterLogoTemp(
        event.target.files[0] ? event.target.files[0] : ""
      );
    }
  };

  const dropDropFooter = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    const MAX_FILE_SIZE = 1024; // 1MB
    const fileSizeKiloBytes = files?.size / 1024;
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMsg("File size is greater than 1MB");
    } else {
      setUploadFooterLogo(files);
      setUploadFooterLogoLocal(URL.createObjectURL(e.dataTransfer.files[0]));
      setSuccessMsg("Uploaded Image Successfully.");
      setErrorMsg("");
      setUploadFooterLogoTemp(
        e.dataTransfer.files[0] ? e.dataTransfer.files[0] : ""
      );
    }
  };

  // Preview Functionality

  const handlePreview = () => {
    const formData = new FormData();
    formData.append("appearance", selectTheme);
    formData.append("siteTitle", title);
    formData.append("login", uploadFinalImageLogo);
    formData.append("header", uploadHeaderFinalImageLogo);
    formData.append("favIcon", uploadFinalFavIconLogo);
    formData.append("footer", uploadFinalFooterLogo);
    formData.append("footerText", footerTitle);
    formData.append("footerColor", colorChange);
    formData.append("isPreview", "Y");
    formData.append("isDefault", "N");
    dispatch(getAdminPanelConfig(formData));
    setSuccess(false);
  };

  const handleCancel = () => {
    dispatch(getAdminPanelCancelConfigData({}));
    dispatch(getAdminPanelConfigData({ isPreview: "N", isDefault: "N" }));
    setUploadFinalImageLogo("");
    setUploadFinalImageLogoLocal("");
    setUploadHeaderFinalImageLogo("");
    setUploadFinalHeaderImageLogoLocal("");
    setUploadFinalFavIconLogo("");
    setUploadFinalFavIconLogoLocal("");
    setUploadFinalFooterLogo("");
    setUploadFooterLogoLocal("");
    setSuccess(false);
  };

  const handleReset = () => {
    dispatch(getAdminPanelConfigData({ isPreview: "N", isDefault: "Y" }));
    setIsReset(true);
  };

  return (
    <>
      <Fragment>
        {success && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={success}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity={
                adminPanelSaveData?.statusCodeValue === 400
                  ? "error"
                  : "success"
              }
              sx={{ width: "100%" }}
            >
              {adminPanelSaveData?.statusCodeValue === 400
                ? "Something went wrong... Please try again later"
                : adminPanelSaveData?.statusCodeValue === 200 &&
                  adminPanelSaveData?.body?.isPreview === "Y"
                ? "Preview Loaded Successfully in New Tab."
                : adminPanelCancelData?.iscancel
                ? "Cancelled Successfully."
                : adminPanelSaveData?.statusCodeValue === 200 &&
                  adminPanelSaveData?.body?.isPreview === "N"
                ? "Saved Successfully."
                : adminPanelData?.isPreview === "N" && "Reset Successfully."}
            </Alert>
          </Snackbar>
        )}
        <Grid container className={adminContentPanel}>
          <Grid item xs={12} sm={12} md={1.4} lg={1.4} xl={1.4}>
            <div className={adminLeftPanelContainer}>
              <div className={adminLogo}>
                <img src={llaLogo} />
              </div>
              <div className={adminLeftPanel}>
                {menuItems &&
                  menuItems.length > 0 &&
                  menuItems.map((menu: any, index: any) => {
                    return (
                      <div style={{ display: "flex" }}>
                        <p>
                          <img src={menu?.icon} className={menuIconSection} />
                        </p>
                        <p
                          key={index}
                          className={
                            activePage === menu.id
                              ? menuItemListActive
                              : menuItemList
                          }
                          onClick={(event) => handleClick(event, menu.id)}
                        >
                          {menu.name}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <div className={logoutSection} onClick={handleCloseUserMenu}>
                <img src={logoutImg} />
                <p>Logout</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={10.6} lg={10.6} xl={10.6}>
            <div className={adminRightPanel}>
              <div className={innerPanel}>
                <Grid container className={adminRightPanelHeader}>
                  <Grid item xs={6}>
                    <p className={colorSchemeHeading}>Theme Color</p>
                  </Grid>
                  <Grid item xs={6}>
                    <div className={adminHeaderButtonSection}>
                      <Button
                        variant="outlined"
                        className={previewButton}
                        style={{ textTransform: "none" }}
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                      <Button
                        variant="outlined"
                        className={previewButton}
                        style={{ textTransform: "none" }}
                        onClick={handlePreview}
                      >
                        Preview
                      </Button>
                      <Button
                        variant="outlined"
                        className={previewButton}
                        style={{ textTransform: "none" }}
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        className={updateButton}
                        onClick={handleSave}
                        style={{ textTransform: "none" }}
                      >
                        Save
                      </Button>
                    </div>
                  </Grid>
                </Grid>
                <div className={adminDashboard}>
                  <Grid
                    container
                    borderBottom={"1px solid #00000020"}
                    className={spaceBottom}
                  >
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <div>
                        <div className={appearanceText}>Appearance</div>
                        <div>
                          <FormControl>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                              value={selectTheme}
                              onChange={handleChange}
                            >
                              {radioButtons?.map((item: any) => {
                                return (
                                  <div className={appearanceSection}>
                                    <img
                                      src={item?.icon}
                                      className={imageAppearance}
                                    />
                                    <FormControlLabel
                                      value={item?.value}
                                      control={<Radio />}
                                      label={item?.label}
                                    />
                                  </div>
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                      <div>
                        <div className={appearanceTitle}>Title</div>
                        <div className={appearanceSite}>Site Title</div>
                        <div className={customTextField}>
                          <TextField
                            fullWidth
                            value={title}
                            type={"text"}
                            onChange={handleTitleChange}
                            placeholder={"Enter Title"}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container className={space}>
                    <Grid item xs={12}>
                      <div>
                        <div className={logoText}>Logo</div>
                        <div className={logoExtension}>
                          Allowed file extension * (.jpeg, .png, .svg). Max file
                          size 1 MB.
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    borderBottom={"1px solid #00000020"}
                    className={spaceBottom}
                  >
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className={appearanceText}>Login</div>
                      <div className={fileUploadContent}>
                        <div className={logoPreviewWrapper}>
                          <div className={logoPreviewInnercontainer}>
                            <img
                              className={logoPreview}
                              src={
                                uploadFinalImageLogoLocal
                                  ? uploadFinalImageLogoLocal
                                  : DefaultLogo
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <Button
                            style={{ textTransform: "none" }}
                            variant="contained"
                            className={updateButton}
                            onClick={() => onLogoChange("Login")}
                          >
                            Change
                          </Button>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className={appearanceText}>Header</div>
                      <div className={fileUploadContent}>
                        <div className={logoPreviewWrapper}>
                          <div className={logoPreviewInnercontainer}>
                            <img
                              className={logoPreview}
                              src={
                                uploadFinalHeaderImageLogoLocal
                                  ? uploadFinalHeaderImageLogoLocal
                                  : DefaultLogo
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <Button
                            style={{ textTransform: "none" }}
                            variant="contained"
                            className={updateButton}
                            onClick={() => headerChange("Header")}
                          >
                            Change
                          </Button>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className={appearanceText}>Fav Icon</div>
                      <div className={fileUploadContent}>
                        <div className={logoPreviewWrapper}>
                          <div className={logoPreviewInnercontainer}>
                            <img
                              className={
                                uploadFinalFavIconLogoLocal
                                  ? logoPreviewFilled
                                  : logoPreviewEmpty
                              }
                              src={
                                uploadFinalFavIconLogoLocal
                                  ? uploadFinalFavIconLogoLocal
                                  : FavIcon
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <Button
                            style={{ textTransform: "none" }}
                            variant="contained"
                            className={updateButton}
                            onClick={() => onFavIconChange("Fav Icon")}
                          >
                            Change
                          </Button>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <div className={appearanceText}>Footer</div>
                      <div>
                        <FormControl>
                          <RadioGroup
                            className={appearanceSectionCustom}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            value={selectRadio}
                            onChange={handleRadioChange}
                          >
                            <FormControlLabel
                              value={"image"}
                              control={<Radio />}
                              label={"Image"}
                            />
                            <FormControlLabel
                              value={"text"}
                              control={<Radio />}
                              label={"Text"}
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                      {selectRadio === "image" && (
                        <div className={fileUploadContent}>
                          <div className={logoPreviewWrapper}>
                            <div className={logoPreviewInnercontainer}>
                              <img
                                className={logoPreview}
                                src={
                                  uploadFinalFooterLogoLocal
                                    ? uploadFinalFooterLogoLocal
                                    : DefaultLogo
                                }
                              />
                            </div>
                          </div>
                          <div>
                            <Button
                              style={{ textTransform: "none" }}
                              variant="contained"
                              className={updateButton}
                              onClick={() => onFooterChange("Footer")}
                            >
                              Upload
                            </Button>
                          </div>
                        </div>
                      )}
                      {selectRadio === "text" && (
                        <div className={colorPickerSection}>
                          <div className={colorPickerText}>
                            <div className={colorPickerList}>Enter Text</div>
                            <div className={customTextField2}>
                              <TextField
                                value={footerTitle}
                                type={"text"}
                                onChange={handleFooterTitleChange}
                                placeholder={"Enter Title"}
                              />
                            </div>
                          </div>
                          <div>
                            <div className={colorPickerList}>
                              Change Text Color
                            </div>
                            <div className={colorPickerItem}>
                              <ColorPicker
                                onChange={onFooterTextColorChange}
                                value={colorChange}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        {uploadImage && (
          <InfoDialogFileUpload
            uploadImage={uploadImage}
            uploadImageTitle={uploadImageTitle}
            handleCancelClick={handleCancelClick}
            handleSaveClick={handleSaveClick}
            handleChange={handleUploadChange}
            dropDrop={dropDrop}
            handleHeaderCancelClick={handleHeaderCancelClick}
            handleHeaderSaveClick={handleHeaderSaveClick}
            handleHeaderChange={handleHeaderChange}
            dropDropHeader={dropDropHeader}
            handleFavIconCancelClick={handleFavIconCancelClick}
            handleFavIconSaveClick={handleFavIconSaveClick}
            handleFavIconChange={handleFavIconChange}
            dropDropFavIcon={dropDropFavIcon}
            handleFooterCancelClick={handleFooterCancelClick}
            handleFooterSaveClick={handleFooterSaveClick}
            handleFooterChange={handleFooterChange}
            dropDropFooter={dropDropFooter}
            errorMsg={errorMsg}
            successMsg={successMsg}
          />
        )}
      </Fragment>
    </>
  );
};

export default AdminPanel;
