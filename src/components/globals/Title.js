import React from 'react';
import styled from 'styled-components';
import { setColor, setRem, setFont, setFontWeight } from '../../styles';

const Title = ({ className, title }) => {
  return <h2 className={className}>{title}</h2>;
};

export default styled(Title)`
  font-size: ${setRem(40)};
  text-transform: capitalize;
  ${setFontWeight.normal}
  ${setFont.main};
  color: ${setColor.mainBlack};
`;
