---
title: Select 选择器
nav:
  title: components
  path: /components
group:
  title: 数据录入
  path: /components/data
  order: 2
---

# Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 `Radio` 是更好的选择。

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React, { useState } from 'react';
import { Select } from 'lawDesgin';
import './index.less';

const LNSelectComp = () => {
  const [value, setValue] = useState('LawDesign');
  const onChange = (value) => {
    console.log('select value', value);
  };
  return (
    <div className="select-wrapper">
      <Select onChange={onChange}>
        <option value={1}>Select...</option>
        <option value={2}>To be</option>
        <option value={3}>Not to be</option>
      </Select>

      <Select type="success">
        <option value={1}>Select...</option>
        <option value={2}>To be</option>
        <option value={3}>Not to be</option>
      </Select>

      <Select type="warning">
        <option value={1}>Select...</option>
        <option value={2}>To be</option>
        <option value={3}>Not to be</option>
      </Select>

      <Select type="error">
        <option value={1}>Select...</option>
        <option value={2}>To be</option>
        <option value={3}>Not to be</option>
      </Select>

      <Select type="dark" width={250}>
        <option value={1}>Select...</option>
        <option value={2}>To be</option>
        <option value={3}>Not to be</option>
      </Select>
    </div>
  );
};
export default LNSelectComp;
```

## API

### Select

| 属性        | 说明                   | 类型                                       | 默认值  | 版本 |
| ----------- | ---------------------- | ------------------------------------------ | ------- | ---- |
| type        | 下拉框类型             | `success` \| `warning` \| `error` \|`dark` |         |      |
| width       | 下拉框宽度             | `number`                                   |         |      |
| placeholder | 提示内容               | `string`                                   |         |      |
| password    | 密码框                 | `boolean`                                  | `false` |      |
| dark        | 黑暗                   | `boolean`                                  | `false` |      |
| textarea    | textarea               | `boolean`                                  | `false` |      |
| rows        | rows                   | `number`                                   | `4`     |      |
| width       | 宽度                   | `number`                                   |         |      |
| onChange    | 输入框内容变化时的回调 | `function(e)`                              |         |      |

### Option

| 属性     | 说明       | 类型                                       | 默认值 | 版本 |
| -------- | ---------- | ------------------------------------------ | ------ | ---- |
| hidden   | 下拉框类型 | `success` \| `warning` \| `error` \|`dark` |        |      |
| disabled | 下拉框宽度 | `number`                                   |        |      |
| selected | 提示内容   | `string`                                   |        |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
