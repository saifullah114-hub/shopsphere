import { DefaultTheme } from 'styled-components';
import { isServer } from './utils/isServer';

type IwcColors =
  | PrimaryColors
  | SecondaryColors
  | TealColors
  | OtherColors
  | overLayColors;
type ColorsType = Record<IwcColors, any>;
interface Theme extends DefaultTheme {
  direction: 'ltr' | 'rtl';
  setDirection: (dir: 'ltr' | 'rtl') => void;
  color: ColorsType & Record<string, any>;
  shadow: Record<string, any>;
}

export enum PrimaryColors {
  primary01 = 'primary01',
  primaryColor20 = 'primaryColor20',
  teal1 = 'teal1',
  teal2 = 'teal2',
  teal3 = 'teal3',
  teal4 = 'teal4',
  teal5 = 'teal5'
}

export enum SecondaryColors {
  grey1 = 'grey1',
  grey2 = 'grey2',
  grey3 = 'grey3',
  grey4 = 'grey4',
  grey5 = 'grey5',
  grey6 = 'grey6'
}

export enum TealColors {
  teal1 = 'teal1',
  teal2 = 'teal2',
  teal3 = 'teal3',
  teal4 = 'teal4',
  teal5 = 'teal5'
}

export enum OtherColors {
  white = 'white',
  red01 = 'red01',
  red02 = 'red02',
  red03 = 'red03',
  red04 = 'red04',
  red05 = 'red05',
  red100 = 'red100',
  green01 = 'green01',
  green02 = 'green02',
  green03 = 'green03',
  green100 = 'green100',
  orange03 = 'orange03',
  supportingOrange = 'supportingOrange',
  lightOrange100 = 'lightOrange100',
  lightOrange = 'lightOrange',
  warningOrange = 'warningOrange',
  orange100 = 'orange100',
  yellow01 = 'yellow01',
  yellow02 = 'yellow02',
  yellow03 = 'yellow03',
  yellow04 = 'yellow04',
  blue100 = 'blue100',
  darkBlue100 = 'darkBlue100',
  ultraBlue = 'ultraBlue',
  bahamaBlue100 = 'bahamaBlue100',
  lightBlue100 = 'lightBlue100',
  overLayColor = 'overLayColor',
  black = 'black',
  black20 = 'black20',
  backgroundTransparent = 'backgroundTransparent',
  loadedColor = 'loadedColor',
  faceIdBoxColor = 'faceIdBoxColor',
  overLayColor2 = 'overLayColor2',
  boxShadowColor = 'boxShadowColor',
  tooltipBoxShadowColor = 'tooltipBoxShadowColor',
  heidelberg100 = 'heidelberg100',
  cranberry = 'cranberry',
  blackShade2 = 'blackShade2'
}

export enum overLayColors {
  modalOverlay = 'modalOverlay',
  blueDark = 'blueDark',
  moonstone1 = 'moonstone1'
}

export type ThemeMapType = {
  [colorKey in IwcColors]: {
    variable: string;
    value: string;
  };
};
export const fontFamily = {
  variable: '--font-family',
  value: 'proxima-nova'
};

