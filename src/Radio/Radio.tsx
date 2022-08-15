/*
 * @Date: 2022-08-15 08:44:40
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 15:40:18
 * @FilePath: \lawDesgin\src\Radio\Radio.tsx
 * @Description:
 */
import React, { FC, memo } from 'react';

interface RadioProps {
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
const Radio: FC<RadioProps> = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default memo(Radio);
