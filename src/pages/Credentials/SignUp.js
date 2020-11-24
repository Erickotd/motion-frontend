import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// imports for Redux
import { connect } from 'react-redux';
import { signupAction } from '../../store/actions/signupActions';

/* Styled components*/
import styled from 'styled-components';
import { setFlex, setRem } from '../../styles';

/* Images */
import user from '../../assets/svgs/user.svg';

/* Components */
import { MainButton, Title } from '../../components/globals';
import SimpleButton from '../../components/globals/Buttons/SimpleButton';
import {
  AuthInput,
  InputWrapper,
  LoginIcon,
} from '../../components/globals/Inputs';

const SignUp = ({ signupAction }) => {
  const { push } = useHistory();
  const [Loading, setLoading] = useState(false);
  const [UserEmail, setUserEmail] = useState({
    email: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await signupAction(UserEmail);
    if (response.status === 200) {
      push('/auth/signup/sent');
    } else {
      setLoading(false);
    }
  };

  const onChangeHandler = (event, property) => {
    const value = event.currentTarget.value;
    setUserEmail({ ...UserEmail, [property]: value });
  };

  return (
    <>
      <CredentialsHeader>
        <span>Don't have an account?</span>
        <SimpleButton title="Sign In" link="/auth/signin" />
      </CredentialsHeader>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <Title title="Sign up" />
          <InputWrapper>
            <LoginIcon src={user} alt="user icon" />
            <AuthInput
              type="email"
              placeholder="Email"
              name="email"
              value={UserEmail.email}
              onChange={(e) => onChangeHandler(e, 'email')}
            />
          </InputWrapper>
        </FormBody>
        <FormFooter>
          <MainButton title="Sign up" type="submit" loading={Loading} />
        </FormFooter>
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

export default connect(mapStateToProps, { signupAction })(SignUp);

const CredentialsHeader = styled.div`
  ${setFlex('flex-end', 'center')};
  padding: ${setRem(20)};
  span {
    margin-right: 17px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    padding-bottom: ${setRem(20)};
  }
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormFooter = styled.div`
  width: 100%;
  ${setFlex('center', 'center')};
  span {
    margin-right: 17px;
  }
`;
