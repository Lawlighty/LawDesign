/// <reference types="react" />
import 'nes.css/css/nes.min.css';
declare const Modal: ({ isVisible, title, content, footer, onClose }: {
    isVisible?: boolean | undefined;
    title: any;
    content: any;
    footer: any;
    onClose: any;
}) => JSX.Element | null;
export default Modal;
