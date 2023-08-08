/** @format */

import { styled } from "@mui/material/styles";
import { a } from "@react-spring/web";
import theme from "../../theme/theme";

let currentTheme: any = {};

export const setTheme = (themeFromApi: any) => {
  switch (themeFromApi) {
    case "light":
      currentTheme = theme?.lightTheme;
      break;
    case "dark":
      currentTheme = theme?.darkTheme;
      break;
    default:
      currentTheme = theme?.defaultTheme;
      break;
  }
};

export const Wrapper = styled("div")`
  position: absolute;
  bottom: 100px;
  left: 220px;
  right: 220px;
  width: calc(100vw - 300px);
  display: flex;
  @media (max-width: 3841px) {
    left: 290px;
    bottom: 154px;
  }
  @media (max-width: 3073px) {
    left: 250px;
    bottom: 130px;
  }
  @media (max-width: 2561px) {
    left: 274px;
    bottom: 78px;
  }
  @media (max-width: 2049px) {
    left: 202px;
    bottom: 66px;
  }
  @media (max-width: 1921px) {
    left: 180px;
    bottom: 80px;
  }
  @media (max-width: 1793px) {
    left: 180px;
    bottom: 70px;
  }
  @media (max-width: 1681px) {
    left: 150px;
    bottom: 90px;
  }
  @media (max-width: 1536px) {
    left: 150px;
    bottom: 60px;
  }
  @media (max-width: 1345px) {
    left: 150px;
    bottom: 60px;
  }
  @media (max-width: 1153px) {
    left: 137px;
    bottom: 50px;
  }
  @media (max-width: 1025px) {
    left: 122px;
    bottom: 70px;
  }
`;

export const RootContainer = styled("div")`
  min-width: 560px;
  height: 330px;
  position: relative;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 3073px) {
    min-width: 440px;
    height: 330px;
  }
  @media (max-width: 2921px) {
    min-width: 260px;
    height: 186px;
  }
  @media (max-width: 2561px) {
    min-width: 350px;
    height: 300px;
  }
  @media (max-width: 2049px) {
    min-width: 280px;
    height: 210px;
  }
  @media (max-width: 1921px) {
    min-width: 260px;
    height: 200px;
  }
  @media (max-width: 1793px) {
    min-width: 240px;
    height: 186px;
  }
  @media (max-width: 1681px) {
    min-width: 236px;
    height: 186px;
    margin-right: 14px;
  }
  @media (max-width: 1601px) {
    min-width: 220px;
    height: 186px;
    margin-right: 14px;
  }
  @media (max-width: 1537px) {
    min-width: 213px;
    height: 186px;
    margin-right: 12px;
  }
  @media (max-width: 1441px) {
    min-width: 190px;
    height: 186px;
    margin-right: 12px;
  }
  @media (max-width: 1367px) {
    min-width: 185px;
    height: 186px;
    margin-right: 12px;
  }
  @media (max-width: 1345px) {
    min-width: 180px;
    height: 186px;
    margin-right: 12px;
  }
  @media (max-width: 1281px) {
    min-width: 170px;
    height: 170px;
    margin-right: 12px;
  }
  @media (max-width: 1153px) {
    min-width: 150px;
    height: 150px;
  }
  @media (max-width: 1025px) {
    min-width: 130px;
    height: 130px;
  }
`;

export const SkewContainer = styled(a.div)<{ isFocused?: boolean }>`
  background: ${({ isFocused }) =>
    isFocused
      ? currentTheme?.palette?.flippingCard.hoverBackground
      : currentTheme?.palette?.flippingCard.background};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: ${currentTheme?.palette?.flippingCard?.hoverBackground};
  }
`;

export const SkewBackContainer = styled(SkewContainer)`
  &:hover {
    background-color: ${currentTheme?.palette?.flippingCard?.hoverBackground};
  }
  background: linear-gradient(243.97deg, #cd5209 10.07%, #c8151d 112.41%);
`;

