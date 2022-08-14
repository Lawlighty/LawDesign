---
title: Text
nav:
  title: components
  path: /components
group:
  title: 数据录入
  path: /components/data
  order: 2
---

# Text

文本样式

```tsx
import React from 'react'
import { Text } from 'lawDesgin'
import './index.less'

const LNTextComp = () => {
  return (
    <div className="text-wrapper">
      <Text>Text</Text>
      <Text type="primary">primary</Text>
      <Text type="success">success</Text>
      <Text type="warning">warning</Text>
      <Text type="error">error</Text>
      <Text type="disabled">disabled</Text>
    </div>
  )
}
export default LNTextComp
```

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 文本颜色 | `primary` \| `success` \| `warning` \| `error` \| `disabled` |  |  |
| children | 文本内容 | `string` |  |  |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
