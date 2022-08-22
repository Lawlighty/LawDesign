/// <reference types="react" />
interface InputProps {
    type?: 'success' | 'warning' | 'error';
    value?: string;
    placeholder?: string;
    password?: boolean;
    textarea?: boolean;
    rows?: number;
    dark?: boolean;
    width?: number;
    onChange?: Function;
}
declare const _default: (props: InputProps) => JSX.Element;
export default _default;
