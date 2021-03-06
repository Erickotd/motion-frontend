import React from 'react';
import { useHistory } from 'react-router-dom';

/* Styled components*/
import styled from 'styled-components';
import { setFlex, setRem } from '../../styles';

/* Images */
import checked from '../../assets/images/checked.png';

/* Components */
import { MainButton, Title } from '../../components/globals';

const Confirmation = () => {
  const { push } = useHistory();
  return (
    <>
      <CredentialsHeader />
      <Congratulations>
        <FormBody>
          <Title title="Congratulations" />
          <img src={checked} alt="checked icon" />
          <p>We've have send a confirmation code to your email</p>
        </FormBody>
        <FormFooter>
          <MainButton
            title="countinue"
            type="button"
            onClick={() => {
              push('/auth/signup/validation');
            }}
          />
        </FormFooter>
      </Congratulations>
    </>
  );
};

export default Confirmation;

const CredentialsHeader = styled.div`
  ${setFlex('flex-end', 'center')};
  padding: ${setRem(20)};
  span {
    margin-right: 17px;
  }
`;

const Congratulations = styled.div`
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
  img {
    width: ${setRem(200)};
    padding-bottom: ${setRem(40)};
  }
  p {
    opacity: 0.6;
    font-size: ${setRem(18)};
    line-height: ${setRem(24)};
  }
`;

const FormFooter = styled.div`
  width: 100%;
  ${setFlex('center', 'center')};
  span {
    margin-right: 17px;
  }
`;
