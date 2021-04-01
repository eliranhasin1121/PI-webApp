import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import { Icon } from '@ant-design/compatible';
import { DownCircleTwoTone,DownCircleOutlined } from '@ant-design/icons';
import { MainWrapper,SectionA,IconWrapper, SectionB, LeftWrapper, PiWrapper, RightWrapper,TextWrapper,SectionC,SectionCTextWrapper, BoldText, RegularText, SectionD } from './Main.styled';
import { changeLanguage, getActiveLanguage } from '../../config/translations/utils';
import { Text, FlexDivCenter } from '../../components/Typography/Typography';
// import { loginAction } from '../../data/modules/auth/auth.actions';

export default () => {


  return (
    <MainWrapper>
      <SectionA>
        <IconWrapper>
        <DownCircleOutlined className={'down'} /> 
      </IconWrapper>
      </SectionA>
      <SectionB>
        <LeftWrapper>
          <PiWrapper/>
        </LeftWrapper>
        <RightWrapper>
          <TextWrapper>
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
    </MainWrapper>
  );
};