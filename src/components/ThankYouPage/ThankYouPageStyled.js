import styled from 'styled-components';
import * as colors from 'styles/variables';

export const ThankYouPageWrapperStyled = styled.div`
  position: relative;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

export const ThankYouPageStyled = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 50px 20px 80px;
  text-align: center;
  line-height: 1.3em;
  font-size: 15px;
  background-color: ${colors.BackgroundColor};
  color: ${colors.FontColor};
  font-weight: bold;
`;

export const TitleStyled = styled.div`
  font-size: 25px;
  margin: 30px 0;
  font-weight: 600;
`;

export const MessageStyled = styled.div`
  font-weight: 300;
  & strong {
    font-weight: bold;
  }
`;

export const LinkStyled = styled.a`
  color: ${colors.FontColor};
  padding-left: 4px;
  font-weight: bold;
  outline: none;
  border: none;
  background: transparent;
  padding: 0;
  margin: 0 5px;
  &:hover {
    text-decoration: underline;
  }
`;

export const IconStyled = styled.img``;
