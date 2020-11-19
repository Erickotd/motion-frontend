import React from 'react';
import { Route } from 'react-router-dom';

/* Styled Components */
import styled from 'styled-components';
import { media } from '../../styles';

/* Images */
import HeroImg from '../../assets/images/background_image.png';

/* Components */
import { Hero } from '../../components/globals';
import { Login, SignUp, Confirmation, Verification } from '../index';
import Error from '../Error';

const Credentials = (props) => {
  return (
    <CredentialsWrapper>
      <Hero img={HeroImg} />
      <RightContainer>
        <Route path="/auth/login" exact component={Login} />
        <Route path="/auth/signup" exact component={SignUp} />
        <Route path="/auth/signup/sent" exact component={Confirmation} />
        <Route path="/auth/signup/validation" exact component={Verification} />
        <Route path="*">
          <Error />
        </Route>
      </RightContainer>
    </CredentialsWrapper>
  );
};

export default Credentials;

const CredentialsWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: white;
`;

const RightContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${media.tablet`
      width: 60%;
  `};
`;
