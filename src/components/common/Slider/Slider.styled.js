import styled from 'styled-components';

export const SliderWrapper = styled.div`
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    height: 50px;
`;

export const ArrowSlider = styled.div`
    height: 100%;
    width: 50px;
    padding: 10px 17px;
    font-size: 22px;
    line-height: 1.1;
    color: white;

    background-color: ${props => props.bgc};
    transition: opacity 200ms ease;
    cursor: pointer;

    &::before {
    content: ${props => props.arrow};
  };
    &:hover, &:focus {
        opacity: 0.8;
    }
`;
