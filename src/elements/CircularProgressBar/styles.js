import {styled} from '@mui/material/styles';
import greenBorder from 'assets/green-border-speedometer.svg';

export const RootContainer = styled('div')`
    margin: 13px 15px;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
`;

export const LabelText = styled('div')`
    font-size: 0.8vw;
    /* margin-top: 0.5vw; */
    color: #8A8A8A;
    font-family: 'HelveticaNeue-Regular';
`;

export const LabelContainer = styled("div")`
    position: relative;
    z-index: 1000;
    margin-top: -2.4vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProgressMask = styled("img")`
    width: calc(100% - 80px);
    height: calc(100% - 80px);
    position: absolute;
    top: 50%;
    transform: translateY(-65%);
    z-index: 1;
`;

export const IconBackDrop = styled("div")`
    background-color: ${({color}) => {
        console.log("COLOR BACKDROP", color)
        return color;
    }};
    width: fit-content;
    padding: 15px;
    /* padding-bottom: 0px; */
`;

export const ValueContainer = styled("div")`
    position: absolute;
    font-size: ${({textValue}) => textValue ? "1vw" : "1.5vw"};
    text-align: center;
    line-height: ${({textValue}) => textValue ? "1vw" : "1.5vw"};;
    color: ${({color}) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'HelveticaNeue-Regular';

`;

export const ProgressBarStroke = styled("div")`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) scale(3);
    width: ${({radius}) => radius/2}px;
    height: ${({radius}) => radius/2}px;
    border: 1.4px dashed ${({color}) => color};
    border-radius: ${({radius}) => radius*2}px;
`;