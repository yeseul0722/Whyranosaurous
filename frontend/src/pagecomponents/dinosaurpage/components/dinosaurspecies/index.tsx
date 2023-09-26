import React, { useState, useEffect } from 'react';
import {
  StyledDsSpeciesPage,
  StyledDsSpeciesTitle,
  StyledDsSpeciesTitleText,
  StyledDsSpeciesBody,
  StyledDsSpeciesCardList,
  StyledDsSpeciesCard,
  StyledDsSpeciesPagenation,
  StyledDsSpeciesCardImg,
  StyledDsSpeciesCardName,
  StyledDsSpeciesCardFigcaption,
  StyledDsSpeciesCardFigcaptionGo,
  StyledDsSpeciesCardFigcaptionGoDetail,
} from './DsSpecies.styled';
import DsDetail from '../dinosaurdetail';
import { useDinosaurListHook } from '../../../../hooks/dinosaur/useDinosaurListHook';
import CustomGlobeComponent from '../globe';
import useDinosaurStore from '../../../../stores/dinosaur/useDinosaurStore';
import { useDinosaurSubHook } from '../../../../hooks/dinosaur/useDinosaurSubHook';

const DsSpeciesComponent = () => {
  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;

  // 공룡 리스트
  const { dinosaurList } = useDinosaurListHook();

  //페이지 이동
  const indexLastCard = currentPage * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const currentCards = dinosaurList.slice(indexFirstCard, indexLastCard);
  const totalPages = Math.ceil(dinosaurList.length / cardsPerPage);

  const goPrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 공룡 디테일
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const [DsId, setDsId] = useState();
  const [DsName, setDsName] = useState();
  const [DsImg, setDsImg] = useState();

  const DsEngName = useDinosaurStore((state: any) => state.DsEngName);
  const setDsEngName = useDinosaurStore((state: any) => state.setDsEngName);
  // 2-1. 주스턴드 호출
  const setDsKorName = useDinosaurStore((state: any) => state.setDsKorName);

  const { getDinosaurSub } = useDinosaurSubHook(); // 공룡 서브

  const openDetail = (e: any) => {
    setDsId(e.target.id);
    setDsName(e.target.alt);
    setDsImg(e.target.src);

    setIsDetailOpen(!isDetailOpen);
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
  };

  // 공룡 지구본
  const goGlobe = (e: any) => {
    const selectDsKorName = dinosaurList[e.target.id - 1].korName;
    const selectDsEngName = dinosaurList[e.target.id - 1].engName;
    getDinosaurSub(selectDsEngName);

    // 2-2. 저장함수(저장할값)
    setDsEngName(selectDsEngName);
    setDsKorName(selectDsKorName);
  };

  return (
    <StyledDsSpeciesPage>
      {/* 타이틀 */}
      <StyledDsSpeciesTitle>
        <StyledDsSpeciesTitleText>이런 공룡이 있었어요!</StyledDsSpeciesTitleText>
      </StyledDsSpeciesTitle>

      {/* 공룡 종 리스트 */}
      <StyledDsSpeciesBody>
        <StyledDsSpeciesCardList>
          {currentCards.map((card: any) => (
            // 공룡 카드
            <StyledDsSpeciesCard key={card.id}>
              <StyledDsSpeciesCardImg id={card.id} src={card.imgAddress} alt={card.korName} />
              <StyledDsSpeciesCardName>| {card.korName}</StyledDsSpeciesCardName>
              <StyledDsSpeciesCardFigcaption>
                <StyledDsSpeciesCardFigcaptionGo>
                  <StyledDsSpeciesCardFigcaptionGoDetail onClick={goGlobe} id={card.id}>
                    🌍 지구본에서 보기
                  </StyledDsSpeciesCardFigcaptionGoDetail>
                  <StyledDsSpeciesCardFigcaptionGoDetail onClick={openDetail} id={card.id}>
                    🦕 공룡상세 정보
                  </StyledDsSpeciesCardFigcaptionGoDetail>
                </StyledDsSpeciesCardFigcaptionGo>
              </StyledDsSpeciesCardFigcaption>
            </StyledDsSpeciesCard>
          ))}
        </StyledDsSpeciesCardList>

        {/* 공룡 디테일 */}
        {isDetailOpen === true && (
          <DsDetail
            isDetailOpen={isDetailOpen}
            DsName={DsName}
            DsImg={DsImg}
            DsId={DsId}
            DsEName={DsEngName}
            closeDetail={closeDetail}
          />
        )}

        {/* 페이지 이동 */}
        <StyledDsSpeciesPagenation>
          <button onClick={goPrePage} disabled={currentPage === 1} style={{ margin: '5px', background: 'none' }}>
            ◀
          </button>
          {currentPage} / {totalPages}
          <button
            onClick={goNextPage}
            disabled={currentPage === Math.ceil(dinosaurList.length / cardsPerPage)}
            style={{ margin: '5px', background: 'none' }}
          >
            ▶
          </button>
        </StyledDsSpeciesPagenation>
      </StyledDsSpeciesBody>
    </StyledDsSpeciesPage>
  );
};

export default DsSpeciesComponent;
