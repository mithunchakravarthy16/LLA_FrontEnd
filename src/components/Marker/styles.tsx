import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

export const RootContainer = styled("div")<{ movingMarker?: boolean }>`
  position: relative;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
  .RCP {
    width: 70px !important;
  }

  svg {
    width: 70px;
    height: 70px;
  }
`;

export const MarkerImage = styled("img")<{ angle: string }>`
  width: 160px;
  height: 160px;
  position: absolute;
  z-index: 1000;
  transform: translate(50%, -160%) rotate(${(props) => props.angle});
`;

const useStyles = makeStyles({});
export default useStyles;
