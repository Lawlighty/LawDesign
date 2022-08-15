import React from 'react';
import TextProps from './type.ts';

export default (props: TextProps) => {
  const { type = '', children = '' } = props;
  return <span className={`nes-text ${type ? `is-${type}` : ''}`}>{children}</span>;
};
