/*
 * @Date: 2022-08-17 15:33:11
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-17 18:40:40
 * @FilePath: \lawDesgin\src\Table\index.tsx
 * @Description:
 */
import React, { ReactNode } from 'react';

interface ColumnsType {
  key: string;
  title: string;
  align?: 'left' | 'right' | 'center';
  className?: string;
  render?: Function;
}

interface TableProps {
  columns?: any[];
  type?: 'disc' | 'circle';
}

export default (props: any) => {
  // const {} = props;
  return (
    <>
      <div className="nes-table-responsive">
        <table className="nes-table is-bordered is-centered">
          <thead>
            <tr>
              <th>Table.is-bordered</th>
              <th>Table.is-centered</th>
              <th>Table.is-centered</th>
              <th>Table.is-centered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thou hast had a good morning</td>
              <td>Thou hast had a good afternoon</td>
              <td>Thou hast had a good evening</td>
              <td>Thou hast had a good night</td>
            </tr>
            <tr>
              <td>Thou hast had a good morning</td>
              <td>Thou hast had a good afternoon</td>
              <td>Thou hast had a good evening</td>
              <td>Thou hast had a good night</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
