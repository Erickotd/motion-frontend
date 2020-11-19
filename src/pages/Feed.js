import React from 'react';
import UserInfo from '../components/UserInfo';
import styled from 'styled-components';

const Feed = () => {
  return (
    <Wrapper>
      <UserInfo />
    </Wrapper>
  );
};

export default Feed;

const Wrapper = styled.div`
  border: solid blue;
  padding-top: 100px; /* Needs to be exactly the same height as the Header, offsets content because it's fixed */
`;
