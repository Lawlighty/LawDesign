---
title: Container 容器
nav:
  title: components
  path: /components
group:
  title: 数据录入
  path: /components/data
  order: 2
---

# Container 容器

容器样式

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React, { useState } from 'react';
import { Container } from 'lawDesgin';
import './index.less';

const LNContainerComp = () => {
  const onChange = (value) => {
    console.log('select value', value);
  };
  return (
    <div className="container-wrapper">
      <Container>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>

      <Container center>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>

      <Container round>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>

      <Container dark>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
    </div>
  );
};
export default LNContainerComp;
```

```tsx
/**
 * title: Title
 *
 */
import React, { useState } from 'react';
import { Container } from 'lawDesgin';
import './index.less';

const LNContainerComp = () => {
  const onChange = (value) => {
    console.log('select value', value);
  };
  return (
    <div className="container-wrapper">
      <Container title="这是Title">
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>

      <Container title="Center" center>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>

      <Container title="Round" round>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>

      <Container title="Dark" dark>
        Good morning. Thou hast had a good night's sleep, I hope.
      </Container>
    </div>
  );
};
export default LNContainerComp;
```

## API

| 属性   | 说明     | 类型        | 默认值  | 版本 |
| ------ | -------- | ----------- | ------- | ---- |
| title  | title    | `ReactNode` |         |      |
| center | 内容居中 | `boolean`   | `false` |      |
| round  | 圆角     | `boolean`   | `false` |      |
| dark   | 黑暗     | `boolean`   | `false` |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
