---
title: List 列表
nav:
  title: components
  path: /components
group:
  title: 数据展示
  path: /components/review
  order: 3
---

# List 列表

通用列表。

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React, { useState } from 'react';
import { List } from 'lawDesgin';
import './index.less';

const LNListComp = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  return (
    <div className="list-wrapper">
      <List dataSource={data} />
      <List type="circle" dataSource={data} />
    </div>
  );
};
export default LNListComp;
```

## API

| 属性       | 说明         | 类型              | 默认值 | 版本 |
| ---------- | ------------ | ----------------- | ------ | ---- |
| dataSource | 列表数据     | `any[]`           |        |      |
| type       | 列表显示样式 | `disc` \|`circle` | `disc` |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
