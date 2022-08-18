---
title: Balloon 对话框
nav:
  title: components
  path: /components
group:
  title: 数据展示
  path: /components/review
  order: 3
---

# Balloon 对话框

```tsx
/**
 * title: 基本使用
 * desc: 基本使用
 */
import React, { useState } from 'react';
import { Balloon, Icon } from 'lawDesgin';
import './index.less';
const LNBalloonComp = () => {
  return (
    <div>
      <div>
        <div className="balloon-item left">
          <Icon icon={'facebook'} size="large"></Icon>
          <Balloon>Hello NES.css</Balloon>
        </div>
        <div className="balloon-item right">
          <Balloon direction={'right'}>
            Good morning. Thou hast had a good night's sleep, I hope.
          </Balloon>
          <Icon icon={'twitch'} size="large"></Icon>
        </div>
      </div>

      <div style={{ background: '#000' }}>
        <div className="balloon-item left">
          <Icon icon={'facebook'} size="large"></Icon>
          <Balloon>Hello NES.css</Balloon>
        </div>
        <div className="balloon-item right">
          <Balloon direction={'right'}>
            Good morning. Thou hast had a good night's sleep, I hope.
          </Balloon>
          <Icon icon={'twitch'} size="large"></Icon>
        </div>
      </div>
    </div>
  );
};
export default LNBalloonComp;
```

## API

### Badge

| 属性      | 说明       | 类型             | 默认值  | 版本 |
| --------- | ---------- | ---------------- | ------- | ---- |
| direction | 对话框方向 | `left` \|`right` | `left`  |      |
| dark      | 黑暗       | `boolean`        | `false` |      |
