---
title: Radio
nav:
  title: components
  path: /components
group:
  title: 数据录入
  path: /components/data
  order: 2
---

# Radio

单选按钮

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

```tsx
/**
 * title: 按钮组 基本使用
 *
 */

import React from 'react';
import { Radio, RadioGroup } from 'lawDesgin';
import './index.less';

const LNRadioComp = () => {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };

  return (
    <div className="radio-wrapper">
      <RadioGroup value={1} onChange={onChange}>
        <Radio disabled>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>
    </div>
  );
};
export default LNRadioComp;
```

```tsx
/**
 * title: 垂直排列
 * desc: 可以通过设置 `vertical` 开启垂直
 */

import React from 'react';
import { Radio, RadioGroup } from 'lawDesgin';
import './index.less';

const LNRadioComp = () => {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };

  return (
    <div className="radio-wrapper">
      <RadioGroup value={1} onChange={onChange} vertical>
        <Radio disabled>Apple</Radio>
        <Radio>Orange</Radio>
        <Radio>Watch</Radio>
      </RadioGroup>
    </div>
  );
};
export default LNRadioComp;
```

```tsx
/**
 * title: 黑暗模式
 * desc: 可以通过设置 `dark` 开启
 */

import React from 'react';
import { Radio, RadioGroup } from 'lawDesgin';
import './index.less';

const LNRadioComp = () => {
  const onChange = (a: string, b: number) => {
    console.log(a, b);
  };

  return (
    <>
      <div className="radio-wrapper" style={{ padding: '1rem 0' }}>
        <RadioGroup value={1} onChange={onChange}>
          <Radio disabled>Apple</Radio>
          <Radio>Orange</Radio>
          <Radio>Watch</Radio>
        </RadioGroup>
      </div>
      <div
        className="radio-wrapper"
        style={{ background: '#212529', padding: '1rem 0' }}
      >
        <RadioGroup value={1} onChange={onChange}>
          <Radio disabled dark>
            Apple
          </Radio>
          <Radio dark>Orange</Radio>
          <Radio dark>Watch</Radio>
        </RadioGroup>
      </div>
    </>
  );
};
export default LNRadioComp;
```

## API

| 属性     | 说明             | 类型       | 默认值  | 版本 |
| -------- | ---------------- | ---------- | ------- | ---- |
| value    | 默认选中索引     | `number`   | `1`     |      |
| disabled | 禁用             | `boolean`  |         |      |
| vertical | 垂直样式         | `boolean`  | `false` |      |
| onChange | 选项改变回调函数 | `function` |         |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
