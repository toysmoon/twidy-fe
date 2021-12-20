import styled from '@emotion/styled';
import { colors } from 'shared/styles';

export const IconWrapper = styled.div`
  width: 56px;
  height: 56px;

  position: absolute;
  right: 20px;
  bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;

export const Background = styled.div<{ bg: string }>`
  position: relative;
  margin-bottom: 20px;

  border-radius: 12px;

  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(p) => p.bg});
  background-size: cover;
  background-position: center;
`;

export const ThumbName = styled.p`
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  color: ${colors.white};

  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ThumbWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export const ThumbSize = styled.div`
  padding-bottom: 50%;
`;
