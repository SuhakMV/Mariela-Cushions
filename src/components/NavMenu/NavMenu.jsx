import { NavMenuLink, NavList } from './NavMenu.styled';

export const NavMenu = () => {
  return (
    <NavList>
      <NavMenuLink>Home</NavMenuLink>
      <NavMenuLink>Aboute me</NavMenuLink>
      <NavMenuLink>Products</NavMenuLink>
      <NavMenuLink>Contact me</NavMenuLink>
    </NavList>
  );
};
