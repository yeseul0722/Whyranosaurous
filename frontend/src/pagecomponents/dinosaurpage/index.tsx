import React, { useRef } from 'react';
import DsFirstPage from './components/firstpage';
import {
  StyledDsPage,
  StyledDsSide,
  StyledDsContent,
  StyledDsLandingPage,
  StyledLandingGoNextPageButton,
  StyledDsFirstPage,
  StyledKoreaDsPage,
  StyledKoreaMapPage,
  StyledKoreaceratopsPage,
  StyledKoreasaurusPage,
  StyledPukyongsaurusPage,
} from './Dinosaur.styled';
import LandingPage from './components/landingpage';
import KoreaDsPage from './components/koreadspage';
import KoreaMapPage from './components/koreamappage';

const Dinosaur = () => {
  const inputForm = useRef<any>();
  const landingToNext = () => {
    inputForm.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <StyledDsPage>
      <StyledDsContent>
        <StyledDsLandingPage>
          <LandingPage></LandingPage>
          <StyledLandingGoNextPageButton onClick={landingToNext}>입장하기</StyledLandingGoNextPageButton>
        </StyledDsLandingPage>
        <StyledDsFirstPage ref={inputForm}>
          <DsFirstPage></DsFirstPage>
        </StyledDsFirstPage>
        <StyledKoreaDsPage>
          <KoreaDsPage></KoreaDsPage>
        </StyledKoreaDsPage>
        <StyledKoreaMapPage>
          <KoreaMapPage></KoreaMapPage>
        </StyledKoreaMapPage>
      </StyledDsContent>
    </StyledDsPage>
  );
};

export default Dinosaur;
