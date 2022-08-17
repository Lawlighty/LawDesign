import React from 'react';

interface ProgressProps {
  type?: 'primary' | 'success' | 'warning' | 'error' | 'pattern';
  value: number;
  max: number;
}

export default (props: ProgressProps) => {
  const { type, value, max } = props;

  return (
    <>
      <progress
        className={`nes-progress ${type && `is-${type}`}`}
        value={value}
        max={max}
      ></progress>
    </>
  );
};
