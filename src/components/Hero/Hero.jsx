import { Container } from 'components/common';
import { HeroBoxBottom, HeroBoxTop, HeroSection } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <HeroBoxTop />
      <HeroBoxBottom />
      <Container pos="relative"></Container>
    </HeroSection>
  );
};
