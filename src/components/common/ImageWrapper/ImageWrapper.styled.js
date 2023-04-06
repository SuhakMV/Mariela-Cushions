import styled from 'styled-components';
//import { heroOne, heroOneWebp } from '../../../db/images/hero'

export const ImageWrapper = styled.div`
  position: relative;
  right: -65px;
  width: 70%;
  height: 675px;
  background-image: url(${props => props.img});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
`;
