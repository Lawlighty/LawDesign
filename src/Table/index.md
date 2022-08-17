---
title: Table 表格
nav:
  title: components
  path: /components
group:
  title: 数据展示
  path: /components/review
  order: 3
---

# Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；

- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React, { useState } from 'react';
import { Table } from 'lawDesgin';

const LNTableComp = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 200
    },
  ];
  return (
    <div>
      <Table rowKey="key" columns={columns} dataSource={dataSource} />
    </div>
  );
};
export default LNTableComp;
```

```tsx
/**
 * title: 样式
 * desc: 边框/居中
 */
import React, { useState } from 'react';
import { Table } from 'lawDesgin';

const LNTableComp = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 200
    },
  ];
  return (
    <div>
      <Table rowKey="key" border center  columns={columns} dataSource={dataSource} />
    </div>
  );
};
export default LNTableComp;
```
```tsx
/**
 * title: 黑暗
 * desc: dark
 */
import React, { useState } from 'react';
import { Table } from 'lawDesgin';

const LNTableComp = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 200
    },
  ];
  return (
    <div>
      <Table rowKey="key" border center dark  columns={columns} dataSource={dataSource} />
    </div>
  );
};
export default LNTableComp;
```

## API

| 属性       | 说明         | 类型              | 默认值 | 版本 |
| ---------- | ------------ | ----------------- | ------ | ---- |
| dataSource | 列表数据     | `any[]`           |        |      |
| type       | 列表显示样式 | `disc` \|`circle` | `disc` |      |
| border       | 边框 | `boolean`| `false` |      |
| center       | 表头居中 | `boolean`| `false` |      |
| dark       | 黑暗 | `boolean`| `false` |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
