import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '200px';
      case 'm':
        return '480px';
      case 'ms':
        return '168px';
      case 's':
        return '80px';
      default:
        return '480px';
    }
  }};

  height: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '68px';
      case 'm':
        return '60px';
      case 'ms':
        return '54px';
      case 's':
        return '40px';
      default:
        return '60px';
    }
  }};

  border: ${(props) =>
    props.txtColor === 'var(--sub-text-color)'
      ? '1px solid var(--main-disabled-color)'
      : 'none'};

  border-radius: 5px;

  font-size: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '24px';
      case 'm':
        return '18px';
      case 'ms':
        return '16px';
      case 's':
        return '16px';
      default:
        return '18px';
    }
  }};

  font-weight: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '700';
      case 'm':
        return '700';
      case 'ms':
        return '500';
      case 's':
        return '500';
      default:
        return '700';
    }
  }};

  background-color: ${(props) => {
    switch (props.isActive) {
      case 'true':
        return 'var(--main-color)';
      case 'false':
        return 'var(--main-disabled-color)';
      default:
        return '#fff';
    }
  }};

  color: ${(props) =>
    props.txtColor === 'var(--sub-text-color)'
      ? 'var(--sub-text-color)'
      : '#fff'};
`;

export default Button;
