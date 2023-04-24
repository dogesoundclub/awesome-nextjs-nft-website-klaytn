import type { Props } from 'next/app';
import { device } from '@/utils/device'
import DesktopMix from '@/pages/desktop/mix';
import MobileMix from '@/pages/mobile/mix'

export default function Mix({ isMobile }: Props) {
    return isMobile ? <MobileMix /> : <DesktopMix />;
}

export const getServerSideProps = device;