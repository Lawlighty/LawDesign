---
title: Dialog
nav:
  title: components
  path: /components
group:
  title: TODO
  path: /components/todo
---

## Dialog

Demo:

```tsx
import React from 'react';
import { Dialog, Button } from 'lawDesgin';

const LNDialogComp = () => {
  const showDialog = () => {
    document?.getElementById('dialog-default')?.showModal?.();
  };
  return (
    <>
      <Button onClick={showDialog}>Open</Button>
      <Dialog id="dialog-default" title="Dialog Demo">>Alert: this is a dialog.</Dialog>
    </>
  )
};
export default LNDialogComp;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
