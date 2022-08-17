/*
 * @Date: 2022-08-17 14:39:30
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-17 15:00:00
 * @FilePath: \lawDesgin\src\Container\index.tsx
 * @Description:
 */
import React, { ReactNode } from 'react';

interface ContainerProps {
  title?: ReactNode;
  center?: boolean;
  round?: boolean;
  dark?: boolean;
  children: ReactNode;
}

export default (props: ContainerProps) => {
  const { title = '', center, round, dark, children } = props;
  return (
    <>
      <div
        className={`nes-container ${title && 'with-title'} ${
          center && 'is-centered'
        } ${round && 'is-rounded'} ${dark && 'is-dark'}`}
      >
        {title && <div className="title">{title}</div>}
        {children}
      </div>
    </>
  );
};
