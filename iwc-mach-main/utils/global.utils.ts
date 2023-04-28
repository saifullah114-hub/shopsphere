import { css } from 'styled-components';
import { ThemeMap } from '../theme';

export const customScrollBarStyle = css`
  ::-webkit-scrollbar {
    height: 5px;
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(84, 105, 136, 0.6);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-button {
    height: 12px;
    width: 12px;
  }
`;

export const generateColor = (): string => {
  let rootColor = '';
  Object.keys(ThemeMap).forEach(
    key => (rootColor = rootColor + `${ThemeMap[key].variable} : ${ThemeMap[key].value};`)
  );
  return rootColor;
};

export const convertObjectOfObjectsToArray = (object) => {
  let mappedArray = [];
  for (const key in object) {
    if(object.hasOwnProperty(key)) {
      mappedArray.push({id: key, ...object[key]})
    }
  }
  return mappedArray;
};




