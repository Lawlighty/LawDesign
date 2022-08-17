/*
 * @Date: 2022-08-17 15:18:40
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-17 15:29:42
 * @FilePath: \lawDesgin\src\List\index.tsx
 * @Description:
 */
import React, { ReactNode } from 'react';

interface ListProps {
  dataSource?: any[];
  type?: 'disc' | 'circle';
}

export default (props: ListProps) => {
  const { dataSource = [], type = 'disc' } = props;
  return (
    <>
      <div className="lists">
        <ul className={`nes-list is-${type}`}>
          {dataSource.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
