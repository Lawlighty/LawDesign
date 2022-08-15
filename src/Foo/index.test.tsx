/*
 * @Date: 2022-08-10 15:47:19
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-15 15:38:29
 * @FilePath: \lawDesgin\src\Foo\index.test.tsx
 * @Description:
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Foo from './index';
// eslint-disable-next-line no-undef
describe('<Foo />', () => {
  // eslint-disable-next-line no-undef
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Foo title={msg} />);
    // eslint-disable-next-line no-undef
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
