import { Container, LinkButton, SectionText } from 'components/common';
import { ContentBox, ContentWrapper } from './Content.styled';
import { SectionTitle } from 'components/common/SectionTitle/SectionTitle';

export const Content = () => {
  return (
    <ContentWrapper>
      <Container>
        <SectionTitle>I'm a cushion designer</SectionTitle>
        <ContentBox>
          <SectionText mgbt="20px">
            Based in San Francisco, California I design trendy and fashion
            Cushions, since I have memory I always had a tendency to design and
            illustration.
          </SectionText>
          <LinkButton>Learn More</LinkButton>
        </ContentBox>
      </Container>
    </ContentWrapper>
  );
};
