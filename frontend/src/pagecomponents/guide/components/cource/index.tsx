import React, { useState, useEffect } from 'react';
import {
  StyledCourcePlace2,
  StyledCourceSelectContainer2,
  StyledMenuContainer,
  StyledMenuContentContainer,
  StyledMenuTitle,
  Test,
  StyledTimeContainer,
  StyledTime,
} from '../../Guide.styled';
import {
  StyledCourceImage,
  StyledCourceImageContainer,
  StyledCourceSelectContainer,
  StyledCourcePlace,
} from '../../Guide.styled';
import { useCourceHook } from '../../../../hooks/guide/useCourceHook';
import useGuideStore from '../../../../stores/guide/useGuideStore';

const Cource = () => {
  const { courceList, cource, courseOrderList } = useCourceHook();
  const positions = useGuideStore((state: any) => state.positions);
  const imageArray = [
    'dino',
    '3d',
    'biking',
    'cafe',
    'baby',
    'food',
    'foodcart',
    'museum',
    'park',
    'plant',
    'play',
    'stroller',
    'toilet',
    'ticket',
    'drawing',
    'bridge',
  ];

  return (
    <StyledMenuContainer>
      <StyledMenuTitle>추천 코스</StyledMenuTitle>
      {courseOrderList && (
        <StyledTimeContainer>
          <StyledTime>소요시간 : {cource[0]?.timeTaken}분</StyledTime>
        </StyledTimeContainer>
      )}
      <Test>
        {courseOrderList?.map((cource: any) => {
          return (
            <StyledCourceSelectContainer2 key={cource.id}>
              <StyledCourceImageContainer>
                <StyledCourceImage marker={imageArray[cource.place.markerNumber - 1]} />
              </StyledCourceImageContainer>
              <StyledCourcePlace2>{cource.place.name}</StyledCourcePlace2>
            </StyledCourceSelectContainer2>
          );
        })}
      </Test>
    </StyledMenuContainer>
  );
};

export default Cource;
