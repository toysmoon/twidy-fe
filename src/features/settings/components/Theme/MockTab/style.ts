import styled from '@emotion/styled';
import { colors } from 'shared/styles';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Ul = styled.ul`
  width: 294px;
  height: 42px;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  list-style: none;

  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.15) 50%
  );
  border-radius: 100px;
`;

export const Item = styled.li<{ isSelected: boolean }>`
  width: 143px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background-color: ${(p) => (p.isSelected ? colors.white : 'transparent')};

  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: ${colors.gray1};
`;
