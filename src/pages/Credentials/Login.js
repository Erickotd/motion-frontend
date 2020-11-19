import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// imports for Redux
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/loginActions';

/* Styled components*/
import styled from 'styled-components';

/* Images */
import lock from '../../assets/svgs/lock.svg';
import user from '../../assets/svgs/user.svg';

/* Components */
import { MainButton, Title } from '../../components/globals';
import SimpleButton from '../../components/globals/Buttons/SimpleButton';
import {
  AuthInput,
  InputWrapper,
  LoginIcon,
} from '../../components/globals/Inputs';

const Login = ({ loginAction }) => {
  const { push } = useHistory();
  const [Loading, setLoading] = useState(false);
  const [UserAccesInfo, setUserAccesInfo] = useState({
    email: 'ninecab303@pidouno.com',
    password: 'cxyaq123',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await loginAction(UserAccesInfo);
    if (response.status === 200) {
      push('/');
    } else {
      setLoading(false);
    }
  };

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserAccesInfo({ ...UserAccesInfo, [property]: value });
  };

  return (
    <>
      <Header>
        <span>Don't have an account?</span>
        <SimpleButton title="Sign Up" link="/auth/signup" />
      </Header>
      <Form onSubmit={handleSubmit}>
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
        <MainButton title="Sign in" type="submit" loading={Loading} />
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.loginReducer.error,
    authenticated: state.loginReducer.authenticated,
  };
};

export default connect(mapStateToProps, { loginAction })(Login);

const Header = styled.div`
  align-self: flex-end;
  margin-right: 40px;
  margin-top: 40px;
  margin-bottom: 128px;
  span {
    margin-right: 17px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin-bottom: 65px;
  }
  button {
    margin-top: 168px;
  }
`;
