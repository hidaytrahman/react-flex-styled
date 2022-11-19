import React, { ReactNode } from 'react';
import { FlexContainer } from './Flex.styles';

export interface FlexProps {
  children: ReactNode
}

export function Flex({ children, ...props }: FlexProps) {
  return <FlexContainer {...props}> {children}</FlexContainer>;
}
