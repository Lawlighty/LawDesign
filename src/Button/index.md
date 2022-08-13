---
title: Button
nav:
  title: components
  path: /components
group:
  title: 通用
  path: /components/
  order: 1
---

## Button

按钮用于开始一个即时操作。

### 种类

我们提供了六种样式按钮。

默认按钮(default)

主按钮(primary)

成功按钮(success)

错误按钮(error)

危险(warning)

禁用(disabled)

加载中(TODO)：用于异步操作等待反馈的时候，也可以避免多次提交

```tsx
import React from 'react'
import { Button } from 'lawDesgin'
import './index.less'

const LNButtonComp = () => {
  return (
    <div className="btn-wrapper">
      <Button
        onClick={() => {
          alert('点击了')
        }}
      >
        default
      </Button>
      <Button type="primary">primary</Button>
      <Button type="success">success</Button>
      <Button type="warning">warning</Button>
      <Button type="error">error</Button>
      <Button type="disabled">disabled</Button>
    </div>
  )
}
export default LNButtonComp
```

### API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 设置按钮类型 | `primary` \| `success` \| `warning` \| `error` \| `disabled` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | `(event) => void` |  |  |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
