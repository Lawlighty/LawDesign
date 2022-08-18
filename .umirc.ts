/*
 * @Date: 2022-08-10 15:47:19
 * @LastEditors: lyx
 * @LastEditTime: 2022-08-18 19:30:32
 * @FilePath: \lawDesgin\.umirc.ts
 * @Description:
 */
import { defineConfig } from 'dumi';
let BaseUrl = '';
export default defineConfig({
  title: 'lawDesgin',
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  favicon: BaseUrl + '/images/l.svg.ico',
  // logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: BaseUrl + '/images/RC.png',
  description: '用于Lawlighty 前端组件开发。',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    // null,
    {
      title: 'components',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: '',
    },
  ],
});
