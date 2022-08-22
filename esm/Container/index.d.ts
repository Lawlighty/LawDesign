import { ReactNode } from 'react';
interface ContainerProps {
    title?: ReactNode;
    center?: boolean;
    round?: boolean;
    dark?: boolean;
    children: ReactNode;
}
declare const _default: (props: ContainerProps) => JSX.Element;
export default _default;
