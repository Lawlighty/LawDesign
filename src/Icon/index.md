---
title: Icon
nav:
  title: components
  path: /components
group:
  title: 通用
  path: /components/common
  order: 1
---

# Icon

```tsx
import React from 'react';
import { Icon } from 'lawDesgin';
import './index.less';

const LNICONComp = () => {
  const ICON_LIST = [
    'heart',
    'star',
    'like',
    'twitter',
    'facebook',
    'instagram',
    'github',
    'google',
    'gmail',
    'medium',
    'linkedin',
    'twitch',
    'youtube',
    'reddit',
    'whatsapp',
    'close',
    'trophy',
    'coin',
  ];
  return (
    <div className="icon-wrapper">
      {ICON_LIST.map((item) => (
        <div className="icon-item-wrapper" key={item}>
          <div className="icon-item">
            <Icon icon={item}></Icon>
            <div>{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LNICONComp;
```

```tsx
/**
 * title: 尺寸
 * desc: 可以通过设置 `size` 属性调整图标大小:`small`, `medium`, `large` 本质是通过`transform  scale(X)`进行缩放,默认为2倍图.
 */
import React from 'react';
import { Icon } from 'lawDesgin';
import './index.less';

const LNICONComp = () => {
  return (
    <div className="icon-wrapper">
      <div className="icon-item">
        <Icon icon="heart" size="small"></Icon>
        <Icon icon="heart"></Icon>
        <Icon icon="heart" size="medium"></Icon>
        <Icon icon="heart" size="large"></Icon>
      </div>

      <div className="icon-item">
        <Icon icon="star" size="small"></Icon>
        <Icon icon="star"></Icon>
        <Icon icon="star" size="medium"></Icon>
        <Icon icon="star" size="large"></Icon>
      </div>

      <div className="icon-item">
        <Icon icon="like" size="small"></Icon>
        <Icon icon="like"></Icon>
        <Icon icon="like" size="medium"></Icon>
        <Icon icon="like" size="large"></Icon>
      </div>
    </div>
  );
};
export default LNICONComp;
```

```tsx
/**
 * title: 响应图标
 * desc: 部分图标 会有阶段效果
 */
import React from 'react';
import { Icon } from 'lawDesgin';
import './index.less';

const LNICONComp = () => {
  return (
    <div className="icon-wrapper">
      <div className="icon-item">
        <Icon icon="heart"></Icon>
        <Icon icon="heart" half></Icon>
        <Icon icon="heart" transparent></Icon>
        <Icon icon="heart" empty></Icon>
      </div>

      <div className="icon-item">
        <Icon icon="star"></Icon>
        <Icon icon="star" half></Icon>
        <Icon icon="star" transparent></Icon>
        <Icon icon="star" empty></Icon>
      </div>

      <div className="icon-item">
        <Icon icon="star"></Icon>
        <Icon icon="star" empty></Icon>
      </div>
    </div>
  );
};
export default LNICONComp;
```

```tsx
/**
 * title: 任天堂图标
 * desc: 任天堂拥有这些角色的版权。请遵守任天堂的指导方针和适用司法管辖区的法律
 */
import React from 'react';
import { Icon } from 'lawDesgin';
import './index.less';

const LNICONComp = () => {
  const ICON_LIST = [
    'mario',
    'ash',
    'pokeball',
    'bulbasaur',
    'charmander',
    'squirtle',
    'kirby',
  ];
  return (
    <div className="icon-wrapper">
      {ICON_LIST.map((item) => (
        <div className="icon-item-wrapper" key={item}>
          <div className="icon-item">
            <Icon icon={item}></Icon>
            <div>{item}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LNICONComp;
```

## API

| 属性        | 说明      | 类型 | 默认值  | 版本 |
| ----------- | --------- | ---- | ------- | ---- |
| icon        | 设置 icon |      |         |      |
| size        | 大小      |      |         |      |
| transparent | 透明      |      | `false` |      |
| half        | 半标记    |      | `false` |      |
| empty       | 空        |      | `false` |      |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
