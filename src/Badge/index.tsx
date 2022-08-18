/*
 * @Date: 2022-08-18 09:37:11
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-18 13:21:17
 * @FilePath: \lawDesgin\src\Badge\index.tsx
 * @Description: 徽章
 */
import React, { Fragment, ReactNode } from 'react';

interface Options {
  type?: 'dark' | 'primary' | 'success' | 'warning' | 'error';
  icon?: string;
  title?: ReactNode;
}
interface ListProps {
  type?: 'splited' | 'icon';
  options: Options[];
  onClick: React.FC;
}

export default (props: ListProps) => {
  const { options = [], type = 'primary', onClick = () => {} } = props;
  return (
    <>
      <a className={`nes-badge ${type && `is-${type}`}`} onClick={onClick}>
        {options.map((item: Options, index: number) => {
          let { type = 'primary', icon, title } = item;
          return (
            <Fragment key={index}>
              {icon ? (
                <span className={`${type && `is-${type}`}`}>
                  <i className={`nes-icon ${icon} is-small`}></i>
                </span>
              ) : (
                <span className={`${type && `is-${type}`}`}>{title}</span>
              )}
            </Fragment>
          );
        })}
      </a>
    </>
  );
};
