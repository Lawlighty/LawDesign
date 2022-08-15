/*
 * @Date: 2022-08-15 16:22:45
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 16:26:23
 * @FilePath: \lawDesgin\src\Checkbox\CheckboxGroup\CheckboxGroup.tsx
 * @Description:
 */
import React, { FC, useState, useEffect, memo, useCallback } from 'react';
import styles from './index.less';

interface CheckboxGroupProps {
  children: Array<Object>;
  /**
   * @description 默认值
   * @default 0
   */
  value?: number;
  vertical?: boolean;
  onChange?: Function;
}
interface CheckboxProps {
  children: string;
  disabled: boolean;
}

const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const { children, value, vertical = false, onChange } = props;

  const [selectIndex, setSelectIndex] = useState(value || 0); // 选中索引
  const [renderOptions, setRenderOptions] = useState(children);

  const changeOptions = (item: CheckboxProps, i: number, e: any) => {
    if (item.disabled) return;
    e && e.stopPropagation();
    setSelectIndex(i);
    onChange && onChange(item, i);
  };

  const handleChange = (event: any) => {
    console.log('handleClick event', event.target.value);
  };

  return (
    <div
      className={`${styles['checkbox-group-wrapper']} ${
        vertical && styles['vertical-wrapper']
      }`}
    >
      {renderOptions.map((item: any, index: number) => {
        return (
          <label
            className={`${styles['checkbox-group-wrapper-label']}`}
            key={index}
            onClick={(e) => changeOptions(item.props, index, e)}
            style={item.props.disabled && { cursor: 'not-allowed' }}
          >
            <input
              style={item.props.disabled && { cursor: 'not-allowed' }}
              type="checkbox"
              className={`nes-checkbox ${item.props.dark && 'is-dark'}`}
              checked={selectIndex === index}
              onChange={handleChange}
            />
            <span
              style={
                item.props.disabled && { cursor: 'not-allowed', color: 'gray' }
              }
            >
              {item?.props?.children}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default memo(CheckboxGroup);
