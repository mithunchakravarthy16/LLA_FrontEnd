import {styled} from '@mui/material/styles';
import { a } from '@react-spring/web'

export const Wrapper = styled("div")`
    position: absolute;
    bottom: 100px;
    left: 150px;
    right: 150px;
    width: calc(100vw - 300px);
    display: flex;
`;

export const RootContainer = styled("div")`
    min-width: 270px;
    height: 186px;
    position: relative;
    margin-right: 20px;
    cursor: pointer;
`;

export const SkewContainer = styled(a.div)<{isOpen?: boolean}>`
    background: rgba(9, 17, 22, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const SkewBackContainer = styled(SkewContainer)`
    background: linear-gradient(243.97deg, #CD5209 10.07%, #C8151D 112.41%);
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
    width: 75px;
    height: auto;
    margin: 10px;
`;

export const CardTitle = styled("div")`
    font-family: 'Helvetica Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: #EEEEEE;
    text-transform: uppercase;
`;

export const BackContentContainer = styled(ContentContainer)`
    align-items: flex-start;
    margin-left: 20px;
`;

export const CardTitleSmall = styled("div")`
    font-family: 'Helvetica Neue';
    font-style: italic;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-left: 10px;
`;

export const CardValuesWrapper = styled("div")`
    position: relative;
    width: calc(100% - 40px);
    margin: 15px 0px;
`;

export const CardValuesSkewContainer = styled("div")`
    width: 100%;
    height: 100%;
    transform: skew(-18deg);
    background: #142231;
    border-radius: 10px;
    position: absolute;
`;

export const CardValuesContainer = styled("div")`
    padding: 10px;
    color: #fff;
    position: relative;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ValueWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Value = styled("div")`
    font-family: 'Helvetica Neue';
    font-style: italic;
    font-weight: 700;
    font-size: 22px;
    color: #FFF;
`;

export const Label = styled("div")`
    color: #9D9D9C;
    font-family: 'Helvetica Neue';
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
`;

export const Note = styled("div")`
    font-family: 'Helvetica Neue';
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    color: #FFCF25;
    margin-left: -10px;
`;