export const ContentContainer = styled(a.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardImage = styled("img")`
  width: 140px;
  height: auto;
  margin: 10px;
  margin-left: 2vw;
  @media (max-width: 3073px) {
    width: 110px;
  }
  @media (max-width: 2049px) {
    width: 75px;
  }
  @media (max-width: 1793px) {
    width: 60px;
  }
  @media (max-width: 1681px) {
    width: 60px;
  }
  @media (max-width: 1537px) {
    width: 50px;
  }
  @media (max-width: 1441px) {
    width: 50px;
  }
  @media (max-width: 1345px) {
    width: 50px;
  }
  @media (max-width: 1281px) {
    width: 50px;
  }
  @media (max-width: 1153px) {
    width: 50px;
  }
`;

export const InnerCardWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 2vw;
`;

export const CardTitle = styled("div")<{ focusedCategory: any }>`
  font-family: "HelveticaNeue-Regular";
  font-style: normal;
  font-size: 35px;
  line-height: 48px;
  color: ${({ focusedCategory }) =>
    focusedCategory
      ? "#F26522"
      : currentTheme?.palette?.flippingCard?.textColor};
  /* color:  #F26522 #eeeeee; */
  text-transform: uppercase;
  margin-top: 20px;
  @media (max-width: 3073px) {
    font-size: 25px;
  }
  @media (max-width: 2561px) {
    font-size: 20px;
    line-height: 36px;
  }
  @media (max-width: 2049px) {
    font-size: 17px;
    line-height: 27px;
  }
  @media (max-width: 1921px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 1793px) {
    font-size: 15px;
    line-height: 24px;
  }
  @media (max-width: 1681px) {
    font-size: 12px;
    line-height: 22px;
  }
  @media (max-width: 1601px) {
    font-size: 11px;
    line-height: 22px;
  }
  @media (max-width: 1537px) {
    font-size: 11px;
    line-height: 20px;
  }
  @media (max-width: 1441px) {
    font-size: 10px;
    line-height: 20px;
  }
  @media (max-width: 1345px) {
    font-size: 9px;
    line-height: 18px;
    // margin-right: 28px;
  }
  @media (max-width: 1281px) {
    font-size: 8px;
    line-height: 18px;
    margin-right: 0px;
  }
  @media (max-width: 1153px) {
    font-size: 9px;
    line-height: 15px;
  }
  @media (max-width: 1025px) {
    font-size: 8px;
    line-height: 13px;
  }
`;

export const BackContentContainer = styled(ContentContainer)`
  align-items: flex-start;
  margin-left: 20px;
  @media (max-width: 1025px) {
    margin-left: 10px;
  }
`;

export const CardTitleSmall = styled("div")`
  font-family: "HelveticaNeue-Regular";
  font-size: 35px;
  line-height: 56px;
  color: #ffffff;
  text-transform: uppercase;
  margin-left: 40px;
  @media (max-width: 3073px) {
    font-size: 28px;
    line-height: 50px;
    margin-left: 25px;
  }
  @media (max-width: 2561px) {
    font-size: 24px;
    line-height: 27px;
    margin-left: 25px;
  }
  @media (max-width: 2049px) {
    font-size: 15px;
    line-height: 27px;
    margin-left: 22px;
  }
  @media (max-width: 1793px) {
    font-size: 13px;
    line-height: 24px;
    margin-left: 20px;
  }
  @media (max-width: 1681px) {
    font-size: 12px;
    line-height: 22px;
    margin-left: 15px;
  }
  @media (max-width: 1601px) {
    font-size: 11px;
    line-height: 22px;
    margin-left: 15px;
  }
  @media (max-width: 1537px) {
    font-size: 11px;
    line-height: 21px;
    margin-left: 14px;
  }
  @media (max-width: 1441px) {
    font-size: 10px;
    line-height: 21px;
    margin-left: 14px;
  }
  @media (max-width: 1345px) {
    font-size: 10px;
    line-height: 20px;
    margin-left: 12px;
  }
  @media (max-width: 1281px) {
    font-size: 9px;
    line-height: 20px;
    margin-left: 12px;
  }
  @media (max-width: 1153px) {
    font-size: 9px;
    line-height: 18px;
    margin-left: 12px;
  }
  @media (max-width: 1025px) {
    font-size: 8px;
    line-height: 18px;
    margin-left: 18px;
    margin-top: 4%;
  }
`;

export const CardValuesWrapper = styled("div")`
  position: relative;
  width: calc(100% - 40px);
  margin: 15px 0px;
  @media (max-width: 1025px) {
    width: calc(100% - 22px);
  }
`;

export const CardValuesSkewContainer = styled("div")`
  width: 100%;
  height: 100%;
  transform: skew(-18deg);
  background: #142231;
  border-radius: 10px;
  position: absolute;
`;

export const CardValuesSplitter = styled("div")`
  width: 1px;
  height: 110px;
  background: #fff;
  transform: skew(-18deg);
  @media (max-width: 3841px) {
    height: 110px;
    margin-left: 0.5vw;
  }
  @media (max-width: 3073px) {
    height: 110px;
  }
  @media (max-width: 2049px) {
    height: 43px;
  }
  @media (max-width: 1153px) {
    height: 43px;
  }
  @media (max-width: 1025px) {
    height: 28px;
  }
`;

export const CardValuesContainer = styled("div")`
  padding: 10px 30px;
  color: #fff;
  position: relative;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 3073px) {
    padding: 30px 24px;
  }
  @media (max-width: 2561px) {
    padding: 20px 14px;
  }
  @media (max-width: 2049px) {
    padding: 10px;
  }
  @media (max-width: 1921px) {
    padding: 12px;
  }
  @media (max-width: 1793px) {
    padding: 8px;
  }
  @media (max-width: 1681px) {
    padding: 8px 12px;
  }
  @media (max-width: 1153px) {
    padding: 10px;
  }
  @media (max-width: 1025px) {
    padding: 5px 16px;
  }
