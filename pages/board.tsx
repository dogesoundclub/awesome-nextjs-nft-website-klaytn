import type { Props } from 'next/app';
import { device } from '@/utils/device'
import DesktopBoard from '@/pages/desktop/board';
import MobileBoard from '@/pages/mobile/board'

export default function Board({ isMobile }: Props) {
    return isMobile ? <MobileBoard /> : <DesktopBoard />;
}

export const getServerSideProps = device;