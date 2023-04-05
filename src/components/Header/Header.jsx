import { NavMenu } from 'components/NavMenu/NavMenu';
import { Container } from '../common';
import { HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <NavMenu></NavMenu>
      </Container>
    </HeaderWrapper>
  );
};
