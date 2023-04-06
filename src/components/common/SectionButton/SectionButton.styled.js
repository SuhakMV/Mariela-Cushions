import styled from 'styled-components';

export const LinkButton = styled.a`
  height: 45px;
  min-width: 110px;
  padding-top: 15px;
  padding-right: 28px;
  padding-left: 28px;
  border: 1px solid #b99bb6;
  border-radius: 25px;
  background-color: transparent;
  transition: background-color 200ms ease, color 200ms ease;
  font-family: Roboto, sans-serif;
  color: #b99bb6;
  font-size: 11px;
  line-height: 15px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
    &:hover {
        background-color: #b08ead;
        font-weight: 600;
        color: #fff;
    }
`;
