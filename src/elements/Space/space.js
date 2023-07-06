import { styled } from "@mui/material/styles";
export const FlexSpace = styled("div")`
    flex: 1;
`;
export const VerticalSpace = styled("div")`
    height: ${({count}) => count*4}px;
`;
export const HorizontalSpace = styled("div")`
    width: ${({count}) => count*4}px;
`;