import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';
import {
  setColor,
  setRem,
  setFont,
  setShadow,
  setRadius,
  setBackground,
} from '../../../styles';

const MainButton = ({ className, title, loading = false, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {loading ? <FaSpinner /> : title}
    </button>
  );
};

export default styled(MainButton)`
  width: ${setRem(280)};
  height: ${setRem(60)};
  ${setRadius.round};
  ${setShadow.light};
  text-transform: uppercase;
  ${setBackground.main};
  color: ${setColor.mainWhite};
  font-size: ${setRem(14)};
  border: none;
  ${setFont.main};
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    ${setBackground.hover};
  }
  text-decoration: none;
  cursor: pointer;
`;
