import type { Props } from 'next/app';
import { device } from '@/utils/device'
import DesktopActivities from '@/pages/desktop/activities';
import MobileActivities from '@/pages/mobile/activities'

export default function Activities({ isMobile }: Props) {
    return isMobile ? <MobileActivities /> : <DesktopActivities />;
}

export const getServerSideProps = device;