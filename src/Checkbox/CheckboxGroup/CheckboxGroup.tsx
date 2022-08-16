/*
 * @Date: 2022-08-15 16:22:45
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 15:27:18
 * @FilePath: \lawDesgin\src\Checkbox\CheckboxGroup\CheckboxGroup.tsx
 * @Description:
 */
import React, { FC, useState, useEffect, memo, useCallback } from 'react';
import styles from './index.less';

interface CheckboxGroupProps {
  children: Array<Object>;
  value?: Array<any>;
  vertical?: boolean;
  onChange?: Function;
}
interface CheckboxProps {
  dark?: boolean;
  // 是否选中
  checked?: boolean;
  // 失效状态
  disabled: boolean;
  //
  children: any;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, value = [], vertical = false, onChange } = props;

  const [selectIndex, setSelectIndex] = useState([0, 1, 2]); // 选中索引
  const [renderOptions, setRenderOptions] = useState(children);

  const handleChange = (event: any, item: CheckboxProps, index: any) => {
    if (item.disabled) return;
    event && event.stopPropagation();
    let cList = [...selectIndex];
    if (event.target.checked) {
      setSelectIndex([...cList, index]);
    } else {
      let i = cList.indexOf(index);
      cList.splice(i, 1);
      setSelectIndex([...cList]);
    }
    onChange && onChange(cList);
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
            // onClick={(e) => changeOptions(item.props, index, e)}
            style={item.props.disabled && { cursor: 'not-allowed' }}
          >
            <input
              style={item.props.disabled && { cursor: 'not-allowed' }}
              type="checkbox"
              className={`nes-checkbox ${item.props.dark && 'is-dark'}`}
              checked={selectIndex.includes(index)}
              onChange={(e) => {
                handleChange(e, item.props, index);
              }}
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
