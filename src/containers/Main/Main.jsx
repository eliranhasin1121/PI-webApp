import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
// import { Icon } from '@ant-design/compatible';
import { DownCircleTwoTone,DownCircleOutlined } from '@ant-design/icons';
import { MainWrapper,SectionA,IconWrapper, SectionB, LeftWrapper, PiWrapper, RightWrapper,
TextWrapper,SectionC,SectionCTextWrapper, BoldText, RegularText, SectionD,SectionE,SectionETextWrapper,SectionF,MainText,SecondaryText, 
OurProductsStyled, ProductsContainer, ProductWrapper, LogoText,Icon,SectionG, ArrowWrapper, 
OtherProducts,SectionH,SubContentWrapper,SubTextWrapper, SubSectionH,BolderText,ButtonWrapper, ReadMoreButton,SaminSection,SectionI} from './Main.styled';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import { Text, FlexDivCenter } from '../../components/Typography/Typography';
import {PiNovel,PIEmerging,PiOpportunites, ArrowDown,SaminSVG,CohenInvestmentSVG} from '../../common/icons/iconSVG';
import {TeamMemberImage,TeamMemberImageWrapper,TeamMemberWrapper} from '../../common/styled/common.styled';
// import { loginAction } from '../../data/modules/auth/auth.actions';
import opportImg from '../../assets/page1/opportunities.png';
import emerging from '../../assets/page1/emerging.png';
import novel from '../../assets/page1/novel.png';
import memberA from '../../assets/page1/member1-1.jpg';
import useMedia from '../../customHooks/UseMedia';

export default function Main({}){

const { isMobile } = useMedia();
  // const Product = (logo,text) => (
  //   <ProductWrapper>
  //    <Icon img={opportImg}/>
  //     <LogoText>
  //       {text}
  //     </LogoText>
  //   </ProductWrapper>
  // )

  console.log({isMobile});

  const CryptoSection = () => (
    <SubContentWrapper>
      <SubTextWrapper>
        <BolderText>Cryptocurrency</BolderText> never &nbsp; been &nbsp; so <BolderText>easy</BolderText>
      </SubTextWrapper>
      <ButtonWrapper>
      <ReadMoreButton>READ MORE</ReadMoreButton>
      </ButtonWrapper>
    </SubContentWrapper>
  )

   const BeliveSection = ()=>(
    <SubContentWrapper>
      <SubTextWrapper>
        We <BolderText>believe</BolderText> in the <BolderText>future</BolderText>
      </SubTextWrapper>
      <ButtonWrapper style={{paddingTop:120}}>
      <ReadMoreButton>READ MORE</ReadMoreButton>
      </ButtonWrapper>
    </SubContentWrapper>
  )

  return (
    <MainWrapper>
      <SectionA>
        <IconWrapper>

      </IconWrapper>
      </SectionA>
      <SectionB isMobile={isMobile}>
        <LeftWrapper>
          <PiWrapper isMobile={isMobile}/>
        </LeftWrapper>
        <RightWrapper  isMobile={isMobile}>
          <TextWrapper isMobile={isMobile}>
          Pi is an absolute return macro 
          volatility hedge fund focused 
          primarily on emerging market 
          currencies and sovereign 
          debt.
          </TextWrapper>
        </RightWrapper>
      </SectionB>
      <SectionC>
    <SectionCTextWrapper>
      <BoldText>
        Jonathan Kaye
      </BoldText>
      <RegularText>
      Mr. Kaye has over 29 years of extensive experience in trading and managing proprietary FX and bond derivative books in the United States, Europe and Emerging Markets. In 1999, Mr. Kaye co-founded Pi Financial Instruments, one of the largest proprietary derivatives houses in Israel. Since that time he has been in charge of the group's risk management and proprietary trading of global bonds and FX derivatives book. In March 2006, Mr. Kaye launched Pi Fund specializing in trading hedged global sovereign fixed income and FX instruments.
      <br/>
Mr. Kaye started his career in 1992 trading listed options for Susquehana Investment Group, a Chicago based securities firm. From 1997 to 1999 Mr. Kaye was head of the proprietary derivatives desk at Ilanot-Batucha, a leading Israeli securities firm. He was awarded a BA Cum Laude and MBA both from Harvard University in 1992 and 1997, respectively. He also served as the captain of the National Champion (1991) Harvard squash team and earned a spot on the All-Ivy League team in 1989-90, 1990-91 and 1991-92.
      </RegularText>
    </SectionCTextWrapper>
      </SectionC>
      <SectionD/>
      <SectionE>
        <SectionETextWrapper>
            <BoldText>
              Ahron Cohen
            </BoldText>
            <RegularText>
            Mr. Cohen is the co-founder of PI Group, which was founded in 1999. Mr. Cohen is leading the business development of the group and represents the Fund with Institutional investors in Israel.  
Mr. Cohen has over 23 years' extensive experience in financial markets, mainly in private capital investments, Institutional investments and M&A in the public sector.
Prior to founding PI Group, Mr. Cohen managed the stock options desk at Mizrahi Tefahot Bank Ltd. Between 1997 to 1999 Mr. Cohen was a senior Vice President at Clal finance Ltd, where he oversaw the proprietary and derivatives trading desks.
            </RegularText>
        </SectionETextWrapper>
      </SectionE>
      <SectionF>
        <OurProductsStyled>
          <MainText>OUR PRODUCTS</MainText>
          <SecondaryText>HEDGE FUNDS</SecondaryText>
        </OurProductsStyled>
        <ProductsContainer>
        <ProductWrapper>
     <Icon img={novel}/>
      <LogoText>
       PI NOVEL
      </LogoText>
    </ProductWrapper>
    <ProductWrapper>
     <Icon img={emerging}/>
      <LogoText>
      PI EMERGING MARKETS
      </LogoText>
    </ProductWrapper>
    <ProductWrapper>
     <Icon img={opportImg}/>
      <LogoText>
      PI OPPORTUNITIES
      </LogoText>
    </ProductWrapper>
        </ProductsContainer>
      </SectionF>
      <SectionG>
        <ArrowWrapper>
        <ArrowDown/>
        </ArrowWrapper>
        <OtherProducts>
          <MainText color={'#fffff'}>OUR PRODUCTS</MainText>
          <SecondaryText opacity={0.7}>other</SecondaryText>
        </OtherProducts>
      </SectionG>
      <SectionH>
        <CryptoSection/>
        <SubContentWrapper backgroundColor={'#000000'}>
        <SaminSection>
        <SaminSVG/>
        </SaminSection>
        </SubContentWrapper>
          <SubContentWrapper style={{paddingTop:250}} backgroundColor={'#000000'}>
            <SaminSection>
              <CohenInvestmentSVG/>
            </SaminSection>
          </SubContentWrapper>
          <BeliveSection/>
      </SectionH>
      <SectionI>
        <SecondaryText>OUR TEAM</SecondaryText>
        <TeamMemberWrapper>
          <TeamMemberImageWrapper>
            <TeamMemberImage memberImg={memberA}/>
          </TeamMemberImageWrapper>
          <TextWrapper style={{justifyContent:'left',flex:1}}>
            <MainText>RONEN BITMAN</MainText>
            <SecondaryText>COO</SecondaryText>
          </TextWrapper>
        </TeamMemberWrapper>
      </SectionI>
    </MainWrapper>
  );
};