import React from 'react';
import styled from 'styled-components';

export class Loading extends React.PureComponent {

  render() {
    const { size, color } = this.props;

    return (
      <Container className="center" size={size}>
        <Circle1 className="circle" size={size} color={color} />
        <Circle2 className="circle" size={size} color={color} />
        <Circle3 className="circle" size={size} color={color} />
        <Circle4 className="circle" size={size} color={color} />
      </Container>
    );
  }
}

Loading.defaultProps = {
  size: '100px',
  color: 'black',
};

const Container = styled.div`
  position: relative;

  width: ${props => props.size};
  height: ${props => props.size};
`;

const Circle1 = styled.div`
  position: absolute;

  border: ${props => `${parseInt(props.size, 10) * 0.05}px`} solid
    ${props => props.color};
  border-radius: 150% 107% 99% 120%;
  width: 70%;
  height: 80%;

  animation: spin 1.5s infinite ease-out;

  @keyframes spin {
    0% {
      transform: translateX(-0%) rotate(0deg);
    }
    100% {
      transform: translateX(-0%) rotate(360deg);
    }
  }
`;

const Circle2 = styled.div`
  position: absolute;

  border: ${props => `${parseInt(props.size, 10) * 0.05}px`} solid
    ${props => props.color};
  border-radius: 100% 100% 100% 100%;
  width: 90%;
  height: 70%;

  animation: spin 2s infinite ease-out;

  @keyframes spin {
    0% {
      transform: translateX(-0%) rotate(0deg);
    }
    100% {
      transform: translateX(-0%) rotate(360deg);
    }
  }
`;

const Circle3 = styled.div`
  position: absolute;

  border: ${props => `${parseInt(props.size, 10) * 0.05}px`} solid
    ${props => props.color};
  border-radius: 20% 50% 20% 90%;
  width: 60%;
  height: 75%;

  animation: spin 1.7s infinite ease-out;

  @keyframes spin {
    0% {
      transform: translateX(-0%) rotate(0deg);
    }
    100% {
      transform: translateX(-0%) rotate(360deg);
    }
  }
`;

const Circle4 = styled.div`
  position: absolute;

  border: ${props => `${parseInt(props.size, 10) * 0.05}px`} solid
    ${props => props.color};
  border-radius: 50% 20% 88% 25%;
  width: 75%;
  height: 60%;

  animation: spin 1.3s infinite ease-out;

  @keyframes spin {
    0% {
      transform: translateX(-0%) rotate(0deg);
    }
    100% {
      transform: translateX(-0%) rotate(360deg);
    }
  }
`;
