import styled from 'styled-components';
import { useRestaurantStore } from '../../../../stores/restaurants/useRestaurantApiStore';

const StyledRestaurantDetailContainer = styled.div`
  /* height: 100%; */
  width: 360px;
  display: flex;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};
  flex-direction: column;
`;

const StyledRestaurantImgWrap = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  margin-bottom: 15px;
`;

const StyledRestaurantDetailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledRestaurantName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.main};
  font-family: ${(props) => props.theme.fonts.boldfont};
  font-size: 20px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  /* border-bottom: 1px solid ${(props) => props.theme.colors.lightgray}; */
`;

const StyledRestauranthashtags = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const Styledhashtag = styled.div`
  display: flex;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.light};
  color: white;
  margin-right: 5px;
  padding-right: 6px;
  padding-left: 6px;
`;

const StyledRestaurantInfo = styled.div`
  margin-top: 15px;
  font-family: ${(props) => props.theme.fonts.regularfont};
  padding-bottom: 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightgray};
`;

const StyledRestaurantAdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledRestaurantAd = styled.div`
  margin-left: 10px;
`;

const StyledRating = styled.div`
  font-family: ${(props) => props.theme.fonts.regularfont};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

export {
  StyledRestaurantDetailContainer,
  StyledRestaurantDetailImg,
  StyledRestaurantImgWrap,
  StyledRestaurantName,
  StyledRestauranthashtags,
  Styledhashtag,
  StyledRestaurantInfo,
  StyledRestaurantAd,
  StyledRating,
  StyledRestaurantAdContainer,
};
