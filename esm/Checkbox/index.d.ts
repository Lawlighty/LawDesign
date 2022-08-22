import React from 'react';
export declare type onChange = (e: Event) => void;
interface CheckboxProps {
    dark?: boolean;
    checked?: boolean;
    disabled: boolean;
    children: any;
    /**
     * @description 选项改变回调函数
     */
    onChange?: onChange;
}
declare const _default: React.MemoExoticComponent<(props: CheckboxProps) => JSX.Element>;
export default _default;
