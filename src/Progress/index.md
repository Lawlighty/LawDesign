---
title: Progress 进度条
nav:
  title: components
  path: /components
group:
  title: 数据展示
  path: /components/review
  order: 3
---

# Progress 进度条

展示操作的当前进度。

## 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；

- 当需要显示一个操作完成的百分比时。

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React, { useState } from 'react';
import { Progress } from 'lawDesgin';
import './index.less'
const LNProgressComp = () => {

  return (
    <div className="progress-wrapper">
      <Progress value={80} max={100} />
      <Progress type="primary" value={60} max={100} />
      <Progress type="success" value={40} max={100} />
      <Progress type="warning" value={30} max={100} />
      <Progress type="error" value={20} max={100} />
      <Progress type="pattern" value={10} max={100} />
    </div>
  );
};
export default LNProgressComp;
```

## API

| 属性       | 说明         | 类型              | 默认值 | 版本 |
| ---------- | ------------ | ----------------- | ------ | ---- |
| type       | 列表显示样式 | `primary` \|`success` \| `warning` \| `error` \|`pattern` | |   |
| value       | 当前进度 | `number`|  |      |
| max       | 最大值 | `number`|  |      |

