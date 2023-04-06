import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  max-width: 1265px;
  position: ${props => (props.pos || "static")};
`;
