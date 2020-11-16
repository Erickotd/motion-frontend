import React from 'react';
import styled from 'styled-components';
import {
  setColor,
  setRem,
  setFont,
  setShadow,
  setRadius,
  setBackground,
} from '../../../styles';

const MainButton = ({ className, title }) => {
  return <button className={className}>{title}</button>;
};

export default styled(MainButton)`
  width: ${setRem(280)};
  height: ${setRem(60)};
  ${setRadius.round};
  ${setShadow.light};
  text-transform: uppercase;
  ${setBackground.main};
  color: ${setColor.mainWhite};
  font-size: ${setRem(12)};
  border: none;
  ${setFont.main};
  &:hover {
    ${setBackground.hover};
  }
  text-decoration: none;
  cursor: pointer;
`;
