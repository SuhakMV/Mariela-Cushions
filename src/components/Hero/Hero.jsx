import { Container, ImageWrapper, TextWrapper, Slider } from 'components/common';
import {
  HeroBoxBottom,
  HeroBoxTop,
  HeroSection,
  HeroWrapper,
} from './Hero.styled';
import { heroOneWebp, heroOneJpg} from '../../db/images';

//const heroOne = heroOneWebp || heroOneJpg;

export const Hero = () => {
  return (
    <HeroSection>
      <HeroBoxTop />
      <HeroBoxBottom />
      <Container pos="relative">
        <HeroWrapper>
          <ImageWrapper img={`${heroOneWebp || heroOneJpg}`} />
          <TextWrapper />
          <Slider />
        </HeroWrapper>
      </Container>
    </HeroSection>
  );
};
