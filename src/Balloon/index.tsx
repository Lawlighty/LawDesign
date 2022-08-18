/*
 * @Date: 2022-08-18 13:23:49
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-18 13:28:57
 * @FilePath: \lawDesgin\src\Balloon\index.tsx
 * @Description: Balloon 对话框
 */
import React, { ReactNode } from 'react';

interface BalloonProps {
  direction?: 'left' | 'right';
  dark?: boolean;
  children: ReactNode;
}

export default (props: BalloonProps) => {
  const { direction = 'left', dark, children = null } = props;
  return (
    <>
      <div className={`nes-balloon from-${direction} ${dark && 'is-dark'}`}>
        {children}
      </div>
    </>
  );
};
