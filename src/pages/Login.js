import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// imports for Redux
import { connect } from 'react-redux';

/* Styled components*/
import styled from 'styled-components';

/* Images */
import lock from '../assets/svgs/lock.svg';
import user from '../assets/svgs/user.svg';
import HeroImg from '../assets/images/background_image.png';

import { MainButton, Title, Hero } from '../components/globals';
import { loginAction } from '../store/actions/loginActions';
import { media } from '../styles';
import SimpleButton from '../components/globals/Buttons/SimpleButton';
import {
  AuthInput,
  InputWrapper,
  LoginIcon,
} from '../components/globals/Inputs';

const Login = ({ className, loginAction }) => {
  const history = useHistory();
  const [UserAccesInfo, setUserAccesInfo] = useState({
    email: 'ninecab303@pidouno.com',
    password: 'cxyaq123',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginAction(UserAccesInfo);
    if (response.status === 200) history.push('/');
  };

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserAccesInfo({ ...UserAccesInfo, [property]: value });
  };

  return (
    <main className={className}>
      <Hero className="brand" img={HeroImg} />
      <section className="access">
        <div className="signUp">
          <span>Don't have an account?</span>
          <SimpleButton title="Sign Up" />
        </div>
        <form className="signIn" onSubmit={handleSubmit}>
          <Title title="Sign in" />
          <InputWrapper>
            <LoginIcon src={user} alt="user icon" />
            <AuthInput
              type="email"
              placeholder="Email"
              name="email"
              value={UserAccesInfo.email}
              onChange={(e) => onChangeHandler(e, 'email')}
            />
          </InputWrapper>
          <InputWrapper>
            <LoginIcon src={lock} alt="lock icon" />
            <AuthInput
              type="password"
              placeholder="Password"
              name="password"
              value={UserAccesInfo.password}
              onChange={(e) => onChangeHandler(e, 'password')}
            />
          </InputWrapper>
          <MainButton title="Sign in" type="submit" />
        </form>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
  };
};

export default styled(connect(mapStateToProps, { loginAction })(Login))`
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