// add type here
export const ThemeMap: ColorsType = {
  primary01: {
    variable: '--color-iwc-primary-01',
    value: '#3BB3C3'
  },
  primaryColor20: {
    variable: '--color-iwc-primary-20',
    value: '#3BB3C433'
  },
  teal1: {
    variable: '--color-iwc-teal-01',
    value: '#004951'
  },
  teal2: {
    variable: '--color-iwc-teal-02',
    value: '#006E7F'
  },
  teal3: {
    variable: '--color-iwc-teal-03',
    value: '#A5D2D6'
  },
  teal4: {
    variable: '--color-iwc-teal-04',
    value: '#D3EAEC'
  },
  teal5: {
    variable: '--color-iwc-teal-05',
    value: '#F1FAFB'
  },
  grey1: {
    variable: '--color-iwc-grey-01',
    value: '#061238'
  },
  grey2: {
    variable: '--color-iwc-grey-02',
    value: '#546988'
  },
  grey3: {
    variable: '--color-iwc-grey-03',
    value: '#B2C7D7'
  },
  grey4: {
    variable: '--color-iwc-grey-04',
    value: '#DAE6EF'
  },
  grey5: {
    variable: '--color-iwc-grey-05',
    value: '#F4F8FA'
  },
  grey6: {
    variable: '--color-iwc-grey-06',
    value: '#6F8CA9'
  },
  white: {
    variable: '--color-iwc-white',
    value: '#FFFFFF'
  },

  red100: {
    variable: '--color-iwc-red-100',
    value: '#FD7873'
  },

  red01: {
    variable: '--color-iwc-red-01',
    value: '#E94235'
  },
  red02: {
    variable: '--color-iwc-red-02',
    value: '#F4A09A'
  },
  red03: {
    variable: '--color-iwc-red-03',
    value: '#FDECEB'
  },
  red04: {
    variable: '--color-iwc-red04',
    value: '#ED685D'
  },
  red05: {
    variable: '--color-iwc-red05',
    value: '#FF9973'
  },

  green01: {
    variable: '--color-iwc-green-01',
    value: '#34A853' //'#16C79A',
  },
  green02: {
    variable: '--color-iwc-green-02',
    value: '#99D3A9'
  },
  green03: {
    variable: '--color-iwc-green-03',
    value: '#EBF6EE'
  },
  green100: {
    variable: '--color-iwc-green-100',
    value: '#1EB290'
  },

  orange03: {
    // summary tiles //out side figma palette
    variable: '--color-iwc-orange-03',
    value: '#FEF6F4'
  },
  lightOrange100: { variable: '--color-iwc-light-orange-100', value: '#F24822' },
  supportingOrange: {
    // out side figma palette
    variable: '--color-iwc-orange-support',
    value: '#F24822'
  },
  warningOrange: { variable: '--color-iwc-warning-orange', value: '#F6BE50' },
  lightOrange: {
    variable: '--color-iwc-orange-light',
    value: '#FF7F50'
  },
  orange100: {
    variable: '--color-iwc-orange-100',
    value: '#FFAC4F'
  },
  yellow01: {
    variable: '--color-iwc-yellow-01',
    value: '#FFA900'
  },
  yellow02: {
    variable: '--color-iwc-yellow-02',
    value: '#FFD480'
  },
  yellow03: {
    variable: '--color-iwc-yellow-03',
    value: '#FFF6E6'
  },
  yellow04: {
    variable: '--color-iwc-yellow-04',
    value: '#F8CB73'
  },

  blue100: {
    variable: '--color-iwc-blue-100',
    value: '#3E7BFA'
  },
  darkBlue100: {
    variable: '--color-iwc-dark-blue-100',
    value: '#486AAC'
  },
  ultraBlue: {
    variable: '--color-iwc-ultra-blue',
    value: '#0A306A'
  },
  bahamaBlue100: {
    variable: '--color-iwc-bahama-blue-100',
    value: '#01579B'
  },

  lightBlue100: {
    variable: '--color-iwc-light-blue-100',
    value: '#669DF6'
  },
  overLayColor: {
    variable: '--color-iwc-overLay-color',
    value: '#E5E5E580'
  },
  overLayColor2: {
    variable: '--color-iwc-overLay-color-2',
    value: '#0612384D'
  },
  black: {
    variable: '--color-iwc-black',
    value: '#000000'
  },
  black20: { variable: '--color-iwc-black-20', value: '#00000033' },
  backgroundTransparent: {
    variable: '--color-iwc-background-transparent-color',
    value: '#00000030'
  },

  loadedColor: {
    variable: '--color-iwc-loaded-color',
    value: '#969794'
  },
  faceIdBoxColor: {
    variable: '--color-iwc-faceId-box-color',
    value: '#59ADFF'
  },
  boxShadowColor: {
    variable: '--color-iwc-boxShadow-color',
    value: '#5A6A9D33'
  },
  tooltipBoxShadowColor: {
    variable: '--color-iwc-tooltip-boxShadow-color',
    value: '#5469881F'
  },
  modalOverlay: {
    variable: '--color-iwc-modal-overlay',
    value: 'rgba(6, 18, 56, 0.3)'
  },
  blueDark: { variable: '--color-iwc-blue-dark', value: '#0B3048' },
  moonstone1: { variable: '--color-iwc-moon-stone-1', value: '#3BB3C4' },
  heidelberg100: {
    variable: '--color-iwc-heidelberg-100',
    value: '#EA3546'
  },
  cranberry: {
    variable: '--color-iwc-cranberry',
    value: '#E84C68'
  },
  blackShade2: {
    variable: '--color-iwc-blackShade2',
    value: '#1A1A1A'
  }
};

