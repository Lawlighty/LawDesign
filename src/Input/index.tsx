/*
 * @Date: 2022-08-16 08:38:23
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 16:38:22
 * @FilePath: \lawDesgin\src\Input\index.tsx
 * @Description:
 */
import React from 'react';
// import ButtonProps from './type.ts';

interface InputProps {
  type?: 'success' | 'warning' | 'error';
  value?: string;
  placeholder?: string;
  password?: boolean;
  textarea?: boolean;
  rows?: number;
  dark?: boolean;
  width?: number;
  onChange?: Function;
}
export default (props: InputProps) => {
  const {
    type = '',
    value = '',
    placeholder = '',
    password = false,
    dark = false,
    textarea = false,
    rows = 4,
    width = null,
    onChange = () => {},
  } = props;
  return (
    <>
      {textarea ? (
        <textarea
          value={value}
          placeholder={placeholder}
          style={width ? { width: `${width}px` } : {}}
          className={`nes-textarea ${type && `is-${type}`} ${
            dark && `is-dark`
          }`}
          rows={rows}
          onChange={(e) => {
            onChange(e);
          }}
        />
      ) : (
        <input
          type={password ? 'password' : 'text'}
          value={value}
          placeholder={placeholder}
          style={width ? { width: `${width}px` } : {}}
          className={`nes-input ${type && `is-${type}`} ${dark && `is-dark`}`}
          onChange={(e) => {
            onChange(e);
          }}
        />
      )}
    </>
  );
};
