/*
 * @Date: 2022-08-15 16:22:45
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-16 16:14:45
 * @FilePath: \lawDesgin\src\Checkbox\CheckboxGroup\CheckboxGroup.tsx
 * @Description:
 */
import React, { FC, useState, useEffect, memo, useCallback } from 'react';
import styles from './index.less';

interface Option {
  label: string;
  value: string | number;
}
interface CheckboxGroupProps {
  children: Array<Object>;
  value?: Array<any>;
  vertical?: boolean;
  options?: Array<Option> | string[] | number[];
  onChange?: Function;
}
interface CheckboxProps {
  dark?: boolean;
  // 是否选中
  checked?: boolean;
  // 失效状态
  disabled: boolean;
  //
  children: string;
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { children, value = [], vertical = false, options, onChange } = props;
  console.log('CheckboxGroup cOptions', options);
  const [selectIndex, setSelectIndex] = useState([...value]); // 选中索引
  const [cOptions, setCOptions] = useState(options ?? []);
  const [renderOptions, setRenderOptions] = useState(children);

  const handleChange = (event: any, item: CheckboxProps, index: any) => {
    if (item.disabled) return;
    let e = event;
    let value = e?.target?.attributes?.value?.value;
    event.persist();
    console.log('handleChange value', value);
    console.log('handleChange e', e);
    event && event.stopPropagation();
    let cList = [...selectIndex];
    if (event.target.checked) {
      setSelectIndex([...cList, value ?? index]);
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
      {cOptions.length ? (
        <>
          {cOptions.map((item: Option | string | number, index: number) => {
            let value;
            let label;
            let disabled = false;
            if (item && typeof item === 'object') {
              // Option
              value = item?.['value'];
              label = item?.['label'];
              disabled = item?.['disabled'] ?? false;
            } else {
              value = item;
              label = item;
            }
            return (
              <label
                className={`${styles['checkbox-group-wrapper-label']}`}
                key={value}
                // onClick={(e) => changeOptions(item.props, index, e)}
                style={disabled ? { cursor: 'not-allowed' } : {}}
              >
                <input
                  value={value}
                  style={disabled ? { cursor: 'not-allowed' } : {}}
                  type="checkbox"
                  className="nes-checkbox"
                  checked={selectIndex.includes(value ?? index)}
                  onChange={(e) => {
                    handleChange(e, item, index);
                  }}
                />
                <span
                  style={
                    disabled
                      ? {
                          cursor: 'not-allowed',
                          color: 'gray',
                        }
                      : {}
                  }
                >
                  {label}
                </span>
              </label>
            );
          })}
        </>
      ) : (
        <>
          {renderOptions.map((item: any, index: number) => {
            return (
              <label
                className={`${styles['checkbox-group-wrapper-label']}`}
                key={index}
                // onClick={(e) => changeOptions(item.props, index, e)}
                style={item.props.disabled && { cursor: 'not-allowed' }}
              >
                <input
                  value={item?.props?.children}
                  style={item.props.disabled && { cursor: 'not-allowed' }}
                  type="checkbox"
                  className={`nes-checkbox ${item.props.dark && 'is-dark'}`}
                  checked={selectIndex.includes(item?.props?.children ?? index)}
                  onChange={(e) => {
                    handleChange(e, item.props, index);
                  }}
                />
                <span
                  style={
                    item.props.disabled && {
                      cursor: 'not-allowed',
                      color: 'gray',
                    }
                  }
                >
                  {item?.props?.children}
                </span>
              </label>
            );
          })}
        </>
      )}
    </div>
  );
};

export default memo(CheckboxGroup);
