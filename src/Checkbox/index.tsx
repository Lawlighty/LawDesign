/*
 * @Date: 2022-08-15 16:28:25
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 16:29:01
 * @FilePath: \lawDesgin\src\Checkbox\index.tsx
 * @Description:
 */
import React, { FC, memo } from 'react';

interface CheckboxProps {
  children: Object;
  /**
   * @description 默认选中索引
   * @default 0
   */
  // eslint-disable-next-line  react/no-unused-prop-types
  value?: number;
  /**
   * @description 禁用
   * @default 0
   */
  // eslint-disable-next-line  react/no-unused-prop-types
  disabled?: boolean;
  /**
   * @description 黑暗模式
   * @default 0
   */
  // eslint-disable-next-line  react/no-unused-prop-types
  dark?: boolean;

  /**
   * @description 支持手动扩展
   * @default false
   */
  // eslint-disable-next-line  react/no-unused-prop-types
  canAddOption?: boolean;
  /**
   * @description 方形样式
   * @default false
   */
  // eslint-disable-next-line  react/no-unused-prop-types
  boxStyle?: boolean;
  /**
   * @description 选项改变回调函数
   */
  // eslint-disable-next-line  react/no-unused-prop-types
  onChange?: Function;
}
const Checkbox: FC<CheckboxProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default memo(Checkbox);
