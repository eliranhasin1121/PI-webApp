import styled from 'styled-components';
import sectionABackground from '../../assets/page1/sectionA.jpg';
import PiIcon from '../../assets/page1/pi.jpg';
import sectionCImage from '../../assets/page1/sectionC.jpg';
import timeLine from '../../assets/page1/timeline.png';
import sectionEBackground from '../../assets/page1/sectionE.jpg';
import samin from '../../assets/page1/samin.png';

export const MainWrapper = styled('div')``;

const BackgroundImage = styled.div`
background-size:cover;
background-repeat:no-repeat;
`
export const SectionA = styled(BackgroundImage)`
background-image: url(${sectionABackground});
height:725px;
width:100%;
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

export const PiWrapper = styled(BackgroundImage)`
height: 420px;
width: 471px; 
border-radius: 390px;
background-image:url(${PiIcon});

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

export const SectionC = styled(BackgroundImage)`
background-image:url(${sectionCImage});
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

export const SectionD = styled(BackgroundImage)`
height:450px;
width:100%;
background-image:url(${timeLine});
`

export const SectionE = styled(BackgroundImage)`
background-image:url(${sectionEBackground});
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
color:${({color}) => color || '#000000' };
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

export const Icon  = styled(BackgroundImage)`
background-image:url(${({img}) => img});
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

export const SectionH = styled.div`
width:100%;
height:1118px;
display:flex;
flex-direction:column;
`

export const SubSectionH = styled.div`
display:flex;
height:559px;
`


export const SubContentWrapper = styled.div`
padding:120px 120px 20px 120px;
flex:1;
display:flex;
flex-direction:column;
background-color:${({backgroundColor}) => backgroundColor || '#ffffff'};
align-items:center;
`

export const  SubTextWrapper = styled.div`
font-family: Helvetica;
font-size: 60px;
letter-spacing: -3.37px;
width:487px;
font-weight:normal;
padding:30px;
`

export const BolderText = styled.b`
color:#000000;
text-align:center;
`

export const ButtonWrapper = styled.div`
display:flex;
justify-content:center;
width:487px;
padding:25px 0px;

`

export const ReadMoreButton = styled.button`
background: #FFFFFF;
border: 2px solid #979797;
border-radius: 8px;
width:195px;
height:45px;
font-family: Helvetica;
font-size: 20px;
color: #000000;
letter-spacing: -1.12px;
text-align: center;
`

export const SaminSection = styled.div`
display: flex;
justify-content: center;
align-items:center;
`

export const SectionI = styled.div`
padding:50px 30px;
height:1981px;
width:100%;
`
