/*
 * @Date: 2022-08-17 15:33:11
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-18 11:29:18
 * @FilePath: \lawDesgin\src\Table\index.tsx
 * @Description:
 */
import React, { useEffect, useState } from 'react';

interface ColumnsType {
  key: string;
  title: string;
  align?: 'left' | 'right' | 'center';
  className?: string;
  width?: number;
  render?: Function;
}

interface TableProps {
  rowKey?: string;
  columns: ColumnsType[];
  dataSource: object[];
  border?: boolean;
  center?: boolean;
  dark?: boolean;
}

export default (props: TableProps) => {
  const {
    rowKey = 'id',
    border,
    center,
    dark,
    columns = [],
    dataSource = [],
  } = props;
  const [columnsList, setColumnsList] = useState<string[]>([]);
  useEffect(() => {
    let columnsList = columns.map((item: ColumnsType) => item.key);
    setColumnsList([...columnsList]);
    return () => {};
  }, [columns]);
  return (
    <>
      <div className="nes-table-responsive">
        <table
          className={`nes-table ${border && `is-bordered`} ${
            center && `is-centered`
          } ${dark && `is-dark`}`}
        >
          <thead>
            <tr>
              {columns.map((item: ColumnsType) => (
                <th
                  key={item.key}
                  style={item.width ? { width: `${item.width}px` } : {}}
                >
                  {item.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item: any) => {
              return (
                <tr key={item[rowKey]}>
                  {columnsList.map((cItem) => {
                    return <td key={cItem}>{item?.[cItem] ?? ''}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
