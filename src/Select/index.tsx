/*
 * @Date: 2022-08-16 18:41:33
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 19:22:48
 * @FilePath: \lawDesgin\src\Select\index.tsx
 * @Description:
 */
import React from 'react';

interface option {
  label: string;
  value: string | number;
}

interface SelectProps {
  type?: 'success' | 'warning' | 'error' | 'dark';
  width?: number;
  options?: Array<option>;
  children?: any;
  onChange?: Function;
}
export default (props: SelectProps) => {
  const { type, width, options, children, onChange } = props;
  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };
  return (
    <div
      className={`nes-select ${type && `is-${type}`}`}
      style={width ? { width: `${width}px` } : {}}
    >
      <select onChange={handleChange}>
        {options?.length ? <></> : <>{children}</>}
      </select>
    </div>
  );
};
