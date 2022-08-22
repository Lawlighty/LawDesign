import React, { ReactNode } from 'react';
interface Options {
    type?: 'dark' | 'primary' | 'success' | 'warning' | 'error';
    icon?: string;
    title?: ReactNode;
}
interface ListProps {
    type?: 'splited' | 'icon';
    options: Options[];
    onClick: React.FC;
}
declare const _default: (props: ListProps) => JSX.Element;
export default _default;
