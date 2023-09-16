import { CSSProperties } from 'react';
import styled from 'styled-components/macro';

export interface FlexContainerProps extends CSSProperties {
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  [key: string]: any;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: ${({ inline }) => (!!inline ? 'inline-flex' : 'flex')};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};

  gap: ${({ gap }) => gap}px;
`;
