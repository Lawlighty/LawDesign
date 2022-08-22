/// <reference types="react" />
interface option {
    label: string;
    value: string | number;
    disabled?: boolean;
    hidden?: boolean;
    selected?: boolean;
}
interface SelectProps {
    type?: 'success' | 'warning' | 'error' | 'dark';
    value?: string | number;
    width?: number;
    options?: Array<option>;
    children?: any;
    onChange?: Function;
}
declare const _default: (props: SelectProps) => JSX.Element;
export default _default;
