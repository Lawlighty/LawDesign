---
title: Checkbox
nav:
  title: components
  path: /components
group:
  title: 数据录入
  path: /components/data
  order: 2
---

# Checkbox

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

```tsx
/**
 * title: 按钮组 基本使用
 *
 */

import React from 'react';
import { Checkbox, CheckboxGroup } from 'lawDesgin';
import './index.less';

const LNCheckboxComp = () => {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };

  return (
    <div className="radio-wrapper">
      <CheckboxGroup value={1} onChange={onChange}>
        <Checkbox disabled>Apple</Checkbox>
        <Checkbox>Orange</Checkbox>
        <Checkbox>Watch</Checkbox>
      </CheckboxGroup>
    </div>
  );
};
export default LNCheckboxComp;
```

```tsx
/**
 * title: 垂直排列
 * desc: 可以通过设置 `vertical` 开启垂直
 */

import React from 'react';
import { Checkbox, CheckboxGroup } from 'lawDesgin';
import './index.less';

const LNCheckboxComp = () => {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };

  return (
    <div className="radio-wrapper">
      <CheckboxGroup value={1} onChange={onChange} vertical>
        <Checkbox disabled>Apple</Checkbox>
        <Checkbox>Orange</Checkbox>
        <Checkbox>Watch</Checkbox>
      </CheckboxGroup>
    </div>
  );
};
export default LNCheckboxComp;
```

```tsx
/**
 * title: 黑暗模式
 * desc: 可以通过设置 `dark` 开启
 */

import React from 'react';
import { Checkbox, CheckboxGroup } from 'lawDesgin';
import './index.less';

const LNCheckboxComp = () => {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };

  return (
    <>
      <div className="radio-wrapper" style={{ padding: '1rem 0' }}>
        <CheckboxGroup value={1} onChange={onChange}>
          <Checkbox disabled>Apple</Checkbox>
          <Checkbox>Orange</Checkbox>
          <Checkbox>Watch</Checkbox>
        </CheckboxGroup>
      </div>
      <div
        className="radio-wrapper"
        style={{ background: '#212529', padding: '1rem 0' }}
      >
        <CheckboxGroup value={1} onChange={onChange}>
          <Checkbox disabled dark>
            Apple
          </Checkbox>
          <Checkbox dark>Orange</Checkbox>
          <Checkbox dark>Watch</Checkbox>
        </CheckboxGroup>
      </div>
    </>
  );
};
export default LNCheckboxComp;
```

## API

| 属性     | 说明             | 类型       | 默认值  | 版本 |
| -------- | ---------------- | ---------- | ------- | ---- |
| value    | 默认选中索引     | `number`   | `1`     |      |
| disabled | 禁用             | `boolean`  |         |      |
| vertical | 垂直样式         | `boolean`  | `false` |      |
| onChange | 选项改变回调函数 | `function` |         |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