const theme: Theme = {
  direction: isServer() ? 'ltr' : window['direction'] || 'ltr',
  setDirection: dir => (theme.direction = dir),
  color: {
    primary01: `var(${ThemeMap.primary01.variable})`,
    primaryColor20: `var(${ThemeMap.primaryColor20.variable})`,

    teal1: `var(${ThemeMap.teal1.variable})`,
    teal2: `var(${ThemeMap.teal2.variable})`,
    teal3: `var(${ThemeMap.teal3.variable})`,
    teal4: `var(${ThemeMap.teal4.variable})`,
    teal5: `var(${ThemeMap.teal5.variable})`,

    grey1: `var(${ThemeMap.grey1.variable})`,
    grey2: `var(${ThemeMap.grey2.variable})`,
    grey3: `var(${ThemeMap.grey3.variable})`,
    grey4: `var(${ThemeMap.grey4.variable})`,
    grey5: `var(${ThemeMap.grey5.variable})`,
    grey6: `var(${ThemeMap.grey6.variable})`,

    white: `var(${ThemeMap.white.variable})`,

    green01: `var(${ThemeMap.green01.variable})`,
    green02: `var(${ThemeMap.green02.variable})`,
    green03: `var(${ThemeMap.green03.variable})`,
    green100: `var(${ThemeMap.green100.variable})`,

    red100: `var(${ThemeMap.red100.variable})`,
    red01: `var(${ThemeMap.red01.variable})`,
    red02: `var(${ThemeMap.red02.variable})`,
    red03: `var(${ThemeMap.red03.variable})`,
    red04: `var(${ThemeMap.red04.variable})`,
    red05: `var(${ThemeMap.red05.variable})`,

    orange03: `var(${ThemeMap.orange03.variable})`,
    supportingOrange: `var(${ThemeMap.supportingOrange.variable})`,
    lightOrange100: `var(${ThemeMap.lightOrange100.variable})`,
    lightOrange: `var(${ThemeMap.lightOrange.variable})`,
    warningOrange: `var(${ThemeMap.warningOrange.variable})`,
    orange100: `var(${ThemeMap.orange100.variable})`,

    yellow01: `var(${ThemeMap.yellow01.variable})`,
    yellow02: `var(${ThemeMap.yellow02.variable})`,
    yellow03: `var(${ThemeMap.yellow03.variable})`,
    yellow04: `var(${ThemeMap.yellow04.variable})`,

    // map colors
    ultraBlue: `${ThemeMap.ultraBlue.value}`,
    darkBlue100: `${ThemeMap.darkBlue100.value}`,
    bahamaBlue100: `${ThemeMap.bahamaBlue100.value}`,
    lightBlue100: `${ThemeMap.lightBlue100.value}`,

    // modal background overlay colors
    overLayColor: `var(${ThemeMap.overLayColor.variable})`,
    overLayColor2: `var(${ThemeMap.overLayColor2.variable})`,

    // for motion status colors
    blue100: `var(${ThemeMap.blue100.variable})`,
    heidelberg100: `var(${ThemeMap.heidelberg100.variable})`,

    // for video player and faq
    black: `var(${ThemeMap.black.variable})`,
    black20: `var(${ThemeMap.black20.variable})`,
    backgroundTransparent: `var(${ThemeMap.backgroundTransparent.variable})`,
    loadedColor: `var(${ThemeMap.loadedColor.variable})`,
    faceIdBoxColor: `var(${ThemeMap.faceIdBoxColor.variable})`,
    boxShadowColor: `var(${ThemeMap.boxShadowColor.variable})`,
    tooltipBoxShadowColor: `var(${ThemeMap.tooltipBoxShadowColor.variable})`,
    modalOverlay: `var(${ThemeMap.modalOverlay.variable})`,
    blueDark: `var(${ThemeMap.blueDark.variable})`,
    moonstone1: `var(${ThemeMap.moonstone1.variable})`,
    cranberry: `var(${ThemeMap.cranberry.variable})`,
    blackShade2: `var(${ThemeMap.blackShade2.variable})`
  },
  shadow: {
    elevation00: `inset 0px 0.5px 4px`,
    elevation01: `0px 1px 3px`,
    elevation02: `0px 1px 7px`,
    elevation03: `0px 2px 6px`,
    elevation04: `0px 3px 16px`,
    elevation05: `0px 16px 24px`,
    elevation06: `0px 7px 37px`,
    elevation07: `0px 3px 9px`,
    elevation08: `0px 2px 20px`,
    elevation09: `0px 0px 12px 0px`,
    elevation10: `0px 2px 24px 0px`
  }
};

export default theme;
