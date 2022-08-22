/// <reference types="react" />
interface ColumnsType {
    key: string;
    title: string;
    align?: 'left' | 'right' | 'center';
    className?: string;
    width?: number;
    render?: Function;
}
interface TableProps {
    rowKey?: string;
    columns: ColumnsType[];
    dataSource: object[];
    border?: boolean;
    center?: boolean;
    dark?: boolean;
}
declare const _default: (props: TableProps) => JSX.Element;
export default _default;
