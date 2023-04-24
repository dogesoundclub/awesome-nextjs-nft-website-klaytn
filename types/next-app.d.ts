import 'next/app';

declare global {
    interface Window {
        klaytn?: any;
    }
}

declare module 'next/app' {
    interface Props {
        isMobile: boolean;
    }
}