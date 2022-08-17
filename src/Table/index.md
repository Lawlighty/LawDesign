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
import './index.less';

const LNTableComp = () => {
  return (
    <div className="list-wrapper">
      <Table />
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

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
