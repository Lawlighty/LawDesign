/*
 * @Date: 2022-08-15 18:51:17
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 19:11:52
 * @FilePath: \lawDesgin\src\Button\index.test.tsx
 * @Description:
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';
// eslint-disable-next-line no-undef
describe('测试 Button 模块', () => {
  // eslint-disable-next-line no-undef
  it('Button 组件 - children属性', () => {
    let msg = 'Default';
    render(<Button> {msg} </Button>);
    // eslint-disable-next-line no-undef
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  it('Button 组件 - type属性', () => {
    const type = 'primary';

    render(<Button type={type}> {type} </Button>);
    // eslint-disable-next-line no-undef
    expect(
      document.querySelector('button')?.className.includes('is-primary'),
    ).toBe(true);
  });
});
