import styled from 'styled-components';
import { colors } from '../../styles/CSSConstants';

export type ColorType = 'primary' | 'secondary';

const Primary = {
  NORMAL:colors.PRIMARY_NORMAL,
  HOVER:colors.PRIMARY_HOVER,
  PRESSED:colors.PRIMARY_PRESSED,
  DISABLED:colors.PRIMARY_DISABLED,
  TEXT:colors.WHITE,
}

const Secondary = {
  NORMAL:colors.SECONDARY_NORMAL,
  HOVER:colors.SECONDARY_HOVER,
  PRESSED:colors.SECONDARY_PRESSED,
  DISABLED:colors.SECONDARY_DISABLED,
  TEXT:colors.BLACK,
}

const getColors = (color: ColorType) => {
  switch (color) {
    case 'primary':
      return Primary;
    case 'secondary':
      return Secondary;
    default:
      return Primary;
  }
}

interface ContainerProps {
  color: ColorType;
  icon?: string;
}

export const Container = styled.button<ContainerProps>`
  align-items: center;
  background-color: ${({ color }) => getColors(color).NORMAL};
  border: none;
  color: ${({ color }) => getColors(color).TEXT};
  cursor: pointer;
  display: flex;
  font: 16px 'Inter', sans-serif;
  font-weight: 400;
  height: 56px;
  justify-content: ${({ icon }) => icon ? 'space-between' : 'center'};
  line-height: 24px;
  padding: 19px 1rem 20px;
  min-width: 311px;
  width: 100%;

  &:hover {
    background-color: ${({ color }) => getColors(color).HOVER};
  }
  
  &:active {
    background-color: ${({ color }) => getColors(color).PRESSED};
  }

  &:disabled {
    background-color: ${({ color }) => getColors(color).DISABLED};
  }
`
