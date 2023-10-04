import React, { useState } from 'react';
import {
  StyledNavBar,
  StyledNavBarDropDown,
  StyledLogoContainer,
  StyledLogo,
  StyledName,
  StyledEndComponent,
  StyledLinkText,
  StyledLinkDetailContainer,
  StyledLinkDetail,
} from './Navbar.styled';

const NavBarComponent = () => {
  const [navState, setNavState] = useState('');
  const onMouseEnter = (e: any) => {
    setNavState(e.target.name);
  };
  const onMouseLeave = (e: any) => {
    setNavState('');
  };

  return (
    <StyledNavBar>
      <StyledLogoContainer>
        <StyledLogo src="/mobile/mainlogo.png" alt="Logo" />
        {/* <StyledName>와이라노사우르스</StyledName> */}
      </StyledLogoContainer>
      <StyledEndComponent>
        <StyledLinkText
          name="expo"
          href="/Guide"
          navstate={navState}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          Expo
        </StyledLinkText>
        <StyledLinkText
          name="tour"
          href="/Gosung"
          navstate={navState}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          고성관광
        </StyledLinkText>
        <StyledLinkText
          name="dino"
          href="/Dinosaur"
          navstate={navState}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          공룡
        </StyledLinkText>
      </StyledEndComponent>
      {/* {navState === 'expo' && (
        <StyledNavBarDropDown onMouseLeave={onMouseLeave}>
          <StyledLinkDetailContainer>
            <StyledLinkDetail>행사장 안내</StyledLinkDetail>
          </StyledLinkDetailContainer>
        </StyledNavBarDropDown>
      )}
      {navState === 'tour' && (
        <StyledNavBarDropDown onMouseLeave={onMouseLeave}>
          <StyledLinkDetailContainer>
            <StyledLinkDetail href="/gosung">관광정보</StyledLinkDetail>
            <StyledLinkDetail></StyledLinkDetail>
          </StyledLinkDetailContainer>
        </StyledNavBarDropDown>
      )}
      {navState === 'dino' && (
        <StyledNavBarDropDown onMouseLeave={onMouseLeave}>
          <StyledLinkDetailContainer>
            <StyledLinkDetail></StyledLinkDetail>
            <StyledLinkDetail></StyledLinkDetail>
          </StyledLinkDetailContainer>
        </StyledNavBarDropDown>
      )} */}
    </StyledNavBar>
  );
};

export default NavBarComponent;
