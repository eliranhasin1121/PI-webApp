import styled from 'styled-components';
import sectionABackground from '../../assets/page1/sectionA.jpg';
import PiIcon from '../../assets/page1/pi.jpg';
import sectionCImage from '../../assets/page1/sectionC.jpg';
import timeLine from '../../assets/page1/timeline.png';
import sectionEBackground from '../../assets/page1/sectionE.jpg';

export const MainWrapper = styled('div')``;

export const SectionA = styled.div`
background-image: url(${sectionABackground});
height:725px;
width:100%;
background-repeat: no-repeat;
background-size: cover;
`

export const IconWrapper = styled.div`
    position: relative;
    top: 693px;
    left: 50%;
`

export const SectionB = styled.div`
display:flex;
width:100%;
height:725px;
`
export const LeftWrapper = styled.div`
height:100%;
flex:1;
display:flex;
justify-content:center;
align-items:center;
`
export const RightWrapper = styled.div`
flex:1;
display:flex;
justify-content: end;
align-items:center;
height:100%;
`

export const PiWrapper = styled.div`
    height: 420px;
    width: 471px;
    border-radius: 390px;
background-image:url(${PiIcon});
background-repeat:no-repeat;
background-size: cover;
`

export const TextWrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
font-size:36px;
width: 470px;
text-align:left;
`

export const SectionC = styled.div`
background-image:url(${sectionCImage});
background-size:cover;
background-repeat:no-repeat;
height:750px;
width:100%;
`

export const SectionCTextWrapper = styled.div`
height:100%;
width:40%;
margin-left:60px;
background-color:#ffffff;
opacity:0.7;
`

export const BoldText = styled.div`
font-size:28px;
padding:30px 0px;
text-align:center;
font-weight:bold;
color:black;
`

export const RegularText = styled.div`
font-size:22px;
padding:0px 25px;
text-align:left;
`

export const SectionD = styled.div`
height:450px;
width:100%;
background-image:url(${timeLine});
background-size:cover;
background-repeat:no-repeat;
`

export const SectionE = styled.div`
background-image:url(${sectionEBackground});
background-repeat:no-repeat;
background-size:cover;
height:750px;
width:100%;
display: flex;
justify-content: flex-end;
`

export const SectionETextWrapper = styled.div`
height:100%;
width:20%;
background-color:#ffffff;
opacity:0.7;
margin-right:70px;
`

export const SectionF = styled.div`
height:725px;
width:100%;
`

export const OurProductsStyled = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding-top:50px;
text-align:center;
`

export const MainText = styled.div`
font-family: Helvetica;
font-size: 25px;
color:${({color}) => color ||'#000000' };
letter-spacing: -1.41px;
text-align: center;
`

export const SecondaryText = styled.div`
font-family: Helvetica;
font-size: 20px;
letter-spacing: -1.12px;
text-align: center;
opacity:${({opacity}) => opacity || 1};
`

export const ProductsContainer = styled.div`
width:60%;
padding-top:170px;
display:flex;
justify-content:space-evenly;
margin:auto;
`
export const ProductWrapper = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`

export const LogoText = styled.div`
padding-top:12px;
font-size:16px;
font-family: Helvetica;
letter-spacing: -1.41px;
text-align: center;
`

export const Icon  = styled.div`
background-image:url(${({img}) => img});
background-size:cover;
background-repeat:no-repeat;
height: 120px;
width: 120px;
border-radius: 120px;
`

export const SectionG = styled.div`
width:100%;
height:166px;
background: #919191;
`

export const ArrowWrapper = styled.div`
    position: relative;
    left: 47%;
    top: -42px;
`

export const OtherProducts = styled.div`
    position: relative;
    bottom: 30px;
    right: 13px;
    color:#ffffff;
`