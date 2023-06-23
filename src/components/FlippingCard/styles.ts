import { styled } from '@mui/material/styles';
import { a } from '@react-spring/web'

export const Wrapper = styled("div")`
    position: absolute;
    bottom: 100px;
    left: 220px;
    right: 220px;
    width: calc(100vw - 300px);
    display: flex;
    @media (max-width : 3073px) {
        left: 220px;
    }
    @media (max-width : 2049px) {
        left: 150px;
    }
    @media (max-width : 1153px) {
        left: 150px;
    }
`;

export const RootContainer = styled("div")`
    min-width: 560px;
    height: 330px;
    position: relative;
    margin-right: 20px;
    cursor: pointer;
    @media (max-width : 3073px) {
        min-width: 450px;
    height: 330px;
    }
    @media (max-width : 2049px) {
        min-width: 294px;
        height: 186px;
    }
    @media (max-width : 1153px) {
        min-width: 270px;
        height: 186px;
    }
`;

export const SkewContainer = styled(a.div) <{ isOpen?: boolean }>`
    background: rgba(22, 25, 30, 0.8);
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
    width: 140px;
    height: auto;
    margin: 10px;
    @media (max-width : 3073px) {
        width: 110px;
    }
    @media (max-width : 2049px) {
        width: 75px;
    }
    @media (max-width : 1153px) {
        width: 75px;
    }
`;

export const CardTitle = styled("div")`
    font-family: 'HelveticaNeue-Regular';
    font-style: normal;
    font-size: 40px;
    line-height: 50px;
    color: #EEEEEE;
    text-transform: uppercase;
    @media (max-width : 3073px) {
        font-size: 30px;
    line-height: 40px;
    }
    @media (max-width : 2049px) {
        font-size: 15px;
    line-height: 27px;
    }
    @media (max-width : 1153px) {
        font-size: 15px;
    line-height: 27px;
    }
`;

export const BackContentContainer = styled(ContentContainer)`
    align-items: flex-start;
    margin-left: 20px;
`;

export const CardTitleSmall = styled("div")`
    font-family: 'HelveticaNeue-Regular';
    font-style: italic;
    font-size: 36px;
    line-height: 56px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-left: 40px;
    @media (max-width : 3073px) {
        font-size: 28px;
    line-height: 40px;
    margin-left: 30px;

    }
    @media (max-width : 2049px) {
        font-size: 15px;
    line-height: 27px;
    margin-left: 10px;

    }
    @media (max-width : 1153px) {
        font-size: 15px;
    line-height: 27px;
    margin-left: 10px;

    }
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
    padding: 10px 30px;
    color: #fff;
    position: relative;
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width : 3073px) {
        padding: 30px;
     }
     @media (max-width : 2049px) {
        padding: 10px;
     }
     @media (max-width : 1153px) {
        padding: 10px;
     }
    

`;

export const ValueWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    &::after {
        position: absolute;
        content: '';
        width: 1px;
        height: 110px;
        background: #fff;
        transform: rotate(18deg);
        right: 45%;
        top: 12px;
        @media (max-width : 3073px) {
            height: 110px;
            right: 45%;
        }
        @media (max-width : 2049px) {
            height: 43px;
           right: 111px;
        }
        @media (max-width : 1153px) {
            height: 43px;
            right: 111px;
        }
        
    }
`;

export const Value = styled("div")`
    font-family: 'HelveticaNeue-Regular';
    font-style: italic;
    font-size: 46px;
    line-height: 67px;
    color: #FFF;
    @media (max-width : 3073px) {
        font-size: 30px;
    line-height: 50px;
    }
    @media (max-width : 2049px) {
        font-size: 15px;
    line-height: 27px;
    }
    @media (max-width : 1153px) {
        font-size: 15px;
    line-height: 27px;
    }
   
`;

export const Label = styled("div")`
    color: #9D9D9C;
    font-family: 'HelveticaNeue-Regular';
    font-style: italic;
    font-size: 30px;
    line-height: 44px;
    text-transform: uppercase;
    @media (max-width : 3073px) {
        font-size: 24px;
    line-height: 34px;
    }
    @media (max-width : 2049px) {
        font-size: 15px;
    line-height: 27px;
    }
    @media (max-width : 1153px) {
        font-size: 15px;
    line-height: 27px;
    }
`;

export const Note = styled("div")`
    font-family: 'HelveticaNeue-Regular';
    font-style: italic;
    font-size: 28px;
    line-height: 44px;
    color: #FFCF25;
    margin-left: -10px;
    @media (max-width : 3073px) {
        font-size: 20px;
        line-height: 34px;
    }
    @media (max-width : 2049px) {
        font-size: 15px;
    line-height: 27px;
    max-width: 212px;
    }
    @media (max-width : 1153px) {
        font-size: 15px;
    line-height: 27px;
    max-width: 212px;
    }
`;