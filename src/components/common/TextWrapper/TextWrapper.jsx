import {
  LinkWrapper,
  MiniTitle,
  TextBox,
  TextLink,
  Title,
} from './TextWrapper.styled';

export const TextWrapper = () => {
  return (
    <TextBox>
      <div>
        <MiniTitle>new</MiniTitle>
        <Title>
          Spring Cushion
          <br />
          Collection 2019
        </Title>
        <LinkWrapper>
          <TextLink>buy now</TextLink>
        </LinkWrapper>
      </div>
    </TextBox>
  );
};
