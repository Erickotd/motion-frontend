import styled from 'styled-components';
import { setHeroBackground } from '../../styles';

const Hero = styled.section`
  height: 100vh;
  ${(props) => setHeroBackground({ img: props.img })};
`;

export default Hero;
