import React from 'react';
// import ButtonProps from './type.ts';

interface InputProps {
  type?: 'success' | 'warning' | 'error';
  value?: string;
  placeholder?: string;
  password?: boolean;
  width?: number;
  onChange?: Function;
}
export default (props: InputProps) => {
  const {
    type = '',
    value = '',
    placeholder = '',
    password = false,
    width = null,
    onChange = () => {},
  } = props;
  return (
    <input
      type={password ? 'password' : 'text'}
      value={value}
      placeholder={placeholder}
      style={width ? { width: `${width}px` } : {}}
      className={`nes-input ${type && `is-${type}`}`}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );
};
