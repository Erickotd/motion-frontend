import React from 'react';
import styled from 'styled-components';
import {
  setColor,
  setRem,
  setFont,
  setShadow,
  setRadius,
} from '../../../styles';

const SimpleButton = ({ className, title }) => {
  return <button className={className}>{title}</button>;
};

export default styled(SimpleButton)`
  width: ${setRem(120)};
  height: ${setRem(40)};
  ${setRadius.round};
  text-transform: uppercase;
  font-size: ${setRem(12)};
  ${setFont.main};
  ${setShadow.light};
  border: 1px solid rgba(0, 0, 0, 0.5);
  &:hover {
    background: ${setColor.mainBlack};
    color: ${setColor.mainWhite};
    opacity: 1;
  }
`;
