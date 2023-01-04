import styled from 'styled-components';
import * as colors from 'styles/variables';
import { media } from 'styles/BreakPoints';
import { ConfirmColor } from 'styles/variables';

export const WrapperStyled = styled.div.attrs(() => ({
  className: 'msd__custom-dropin--wrapper'
}))`
  max-width: 375px;
  margin: 0 auto;
  min-height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${({ isCardAvailable }) =>
    isCardAvailable ? '0 0 12px 12px' : '12px;'};
  background-color: ${colors.White};
  border: 1px solid
    ${({ isSelected }) => (isSelected ? ConfirmColor : '#D3DBE6')};
  cursor: ${({ fadeOutSection }) => (fadeOutSection ? 'default' : 'pointer')};
  opacity: ${({ fadeOutSection }) => (fadeOutSection ? '.2' : '1')};
`;

export const TextStyled = styled.div.attrs(() => ({
  className: 'msd__custom-dropin-text'
}))`
  max-width: 550px;
  margin: 0;
  padding: 16px;
  text-align: center;
  line-height: 1.4em;
  color: #00112c;
  font-size: 1em;
  font-weight: 400;
  display: flex;
  align-items: center;
  ${media.small`
    max-width: 400px;
  `}
`;

export const TitleStyled = styled.span.attrs(() => ({
  className: 'msd__custom-dropin-title'
}))`
  margin-left: 10px;
`;

export const IconWrapperStyled = styled.div.attrs(() => ({
  className: 'msd__custom-dropin--payment-icon'
}))`
  border: 1px solid #a9a9bf;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 26px;
  border-radius: 4px;
  svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const ChevronIconWrapperStyled = styled.div.attrs(() => ({
  className: 'msd__custom-dropin--arrow-icon'
}))`
  margin-left: auto;
  svg {
    rotate: ${({ isSelected }) => (isSelected ? '180deg' : 0)};
  }
`;