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

## Radio

单选按钮

```tsx
import React from 'react'
import { Radio } from 'lawDesgin'
import './index.less'

const LNRadioComp = () => {
  return (
    <div className="radio-wrapper">
      <Radio checked={false}>Radio</Radio>
    </div>
  )
}
export default LNRadioComp
```

### API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 文本颜色 | `primary` \| `success` \| `warning` \| `error` \| `disabled` |  |  |
| children | 文本内容 | `string` |  |  |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
