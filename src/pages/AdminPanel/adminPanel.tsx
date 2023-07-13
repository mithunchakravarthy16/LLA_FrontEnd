/** @format */

import { useState, useEffect, Fragment } from "react";
import { Grid } from "@mui/material";
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
import InfoDialogFileUpload from "components/InfoDialogFileUpload";

const AdminPanel = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [selectTheme, setSelectTheme] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [selectRadio, setSelectRadio] = useState<any>("");
  const [uploadImage, setUploadImage] = useState<boolean>(false);
  const [uploadImageTitle, setUploadImageTitle] = useState<string>("");
  const [uploadImageLogo, setUploadImageLogo] = useState<string>("");
  const [uploadFinalImageLogo, setUploadFinalImageLogo] = useState<string>("");
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
  useEffect(() => {
    setActivePage(0);
  }, []);

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

  const handleChange = (event: any) => {
    setSelectTheme(event.target.value);
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleRadioChange = (event: any) => {
    setSelectRadio(event.target.value);
  };

  const onFooterTextColorChange = (evt: any) => {};

  const onLogoChange = (value: string) => {
    setUploadImage(true);
    setUploadImageTitle(value);
  };

  const handleSave = () => {
    const payload = {
      theme: selectTheme,
      title: title,
    };

    localStorage.setItem("theme", JSON.stringify(selectTheme));
  };

  const handleCancelClick = () => {
    setUploadImage(false);
    setUploadImageLogo("");
  };

  const handleSaveClick = () => {
    setUploadImage(false);
    setUploadFinalImageLogo(uploadImageLogo);
  };

  const handleUploadChange = (event: any) => {
    const file = event.target.files[0];
    setUploadImageLogo(URL.createObjectURL(event.target.files[0]));
  };

  const fileDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files[0];
    setUploadImageLogo(URL.createObjectURL(e.dataTransfer.files[0]));
  };

  const onHeaderChange = (value: string) => {
    // setUploadImage(true);
    // setUploadImageTitle(value);
  };

  const onFavIconChange = (value: string) => {
    // setUploadImage(true);
    // setUploadImageTitle(value);
  };

  return (
    <>
      <Fragment>
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
                            <img className={logoPreview} src={DefaultLogo} />
                          </div>
                        </div>
                        <div>
                          <Button
                            style={{ textTransform: "none" }}
                            variant="contained"
                            className={updateButton}
                            // onClick={() => onLogoChange("header")}
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
                            <img className={logoPreview} src={DefaultLogo} />
                          </div>
                        </div>
                        <div>
                          <Button
                            style={{ textTransform: "none" }}
                            variant="contained"
                            className={updateButton}
                            // onClick={() => onLogoChange("header")}
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
                            <img className={logoPreview} src={DefaultLogo} />
                          </div>
                        </div>
                        <div>
                          <Button
                            style={{ textTransform: "none" }}
                            variant="contained"
                            className={updateButton}
                            // onClick={() => onLogoChange("header")}
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
                              <img className={logoPreview} src={DefaultLogo} />
                            </div>
                          </div>
                          <div>
                            <Button
                              style={{ textTransform: "none" }}
                              variant="contained"
                              className={updateButton}
                              // onClick={() => onLogoChange("header")}
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
                                value={title}
                                type={"text"}
                                onChange={handleTitleChange}
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
                                value={"#2D3748"}
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
            fileDrop={fileDrop}
          />
        )}
      </Fragment>
    </>
  );
};

export default AdminPanel;
