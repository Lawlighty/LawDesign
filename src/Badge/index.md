---
title: Badge 徽章
nav:
  title: components
  path: /components
group:
  title: 数据展示
  path: /components/review
  order: 3
---

# Badge 徽章

```tsx
/**
 * title: 基本使用
 * desc: 内置样式
 */
import React, { useState } from 'react';
import { Badge } from 'lawDesgin';
import './index.less';
const LNBadgeComp = () => {
  const options1 = [
    {
      title: 'NES.CSS',
    },
  ];
  const options2 = [
    {
      type: 'dark',
      title: 'is',
    },
  ];
  const options3 = [
    {
      type: 'success',
      title: 'a',
    },
  ];
  const options4 = [
    {
      type: 'warning',
      title: 'great',
    },
  ];
  const options5 = [
    {
      type: 'error',
      title: 'framework!',
    },
  ];
  return (
    <div className="badge-wrapper">
      <Badge
        options={options1}
        onClick={() => {
          alert('NES.CSS!');
        }}
      />
      <Badge options={options2} />
      <Badge options={options3} />
      <Badge options={options4} />
      <Badge options={options5} />
    </div>
  );
};
export default LNBadgeComp;
```

```tsx
/**
 * title: 特殊样式
 *
 */
import React, { useState } from 'react';
import { Badge } from 'lawDesgin';
import './index.less';
const LNBadgeComp = () => {
  const options6 = [
    {
      type: 'dark',
      title: 'npm',
    },
    {
      title: '1.1.0',
    },
  ];
  const options7 = [
    {
      type: 'dark',
      title: 'test',
    },
    {
      type: 'success',
      title: '100%',
    },
  ];
  const options8 = [
    {
      icon: 'star',
      type: 'warning',
    },
    {
      type: 'success',
      title: 'Icons',
    },
  ];
  const options9 = [
    {
      type: 'dark',
      title: 'hi',
    },
    {
      type: 'warning',
      title: 'Text',
    },
  ];
  return (
    <div className="badge-wrapper">
      <Badge type="splited" options={options6} />
      <Badge type="splited" options={options7} />
      <Badge type="icon" options={options8} />
      <Badge type="icon" options={options9} />
    </div>
  );
};
export default LNBadgeComp;
```

## API

### Badge

| 属性    | 说明     | 类型               | 默认值 | 版本 |
| ------- | -------- | ------------------ | ------ | ---- |
| type    | 徽章类型 | `splited` \|`icon` |        |      |
| options | 内容     | `Option[]`         |        |      |
| onClick | 点击操作 | `function`         |        |      |

### Option

| 属性  | 说明      | 类型                                                  | 默认值 | 版本 |
| ----- | --------- | ----------------------------------------------------- | ------ | ---- |
| type  | 类型      | `dark` \|`primary`\| `success` \|`warning`\|`error`\| |        |      |
| icon  | icon 图标 | `string`                                              |        |      |
| title | 显示内容  | `string`                                              |        |      |
