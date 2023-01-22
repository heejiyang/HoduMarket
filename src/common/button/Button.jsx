import React from 'react';
import Button from './Button.Style';

const Button = ({ size, type, isActive, txtColor, onClick, disabled, tit }) => {
  return (
    <Btn
      size={size}
      type={type}
      isActive={isActive}
      txtColor={txtColor}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{tit}</span>
    </Btn>
  );
};

export default Button;
