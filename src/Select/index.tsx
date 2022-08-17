/*
 * @Date: 2022-08-16 18:41:33
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-17 08:49:02
 * @FilePath: \lawDesgin\src\Select\index.tsx
 * @Description:
 */
import React from 'react';

interface option {
  label: string;
  value: string | number;
  disabled?: boolean;
  hidden?: boolean;
  selected?: boolean;
}

interface SelectProps {
  type?: 'success' | 'warning' | 'error' | 'dark';
  value?: string | number;
  width?: number;
  options?: Array<option>;
  children?: any;
  onChange?: Function;
}
export default (props: SelectProps) => {
  const { type, value, width, options, children, onChange } = props;
  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  };
  return (
    <div
      className={`nes-select ${type && `is-${type}`}`}
      style={width ? { width: `${width}px` } : {}}
    >
      <select onChange={handleChange} value={value}>
        {options?.length ? (
          <>
            {options.map((item: option) => (
              <option
                key={item.value}
                value={item.value}
                disabled={item.disabled}
                hidden={item.hidden}
                selected={item.selected}
              >
                {item.label}
              </option>
            ))}
          </>
        ) : (
          <>{children}</>
        )}
      </select>
    </div>
  );
};
