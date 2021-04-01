import styled from 'styled-components';
import sectionABackground from '../../assets/page1/sectionA.jpg';
import PiIcon from '../../assets/page1/pi.jpg';
import sectionCImage from '../../assets/page1/sectionC.jpg';
import timeLine from '../../assets/page1/timeline.png';
export const MainWrapper = styled('div')``;

export const SectionA = styled.div`
background-image: url(${sectionABackground});
height:725px;
width:100%;
background-repeat: no-repeat;
background-size: cover;
`

export const IconWrapper = styled.div`
    position: absolute;
    top: 705px;
    left: 50%;
    .down{
    font-size:40px;
    border-radius:20px;
    box-shadow:7px 6px 28px 1px rgba(0, 0, 0, 0.24);
    cursor:pointer;
    outline: none; 
    transition: 0.2s all;
    }
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
`

export const RegularText = styled.div`
font-size:22px;
padding:0px 25px;
`

export const SectionD = styled.div`
height:450px;
width:100%;
background-image:url(${timeLine});
background-size:cover;
background-repeat:no-repeat;
`