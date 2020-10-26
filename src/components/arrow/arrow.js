import React from 'react';
import styled from 'styled-components';
import './style.css';

export class Arrow extends React.PureComponent {

  render() {
    const { size, ...props } = this.props;

      return (
            <StyledButton className="nav" type="button" size={size} {...props} >

              <span />
              <span />
              <span />

            </StyledButton>
      );
  }
}

Arrow.defaultProps = {
  size: '30px',
};

const StyledButton = styled.button`
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;

  position: relative;

  width: ${props => props.size};
  height: ${props => props.size};

`