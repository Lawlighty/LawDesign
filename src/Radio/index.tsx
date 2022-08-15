/*
 * @Date: 2022-08-15 08:44:40
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 15:40:38
 * @FilePath: \lawDesgin\src\Radio\index.tsx
 * @Description:
 */
import React, { useState } from 'react';
import RadioProps from './type.ts';

export default (props: RadioProps) => {
  const { checked = false, children = '' } = props;
  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const handleChange = (event: any) => {
    console.log('handleChange event', event.target.value);
    if (!event?.target?.value) {
      setIsChecked(true);
    }
  };
  const handleClick = (event: any) => {
    console.log('handleClick event', event.target.value);
  };

  return (
    <label>
      <input
        type="radio"
        className="nes-radio"
        checked={false}
        onChange={handleChange}
        onClick={handleClick}
      />
      <span>{children}</span>
    </label>
  );
};
