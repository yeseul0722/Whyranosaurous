import styled, { css } from 'styled-components';

const StyledSubTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;

    return css`
      font-family: ${font};
      font-size: 18px;
      margin-bottom: 10px;
    `;
  }}
`;
const StyledBox = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.regularfont;
    const black = props.theme.colors.black;
    const main = props.theme.colors.main;
    const white = props.theme.colors.white;

    return css`
      font-family: ${font};
      font-size: 15px;
      line-height: 35px;
      height: 35px;
      width: 100%;
      color: ${black};
      background-color: ${white};
      border: 1.7px solid ${main};
      margin-bottom: 5px;
    `;
  }}
`;
const StyledShowTitle = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.boldfont;
    const dark = props.theme.colors.dark;

    return css`
      font-family: ${font};
      font-size: 17px;
      color: ${dark};
    `;
  }}
`;
const StyledShowText = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const font = props.theme.fonts.regularfont;
    const black = props.theme.colors.black;

    return css`
      font-family: ${font};
      font-size: 17px;
      color: ${black};
    `;
  }}
`;

export { StyledSubTitle, StyledBox, StyledShowTitle, StyledShowText };
