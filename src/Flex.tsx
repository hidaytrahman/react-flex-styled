import React from 'react';
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  JustifyContent,
  FlexWrap,
} from './types';

import { FlexContainer } from './Flex.styles';

export interface FlexProps extends Omit<React.AllHTMLAttributes<any>, 'as'> {
  alignContent?: AlignContent;
  alignItems?: AlignItems;
  children?: React.ReactNode;
  direction?: FlexDirection;
  gap?: number;
  justifyContent?: JustifyContent;
  wrap?: FlexWrap;
  inline?: boolean;
  as?: React.ElementType;
}

export function Flex({
  wrap = 'nowrap',
  gap = 0,
  inline = false,
  children,
  ...props
}: FlexProps) {
  return <FlexContainer {...props}> {children}</FlexContainer>;
}
