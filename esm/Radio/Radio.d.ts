import React from 'react';
interface RadioProps {
    children: Object;
    /**
     * @description 默认选中索引
     * @default 0
     */
    value?: number;
    /**
     * @description 禁用
     * @default 0
     */
    disabled?: boolean;
    /**
     * @description 黑暗模式
     * @default 0
     */
    dark?: boolean;
    /**
     * @description 支持手动扩展
     * @default false
     */
    canAddOption?: boolean;
    /**
     * @description 方形样式
     * @default false
     */
    boxStyle?: boolean;
    /**
     * @description 选项改变回调函数
     */
    onChange?: Function;
}
declare const _default: React.NamedExoticComponent<RadioProps>;
export default _default;
