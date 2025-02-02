import styled from 'styled-components';
import { mediaFrom } from 'styles/BreakPoints';
import {
  BoldFont,
  MediumFont,
  MediumFontWeight,
  TinyFont,
  SmallFont,
  MicroFont,
  FontColor,
  White,
  LineColor
} from 'styles/variables';

export const WrapperStyled = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
`;
export const InnerWrapper = styled.div.attrs(() => ({
  className: 'msd__checkout-card-text__wrapper'
}))`
  max-width: 50%;
  color: ${FontColor};
  margin-right: 15px;

  ${mediaFrom.small`
    max-width: none;
    margin-right: 20px;
  `}
`;

export const TitleStyled = styled.h1.attrs(() => ({
  className: 'msd__checkout-card-text__title'
}))`
  margin: 0 auto 3px 0;

  font-weight: ${BoldFont};
  font-size: ${SmallFont};
  line-height: 15px;

  ${mediaFrom.small`
    font-size: ${MediumFont};
    line-height: 19px;
  `};
`;
export const DescriptionStyled = styled.h2.attrs(() => ({
  className: 'msd__checkout-card-text__description'
}))`
  font-size: ${TinyFont};
  font-weight: ${MediumFontWeight};
  line-height: 17px;
`;

export const PriceWrapperStyled = styled.div.attrs(() => ({
  className: 'msd__checkout-card-price__wrapper'
}))`
  display: flex;
  flex-direction: column;
  margin: auto 0 auto auto;
`;

export const TrialBadgeStyled = styled.div.attrs(() => ({
  className: 'msd__checkout-card-price__badge'
}))`
  width: 80px;
  padding: 4px 8px;
  margin-bottom: 4px;
  background-color: ${White};
  color: ${FontColor};
  border: 1px solid ${LineColor};
  border-radius: 10px;
  font-size: 9px;
  font-size: ${MicroFont};
  font-weight: ${MediumFontWeight};
  text-transform: uppercase;
`;
