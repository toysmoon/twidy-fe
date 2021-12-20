import styled from '@emotion/styled';
import { colors } from 'shared/styles';

export const Background = styled.div`
  height: 120px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    ${(p) => p.color} 100%
  );
`;

export const ColorWrapper = styled.div`
  height: 100px;
  background: ${(p) => p.color};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ColorButton = styled.div`
  flex: 0 0 auto;
  width: 40px;
  height: 40px;

  background: ${(p) => p.color};
  border: 4px solid ${colors.white};
  border-radius: 100%;

  scroll-snap-align: start;
`;
