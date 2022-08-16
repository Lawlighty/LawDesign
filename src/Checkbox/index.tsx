/*
 * @Date: 2022-08-15 16:28:25
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 14:34:05
 * @FilePath: \lawDesgin\src\Checkbox\index.tsx
 * @Description:
 */
import React, { FC, memo } from 'react';

export type onChange = (e: Event) => void;
interface CheckboxProps {
  dark?: boolean;
  // 是否选中
  checked?: boolean;
  // 失效状态
  disabled: boolean;
  //
  children: any;
  /**
   * @description 选项改变回调函数
   */
  // eslint-disable-next-line  react/no-unused-prop-types
  onChange?: onChange;
}
const Checkbox = (props: CheckboxProps) => {
  const {
    disabled = false,
    checked = false,
    dark = false,
    onChange = () => {},
    children = null,
  } = props;
  return (
    <>
      <label
        // className={`${styles['checkbox-wrapper-label']}`}
        // onClick={(e) => changeOptions(item.props, index, e)}
        style={disabled ? { cursor: 'not-allowed' } : {}}
      >
        <input
          style={disabled ? { cursor: 'not-allowed' } : {}}
          type="checkbox"
          className={`nes-checkbox ${dark && 'is-dark'}`}
          checked={checked}
          onChange={onChange}
        />
        <span style={disabled ? { cursor: 'not-allowed', color: 'gray' } : {}}>
          {children}
        </span>
      </label>
    </>
  );
};

export default memo(Checkbox);
