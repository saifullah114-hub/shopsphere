import theme from '../../theme';
import { BUTTON_KIND } from './index';

const getLoaderColor = (kind: BUTTON_KIND | string) => {
  switch(kind) {
    case BUTTON_KIND.PRIMARY:
      return theme.color.white;
    case BUTTON_KIND.SECONDARY:
      return theme.color.grey2;
    case BUTTON_KIND.DANGER_PRIMARY:
      return theme.color.red01;
    default:
      return theme.color.primary01;
  }
}

export const loaderStyle = (kind: BUTTON_KIND | string) => {
  const color = getLoaderColor(kind);
  return {
    large: {
      width: 16,
      height: 16,
      color
    },
    medium: {
      width: 14,
      height: 14,
      color
    },
    small: {
      width: 12,
      height: 12,
      color
    }
  };
};
