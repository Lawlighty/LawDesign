/// <reference types="react" />
interface ProgressProps {
    type?: 'primary' | 'success' | 'warning' | 'error' | 'pattern';
    value: number;
    max: number;
}
declare const _default: (props: ProgressProps) => JSX.Element;
export default _default;
