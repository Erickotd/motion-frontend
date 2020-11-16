import { css } from 'styled-components';

export const setColor = {
  primaryColor1: '#C468FF',
  primaryColor2: '#6E91F6',
  BorderBottomInput: 'solid rgba(149,149,149,0.21) 1.5px',
  mainWhite: '#F8F8F8',
  mainBlack: '#000000',
  mainGrey: '#ececec',
  lightGrey: '#f7f7f7',
  imageColor: 'linear-gradient(141deg, #c468ff 4%, #6e91f6 100%)',
};

export const setFont = {
  main: "font-family: 'Roboto', sans-serif;",
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
  return `display:flex;align-items:${y};justify-content:${x}`;
};

export const setHeroBackground = ({
  img = 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  color = 'rgba(0,0,0,0)',
} = {}) => {
  return `background: url(${img}) center/cover no-repeat;
      background-image: url(${img}), ${setColor.imageColor};`;
};

export const setFontWeight = {
  normal: 'font-weight: 500',
};

export const setBackground = {
  main: `background: linear-gradient(132.96deg, ${setColor.primaryColor1} 3.32%, ${setColor.primaryColor2} 100%);`,
  hover: `background: linear-gradient(110deg, rgba(201,60,243,0.76), rgba(71,109,226,0.78));`,
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};
export const setShadow = {
  light: 'box-shadow: 0px 10px 30px rgba(0,0,0,0.07)',
};
export const setRadius = {
  round: 'border-radius: 30px',
};

export const setBorder = ({
  width = '2px',
  style = 'solid',
  color = 'black',
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = 'all',
  time = '0.3s',
  timing = 'ease-in-out',
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};