`;

export const ValueWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Value = styled("div")`
  font-family: "HelveticaNeue-Regular";
  font-size: 46px;
  line-height: 67px;
  color: #fff;
  @media (max-width: 3073px) {
    font-size: 30px;
    line-height: 50px;
  }
  @media (max-width: 2561px) {
    font-size: 22px;
    line-height: 38px;
  }
  @media (max-width: 2049px) {
    font-size: 15px;
    line-height: 27px;
  }
  @media (max-width: 1793px) {
    font-size: 13px;
    line-height: 26px;
  }
  @media (max-width: 1681px) {
    font-size: 13px;
    line-height: 26px;
  }
  @media (max-width: 1601px) {
    font-size: 13px;
    line-height: 26px;
  }
  @media (max-width: 1537px) {
    font-size: 13px;
    line-height: 26px;
  }
  @media (max-width: 1441px) {
    font-size: 12px;
    line-height: 26px;
  }
  @media (max-width: 1345px) {
    font-size: 11px;
    line-height: 26px;
  }
  @media (max-width: 1153px) {
    font-size: 8px;
    line-height: 27px;
  }
  @media (max-width: 1025px) {
    font-size: 7px;
    line-height: 24px;
  }
`;

export const Label = styled("div")`
  color: #9d9d9c;
  font-family: "HelveticaNeue-Regular";
  font-size: 30px;
  line-height: 44px;
  text-transform: uppercase;
  @media (max-width: 3073px) {
    font-size: 22px;
    line-height: 36px;
    margin-left: 7px;
  }
  @media (max-width: 2561px) {
    font-size: 16px;
    line-height: 36px;
    margin-left: 10px;
  }
  @media (max-width: 2049px) {
    font-size: 13px;
    line-height: 25px;
    margin-left: 8px;
  }
  @media (max-width: 1921px) {
    font-size: 11px;
    line-height: 25px;
    margin-left: 0px;
  }
  @media (max-width: 1793px) {
    font-size: 10px;
    line-height: 24px;
    margin-left: -2px;
  }
  @media (max-width: 1681px) {
    font-size: 10px;
    line-height: 22px;
    margin-left: 7px;
  }
  @media (max-width: 1601px) {
    font-size: 9px;
    line-height: 22px;
    margin-left: 7px;
  }
  @media (max-width: 1537px) {
    font-size: 9px;
    line-height: 22px;
    margin-left: 7px;
  }
  @media (max-width: 1441px) {
    font-size: 8px;
    line-height: 22px;
    margin-left: -5px;
  }
  @media (max-width: 1345px) {
    font-size: 7px;
    line-height: 20px;
    margin-left: 2px;
  }
  @media (max-width: 1153px) {
    font-size: 7px;
    line-height: 18px;
    margin-left: -14px;
  }
  @media (max-width: 1025px) {
    font-size: 5px;
    line-height: 18px;
    margin-left: -4px;
  }
