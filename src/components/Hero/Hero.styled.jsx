import styled from 'styled-components';

export const HeroSection = styled.section`
  position: relative;
  height: 100%;
  
  justify-content: space-between;
  flex-direction: column;
`;

export const HeroWrapper = styled.div`
  padding-top: 72px;
  padding-bottom: 70px;
`;

export const HeroBoxTop = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  height: 56%;
  background-color: #c9adc6;
`;

export const HeroBoxBottom = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 44%;
  background-color: #d6bbd3;
`;
