import React from 'react';
import styled from 'styled-components';
import { media } from '../styles';
import { MainButton, Title } from '../components/globals';
import lock from '../assets/svgs/lock.svg';
import user from '../assets/svgs/user.svg';
import SimpleButton from '../components/globals/Buttons/SimpleButton';
import HeroImg from '../assets/images/background_image.png';
import {
  AuthInput,
  InputWrapper,
  LoginIcon,
} from '../components/globals/Inputs';
import Hero from '../components/globals/Hero';

const Login = ({ className }) => {
  return (
    <main className={className}>
      <Hero className="brand" img={HeroImg} />
      <section className="access">
        <div className="signUp">
          <span>Don't have an account?</span>
          <SimpleButton title="Sign Up" />
        </div>
        <div className="signIn">
          <Title title="Sign in" center />
          <InputWrapper>
            <LoginIcon src={user} alt="user icon" />
            <AuthInput type="text" placeholder="Username" name="username" />
          </InputWrapper>
          <InputWrapper>
            <LoginIcon src={lock} alt="lock icon" />
            <AuthInput type="password" placeholder="Password" name="password" />
          </InputWrapper>
          <MainButton title="Sign in" />
        </div>
      </section>
    </main>
  );
};

export default styled(Login)`
  section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 100vh;
  }
  .brand {
    display: none;
  }
  ${media.tablet`
    .brand {
      display: initial;
    }
    display: grid;
    grid-template-columns:repeat(2,1fr);
  `};
  .signUp {
    align-self: flex-end;
    margin-right: 40px;
    margin-top: 40px;
    margin-bottom: 128px;
    span {
      margin-right: 17px;
    }
  }
  .signIn {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-bottom: 65px;
    }
    button {
      margin-top: 168px;
    }
  }
`;
