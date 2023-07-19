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
import { getUserLogout, setUserLogin } from "../../redux/actions/loginActions";
import {
  getAdminPanelConfig,
  setAdminPanelConfig,
} from "redux/actions/adminPanel";

const AdminPanel = () => {
  const adminPanelSaveData = useSelector(
    (state: any) => state?.adminPanel?.configData
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
  const [uploadFinalImageLogo, setUploadFinalImageLogo] = useState<string>("");
  const [colorChange, setColorChange] = useState<string>("#2D3748");
  const [footerTitle, setFooterTitle] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [uploadHeaderImageLogo, setUploadHeaderImageLogo] =
    useState<string>("");
  const [uploadHeaderFinalImageLogo, setUploadHeaderFinalImageLogo] =
    useState<string>("");
  const [uploadFavIconLogo, setUploadFavIconLogo] = useState<string>("");
  const [uploadFinalFavIconLogo, setUploadFinalFavIconLogo] =
    useState<string>("");
  const [uploadFooterLogo, setUploadFooterLogo] = useState<string>("");
  const [uploadFinalFooterLogo, setUploadFinalFooterLogo] =
    useState<string>("");
  const [uploadImageLogoLocal, setUploadImageLogoLocal] = useState<string>("");
  const [uploadFinalImageLogoLocal, setUploadFinalImageLogoLocal] =
    useState<string>("");
  const [uploadHeaderImageLogoLocal, setUploadHeaderImageLogoLocal] =
    useState<string>("");
  const [uploadFinalHeaderImageLogoLocal, setUploadFinalHeaderImageLogoLocal] =
    useState<string>("");
  const [uploadFavIconLogoLocal, setUploadFavIconLogoLocal] =
    useState<string>("");
  const [uploadFinalFavIconLogoLocal, setUploadFinalFavIconLogoLocal] =
    useState<string>("");
  const [uploadFooterLogoLocal, setUploadFooterLogoLocal] =
    useState<string>("");
  const [uploadFinalFooterLogoLocal, setUploadFinalFooterLogoLocal] =
    useState<string>("");
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
    dispatch(getUserLogout());
    dispatch(setUserLogin({}));
    navigate("/adminLogin");
  };
  useEffect(() => {
    setActivePage(0);
  }, []);

  useEffect(() => {
    if (adminPanelSaveData?.statusCodeValue === 200) {
      setSuccess(true);
      setTimeout(() => {
        setAdminPanelConfig({});
      }, 5000);
    }
  }, [adminPanelSaveData]);

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
    dispatch(getAdminPanelConfig(formData));
  };

  // success message
  const handleClose = () => {
    setSuccess(false);
  };

  // Logo Change
  const onLogoChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
  };

  const handleCancelClick = () => {
    setUploadImage(false);
    setUploadImageLogo("");
    setUploadImageLogoLocal("");
  };

  const handleSaveClick = () => {
    setUploadImage(false);
    setUploadFinalImageLogo(uploadImageLogo);
    setUploadFinalImageLogoLocal(uploadImageLogoLocal);

    const MAX_FILE_SIZE = 5120; // 5MB
    const fileSizeKiloBytes = uploadImageLogo?.size / 1024;

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      // setErrorMsg("File size is greater than maximum limit");
    }
  };

  const handleUploadChange = (event: any) => {
    const file = event.target.files[0];
    setUploadImageLogo(file);
    setUploadImageLogoLocal(URL.createObjectURL(event.target.files[0]));
  };

  const dropDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    setUploadImageLogo(files);
    setUploadImageLogoLocal(URL.createObjectURL(e.dataTransfer.files[0]));
  };

  // Header Change

  const headerChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
  };

  const handleHeaderCancelClick = () => {
    setUploadImage(false);
    setUploadHeaderImageLogo("");
    setUploadHeaderImageLogoLocal("");
  };

  const handleHeaderSaveClick = () => {
    setUploadImage(false);
    setUploadHeaderFinalImageLogo(uploadHeaderImageLogo);
    setUploadFinalHeaderImageLogoLocal(uploadHeaderImageLogoLocal);
  };

  const handleHeaderChange = (event: any) => {
    const file = event.target.files[0];
    setUploadHeaderImageLogo(file);
    setUploadHeaderImageLogoLocal(URL.createObjectURL(event.target.files[0]));
  };

  const dropDropHeader = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    setUploadHeaderImageLogo(files);
    setUploadHeaderImageLogoLocal(URL.createObjectURL(e.dataTransfer.files[0]));
  };

  // Fav Icon Change

  const onFavIconChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
  };

  const handleFavIconCancelClick = () => {
    setUploadImage(false);
    setUploadFavIconLogo("");
    setUploadFavIconLogoLocal("");
  };

  const handleFavIconSaveClick = () => {
    setUploadImage(false);
    setUploadFinalFavIconLogo(uploadFavIconLogo);
    setUploadFinalFavIconLogoLocal(uploadFavIconLogoLocal);
  };

  const handleFavIconChange = (event: any) => {
    const file = event.target.files[0];
    setUploadFavIconLogo(file);
    setUploadFavIconLogoLocal(URL.createObjectURL(event.target.files[0]));
  };

  const dropDropFavIcon = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    setUploadFavIconLogo(files);
    setUploadFavIconLogoLocal(URL.createObjectURL(e.dataTransfer.files[0]));
  };

  // Footer Change

  const onFooterChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
  };

  const handleFooterCancelClick = () => {
    setUploadImage(false);
    setUploadFooterLogo("");
    setUploadFooterLogoLocal("");
  };

  const handleFooterSaveClick = () => {
    setUploadImage(false);
    setUploadFinalFooterLogo(uploadFooterLogo);
    setUploadFinalFooterLogoLocal(uploadFooterLogoLocal);
  };

  const handleFooterChange = (event: any) => {
    const file = event.target.files[0];
    setUploadFooterLogo(file);
    setUploadFooterLogoLocal(URL.createObjectURL(event.target.files[0]));
  };

  const dropDropFooter = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    setUploadFooterLogo(files);
    setUploadFooterLogoLocal(URL.createObjectURL(e.dataTransfer.files[0]));
  };

  console.log("uploadImageLogo", uploadImageLogo);
  return (
    <>
      <Fragment>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={success}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Saved Successfully.
          </Alert>
        </Snackbar>
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
                      >
                        Preview
                      </Button>
                      <Button
                        variant="contained"
                        className={cancelButton}
                        disabled
                        style={{ textTransform: "none" }}
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
                          size 5 MB.
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
                              className={logoPreviewEmpty}
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
          />
        )}
      </Fragment>
    </>
  );
};

export default AdminPanel;
