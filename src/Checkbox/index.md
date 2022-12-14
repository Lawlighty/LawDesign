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
 * title: 基本用法
 * desc: 简单的 checkbox。
 */

import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'lawDesgin';
import './index.less';

const LNCheckboxComp = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (e: Event) => {
    console.log('Checkbox e', e.target.checked);
    setChecked(e.target.checked);
  };
  return (
    <div className="checkbox-wrapper">
      <Checkbox checked={checked} onChange={onChange}>
        Checkbox
      </Checkbox>

      <div className="checkbox-wrapper-dark">
        <Checkbox dark disabled>
          Checkbox
        </Checkbox>
      </div>
    </div>
  );
};
export default LNCheckboxComp;
```

```tsx
/**
 * title: 按钮组 基本使用
 *
 */

import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'lawDesgin';
import './index.less';

const LNCheckboxComp = () => {
  const [value, setValue] = useState<Array<any>>([1]);

  const onChange = (checkedValues: Array<number>) => {
    console.log('checkedValues', checkedValues);
    setValue([...checkedValues]);
  };

  return (
    <div className="checkbox-wrapper">
      <CheckboxGroup value={value} onChange={onChange}>
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
 * title: Checkbox 组
 * desc: 方便的从数组生成 Checkbox 组。
 */

import React, { useState } from 'react';
import { Checkbox, CheckboxGroup } from 'lawDesgin';
import './index.less';

const LNCheckboxComp = () => {
  const [value, setValue] = useState(['Orange']);

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  const plainOptions = ['Apple1', 'Pear1', 'Orange1'];

  const onChange = (checkedValues: Array<number>) => {
    console.log('checkedValues', checkedValues);
    setValue([...checkedValues]);
  };

  return (
    <div className="checkbox-wrapper">
      <CheckboxGroup
        value={value}
        onChange={onChange}
        options={options}
      ></CheckboxGroup>

      <CheckboxGroup
        value={value}
        onChange={onChange}
        options={plainOptions}
      ></CheckboxGroup>
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
    <div className="checkbox-wrapper">
      <CheckboxGroup value={['Orange']} onChange={onChange} vertical>
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
      <div className="checkbox-wrapper" style={{ padding: '1rem 0' }}>
        <CheckboxGroup value={['Orange']} onChange={onChange}>
          <Checkbox disabled>Apple</Checkbox>
          <Checkbox>Orange</Checkbox>
          <Checkbox>Watch</Checkbox>
        </CheckboxGroup>
      </div>
      <div
        className="checkbox-wrapper"
        style={{ background: '#212529', padding: '1rem 0' }}
      >
        <CheckboxGroup value={['Orange']} onChange={onChange}>
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

| 属性     | 说明             | 类型                                  | 默认值  | 版本 |
| -------- | ---------------- | ------------------------------------- | ------- | ---- |
| value    | 默认选中索引     | `string[]`\| `number[]` \| `Option[]` |         |      |
| disabled | 禁用             | `boolean`                             |         |      |
| vertical | 垂直样式         | `boolean`                             | `false` |      |
| onChange | 选项改变回调函数 | `function`                            |         |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
