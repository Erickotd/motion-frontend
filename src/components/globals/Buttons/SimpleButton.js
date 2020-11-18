import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  setColor,
  setRem,
  setFont,
  setShadow,
  setRadius,
} from '../../../styles';

const SimpleButton = ({ className, title, link }) => {
  return (
    <Link className={className} to={link}>
      {title}
    </Link>
  );
};

export default styled(SimpleButton)`
  padding: ${setRem(10)} ${setRem(27)};
  ${setRadius.round};
  font-size: ${setRem(12)};
  ${setFont.main};
  ${setShadow.light};
  text-decoration: none;
  text-transform: uppercase;
  color: ${setColor.mainBlack};
  background: ${setColor.mainWhite};
  opacity: 0.5;
  border: 1px solid rgba(0, 0, 0, 0.5);
  &:hover {
    background: ${setColor.mainBlack};
    color: ${setColor.mainWhite};
    opacity: 1;
  }
`;
