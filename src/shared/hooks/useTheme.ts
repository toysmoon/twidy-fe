import { useRecoilValue } from 'recoil';
import { userState } from 'shared/states/userState';
import { colors } from 'shared/styles';

export default function useTheme() {
  const user = useRecoilValue(userState);
  if (!user?.setting?.theme) {
    return colors.black;
  }

  return colorList[user?.setting?.theme];
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
