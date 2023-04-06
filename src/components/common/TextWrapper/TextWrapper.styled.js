import styled from 'styled-components';

export const TextBox = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;
  display: flex;
  width: 35%;
  height: 450px;
  max-width: 440px;
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 40px;
  padding-left: 40px;
  justify-content: flex-start;
  align-items: center;
  background-color: #b08ead;
`;

export const MiniTitle = styled.h2`
  margin-bottom: 10px;
  font-family: Roboto, sans-serif;
  color: #fff;
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-family: 'Cormorant Garamond', sans-serif;
  color: #fff;
  font-size: 45px;
  line-height: 55px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkWrapper = styled.div`
  margin-top: 20px;
`;

export const TextLink = styled.a`
  padding-bottom: 8px;
  border-bottom: 2px solid #fff;
  transition: opacity 200ms ease;
  font-family: Roboto, sans-serif;
  color: #fff;
  font-size: 13.5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;
