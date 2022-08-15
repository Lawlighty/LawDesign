---
title: Input
nav:
  title: components
  path: /components
group:
  title: 数据录入
  path: /components/data
  order: 2
---

# Input

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

* 需要用户输入表单域内容时。
* 提供组合型输入框，带搜索的输入框，还可以进行大小选择。


```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React,{useState} from 'react'
import { Input } from 'lawDesgin'
import './index.less'

const LNInputComp = () => {
  const [value, setValue] = useState('LawDesign')
  return (
    <div className="input-wrapper">
      <Input value={value} onChange={(e)=>{setValue(e.target.value)}}/>
      <Input type="success" placeholder={'success'}/>
      <Input type="warning" value={'warning'}/>
      <Input type="error" value={'error'} width={150}/>
    </div>
  )
}
export default LNInputComp
```

```tsx
/**
 * title: 密码框
 * desc: 密码框
 */
import React,{useState} from 'react'
import { Input } from 'lawDesgin'
import './index.less'

const LNInputComp = () => {
  const [value, setValue] = useState('123456')
  return (
    <div className="input-wrapper">
      <Input value={value} password onChange={(e)=>{setValue(e.target.value)}}/>
    </div>
  )
}
export default LNInputComp
```

## API

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 输入框类型 |  `success` \| `warning` \| `error` |  |  |
| value | 输入框内容 | `string` |  |  |
| placeholder | 提示内容 | `string` |  |  |
| password | 密码框 | `boolean` | `false` |  |
| width | 宽度 | `number` |  |  |
| onChange | 输入框内容变化时的回调 | `function(e)` |  |  |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
