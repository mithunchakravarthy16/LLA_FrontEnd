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

const AdminPanel = () => {
  const [selectedTheme, setSelectedTheme] = useState(
    JSON.parse(localStorage.getItem("theme")!)
  );
  const [appTheme, setAppTheme] = useState(theme?.defaultTheme);
  const [selectTheme, setSelectTheme] = useState<any>("");
  const [title, setTitle] = useState<any>("");
  const [selectRadio, setSelectRadio] = useState<any>("");
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

  const handleSave = () => {
    const payload = {
      theme: selectTheme,
      title: title,
    };

    localStorage.setItem("theme", JSON.stringify(selectTheme));
  };

  return (
    <>
      <Fragment>
        <Grid container className={adminContentPanel}>
          <Grid item xs={12} sm={12} md={1.5} lg={1.5} xl={1.5}>
            <div className={adminLeftPanelContainer}>
              <div className={adminLogo}>
                <img src={llaLogo} width={"80%"} />
              </div>
              <div className={adminLeftPanel}>
                {menuItems &&
                  menuItems.length > 0 &&
                  menuItems.map((menu: any, index: any) => {
                    return (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p>
                          <img src={menu?.icon} />
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
          <Grid item xs={12} sm={12} md={10.5} lg={10.5} xl={10.5}>
            <div className={adminRightPanel}>
              <div className={innerPanel}>
                <Grid container className={adminRightPanelHeader}>
                  <Grid item xs={6}>
                    <p className={colorSchemeHeading}>Theme Color</p>
                  </Grid>
                  <Grid item xs={6} className={adminHeaderButtonSection}>
                    <Button variant="outlined" className={previewButton}>
                      Preview
                    </Button>
                    <Button variant="contained" className={""} disabled>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      className={updateButton}
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
                <Grid container borderBottom={"1px solid #00000020"}>
                  <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <div style={{ padding: "30px 0 30px 20px" }}>
                      <div>Appearance</div>
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
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    paddingRight: "30px",
                                    paddingTop: "30px",
                                  }}
                                >
                                  <img src={item?.icon} />
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
                    <div style={{ padding: "30px 0 30px 0px" }}>
                      <div>Title</div>
                      <div
                        style={{ paddingTop: "50px", paddingBottom: "20px" }}
                      >
                        Site Title
                      </div>
                      <div>
                        <TextField
                          value={title}
                          type={"text"}
                          onChange={handleTitleChange}
                          placeholder={"Enter Title"}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <div style={{ padding: "30px 0 30px 20px" }}>
                  <div>Logo</div>
                  <div>
                    Allowed file extension * (.jpeg, .png, .svg). Max file size
                    5 MB.
                  </div>
                </div>
                <Grid container borderBottom={"1px solid #00000020"}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ padding: "30px 0 20px 20px" }}
                  >
                    <div>Login</div>
                    <div className={fileUploadContent}>
                      <div className={logoPreviewWrapper}>
                        <div className={logoPreviewInnercontainer}>
                          <img className={logoPreview} src={DefaultLogo} />
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        className={updateButton}
                        // onClick={() => onLogoChange("header")}
                      >
                        Change
                      </Button>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ padding: "30px 0 20px 20px" }}
                  >
                    <div>Header</div>
                    <div className={fileUploadContent}>
                      <div className={logoPreviewWrapper}>
                        <div className={logoPreviewInnercontainer}>
                          <img className={logoPreview} src={DefaultLogo} />
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        className={updateButton}
                        // onClick={() => onLogoChange("header")}
                      >
                        Change
                      </Button>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ padding: "30px 0 20px 20px" }}
                  >
                    <div>Fav Icon</div>
                    <div className={fileUploadContent}>
                      <div className={logoPreviewWrapper}>
                        <div className={logoPreviewInnercontainer}>
                          <img className={logoPreview} src={DefaultLogo} />
                        </div>
                      </div>
                      <Button
                        variant="contained"
                        className={updateButton}
                        // onClick={() => onLogoChange("header")}
                      >
                        Change
                      </Button>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ padding: "30px 0 20px 20px" }}
                  >
                    <div>Footer</div>
                    <div>
                      <FormControl>
                        <RadioGroup
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
                        <Button
                          variant="contained"
                          className={updateButton}
                          // onClick={() => onLogoChange("header")}
                        >
                          Upload
                        </Button>
                      </div>
                    )}
                    {selectRadio === "text" && (
                      <div style={{ display: "flex" }}>
                        <div style={{ paddingRight: "50px" }}>
                          <div style={{ paddingBottom: "10px" }}>
                            Enter Text
                          </div>
                          <div>
                            <TextField
                              value={title}
                              type={"text"}
                              onChange={handleTitleChange}
                              placeholder={"Enter Title"}
                            />
                          </div>
                        </div>
                        <div>
                          <div style={{ paddingBottom: "10px" }}>
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
          </Grid>
        </Grid>
      </Fragment>
    </>
  );
};

export default AdminPanel;