`;

export const NoteContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NoteLabel = styled("div")`
  font-family: "HelveticaNeue-Regular";
  font-size: 28px;
  line-height: 44px;
  color: #ffcf25;
  margin-left: -35px;
  @media (max-width: 3073px) {
    font-size: 16px;
    line-height: 45px;
    margin-left: -25px;
  }
  @media (max-width: 2049px) {
    font-size: 13px;
    line-height: 27px;
    margin-left: -20px;
  }
  @media (max-width: 1921px) {
    font-size: 12px;
    line-height: 27px;
    margin-left: -20px;
  }
  @media (max-width: 1793px) {
    font-size: 10px;
    line-height: 24px;
    margin-left: -16px;
  }
  @media (max-width: 1681px) {
    font-size: 11px;
    line-height: 22px;
    margin-left: -20px;
  }
  @media (max-width: 1601px) {
    font-size: 10px;
    line-height: 22px;
    margin-left: -20px;
  }
  @media (max-width: 1537px) {
    font-size: 9px;
    line-height: 21px;
    margin-left: -16px;
  }
  @media (max-width: 1441px) {
    font-size: 7px;
    line-height: 21px;
    margin-left: -16px;
  }
  @media (max-width: 1345px) {
    font-size: 7px;
    line-height: 21px;
    margin-left: -16px;
  }
  @media (max-width: 1281px) {
    font-size: 6px;
    line-height: 21px;
    margin-left: -16px;
  }
  @media (max-width: 1153px) {
    font-size: 6.5px;
    line-height: 18px;
    margin-left: -20px;
  }
  @media (max-width: 1025px) {
    font-size: 6px;
    line-height: 18px;
    margin-left: -20px;
  }
`;

export const NoteValue = styled(NoteLabel)`
  color: #fff;
  margin-left: 5px;

  @media (max-width: 3073px) {
    font-size: 16px;
    line-height: 45px;
    margin-left: 5px;
  }
  @media (max-width: 2049px) {
    font-size: 13px;
    line-height: 27px;
    margin-left: 5px;
  }
  @media (max-width: 1921px) {
    font-size: 12px;
    line-height: 27px;
    margin-left: 5px;
  }
  @media (max-width: 1793px) {
    font-size: 10px;
    line-height: 24px;
    margin-left: 5px;
  }
  @media (max-width: 1681px) {
    font-size: 11px;
    line-height: 22px;
    margin-left: 5px;
  }
  @media (max-width: 1601px) {
    font-size: 10px;
    line-height: 22px;
    margin-left: 5px;
  }
  @media (max-width: 1537px) {
    font-size: 9px;
    line-height: 21px;
    margin-left: 5px;
  }
  @media (max-width: 1441px) {
    font-size: 9px;
    line-height: 21px;
    margin-left: 5px;
  }
  @media (max-width: 1345px) {
    font-size: 7px;
    line-height: 21px;
    margin-left: 5px;
  }
  @media (max-width: 1281px) {
    font-size: 6px;
    line-height: 21px;
    margin-left: 5px;
  }
  @media (max-width: 1153px) {
    font-size: 6.5px;
    line-height: 18px;
    margin-left: 5px;
  }
  @media (max-width: 1025px) {
    font-size: 5px;
    line-height: 18px;
    margin-left: 5px;
  }
`;

export const NoteDifferenceIndicator = styled("img")<{ difference: any }>`
  height: 45%;
  margin-left: 5px;
  width: auto;
  transform: ${({ difference }) =>
    difference === "+" ? "rotateX(180deg)" : "none"};
  @media (max-width: 1281px) {
    height: 30%;
  }
  @media (max-width: 1025px) {
    height: 16%;
  }
`;
