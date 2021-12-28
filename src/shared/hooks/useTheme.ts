import { useRecoilValue } from 'recoil';
import { themeState } from 'shared/states/themeState';
import { colors } from 'shared/styles';

export default function useTheme() {
  const theme = useRecoilValue(themeState);
  return colorList[theme];
}

export const colorList: Record<string, string> = {
  black: colors.black,
  violet: colors.violet,
  twitter: colors.twitter,
  mint: colors.mint,
  orange: colors.orange,
  heart: colors.heart,
  yellow: colors.yellow,
};
