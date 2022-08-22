import React from 'react';
interface Option {
    label: string;
    value: string | number;
}
interface CheckboxGroupProps {
    children: Array<Object>;
    value?: Array<any>;
    vertical?: boolean;
    options?: Array<Option> | string[] | number[];
    onChange?: Function;
}
declare const _default: React.MemoExoticComponent<(props: CheckboxGroupProps) => JSX.Element>;
export default _default;
