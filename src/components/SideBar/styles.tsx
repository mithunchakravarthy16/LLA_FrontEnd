import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: (props: any) => ({
    background: "blue",
  }),
  sideNavigation: (props: any) => ({
    "& .MuiDrawer-paper": {
      background: "blue",
      // borderRight: `1px solid ${props?.palette?.sidebar?.sideBarBorder}`,
      borderRight: "0 !important",
      borderRadius: "0px",
      padding: "22px 2px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "calc(100vh - 44px)",
    },
  }),
  menuLogoSection: () => ({
    marginBottom: 46,
    "& img": {
      width: 68,
    },
  }),
  menuIconSection: () => ({
    flex: 1,
  }),
  menuIconList: (props: any) => ({
    cursor: "pointer",
    position: "relative",
    width: "70px",
    height: " 85.7px",
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      cursor: "pointer",
      background: " rgba(15, 29, 106, 0.16)",
      borderRadius: "50px 53px 12px 3px",
      transform: "rotate(-89.97deg)",
      "& img": {
        transform: "rotate(89.97deg)",
      },
    },
  }),
  menuIconListActive: (props: any) => ({
    cursor: "pointer",
    position: "relative",
    width: "70px",
    height: " 85.7px",
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      filter:
        "invert(80%) sepia(64%) saturate(968%) hue-rotate(197deg) brightness(89%) contrast(95%)",
    },
    "&:hover": {
      cursor: "pointer",
    },
    "&::after": {
      content: `''`,
      position: "absolute",
      width: "86px",
      height: "139px",
      right: "-17px",
      top: "-31px",
      // backgroundImage: `url("${MenuShapes}")`,
      "clip-path":
        "polygon(79.052px 33.1124px, 79.052px 33.1124px, 81.0835862px 29.92312314px, 82.6702016px 26.52110272px, 83.8673114px 22.97595398px, 84.7303808px 19.35729216px, 85.314875px 15.7347325px, 85.6762592px 12.17789024px, 85.8699986px 8.75638062px, 85.9515584px 5.53981888px, 85.9764038px 2.59782026px, 86px 2.6673396824606E-15px, 86px 138.079px, 86px 138.079px, 86.001134px 138.17083px, 86.002016px 138.26272px, 86.002646px 138.35467px, 86.003024px 138.44668px, 86.00315px 138.53875px, 86.003024px 138.63088px, 86.002646px 138.72307px, 86.002016px 138.81532px, 86.001134px 138.90763px, 86px 139px, 86px 138.079px, 86px 138.079px, 85.8675321px 135.533646px, 85.5490768px 133.064288px, 85.0568567px 130.672882px, 84.4030944px 128.361384px, 83.6000125px 126.13175px, 82.6598336px 123.985936px, 81.5947803px 121.925898px, 80.4170752px 119.953592px, 79.1389409px 118.070974px, 77.7726px 116.28px, 77.7726px 116.28px, 74.1704298px 112.504372px, 70.1178264px 109.451936px, 65.6776206px 107.045964px, 60.9126432px 105.209728px, 55.885725px 103.8665px, 50.6596968px 102.939552px, 45.2973894px 102.352156px, 39.8616336px 102.027584px, 34.4152602px 101.889108px, 29.0211px 101.86px, 29.0211px 101.86px, 27.6959617px 101.856372px, 26.3675816px 101.839016px, 25.0394919px 101.798224px, 23.7152248px 101.724288px, 22.3983125px 101.6075px, 21.0922872px 101.438152px, 19.8006811px 101.206536px, 18.5270264px 100.902944px, 17.2748553px 100.517668px, 16.0477px 100.041px, 16.0477px 100.041px, 12.4039105115px 98.0675902px, 9.319914372px 95.6243216px, 6.7557910705px 92.8126554px, 4.671620096px 89.7340528px, 3.0274809375px 86.489975px, 1.783453084px 83.1818832px, 0.8996160245px 79.9112386px, 0.336049248px 76.7795024px, 0.0528322435px 73.8881358px, 0.0100445px 71.3386px, 0.0100445px 71.3386px, 1.0019182705px 65.1839874px, 2.818297824px 59.9185352px, 5.3059094735px 55.4826718px, 8.311479532px 51.8168256px, 11.6817343125px 48.861425px, 15.263400128px 46.5568984px, 18.9032032915px 44.8436742px, 22.447870116px 43.6621808px, 25.7441269145px 42.9528466px, 28.6387px 42.6561px, 46.2634px 42.6561px, 46.4136px 42.6561px, 46.4136px 42.6561px, 50.0286038px 42.646613px, 53.6983744px 42.579856px, 57.3731106px 42.398565px, 61.0030112px 42.045476px, 64.538275px 41.463325px, 67.9291008px 40.594848px, 71.1256874px 39.382781px, 74.0782336px 37.76986px, 76.7369382px 35.698821px, 79.052px 33.1124px) ",
      backgroundColor: "blue",
      zIndex: "-1",
    },
  }),
  customTooltip: () => ({
    background: "black !important",
  }),
});
export default useStyles;
