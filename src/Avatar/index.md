---
title: Avatar 头像
nav:
  title: components
  path: /components
group:
  title: 数据展示
  path: /components/review
  order: 3
---

# Avatar 头像

用来代表用户或事物

```tsx
/**
 * title: 基本使用
 * desc: 头像有三种尺寸，两种形状可选。
 */
import React, { useState } from 'react';
import { Avatar } from 'lawDesgin';
import './index.less'
const LNAvatarComp = () => {
  const src ='https://www.gravatar.com/avatar?s=15'
  return (
    <div className="avatar-wrapper">
      <Avatar src={src} alt={'Gravatar image example'} size="small"/>
      <Avatar src={src} alt={'Gravatar image example'} size="medium"/>
      <Avatar src={src} alt={'Gravatar image example'} size="large"/>

      <Avatar src={src} alt={'Gravatar image example'} size="small" round/>
      <Avatar src={src} alt={'Gravatar image example'} size="medium" round/>
      <Avatar src={src} alt={'Gravatar image example'} size="large" round/>

    </div>
  );
};
export default LNAvatarComp;
```

## API

| 属性       | 说明         | 类型              | 默认值 | 版本 |
| ---------- | ------------ | ----------------- | ------ | ---- |
| size       | 尺寸 | `small` \|`medium` \| `large`  |`medium` |   |
| src       | 图像地址 | `string`|  |      |
| alt       | 图像无法显示时的替代文本 | `string`|  |      |
| round       | 圆形 | `boolean` |`false`  |      |

