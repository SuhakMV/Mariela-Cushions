import { SliderWrapper, ArrowSlider } from './Slider.styled';

export const Slider = () => {
  return (
    <SliderWrapper>
      <ArrowSlider arrow="'<'" bgc="#a78ba4" />
      <ArrowSlider arrow="'>'" bgc="#b08ead" />
    </SliderWrapper>
  );
};
