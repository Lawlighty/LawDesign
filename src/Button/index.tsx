import React from 'react';
import ButtonProps from './type.ts';

export default (props: ButtonProps) => {
  const { type = 'default', children = null, onClick = () => {} } = props;
  return (
    <button type="button" className={`nes-btn is-${type}`} onClick={onClick}>
      <div className="flex-r-a-c">{children}</div>
    </button>
  );
};
