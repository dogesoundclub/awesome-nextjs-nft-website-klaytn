import type { Props } from 'next/app';
import { device } from '@/utils/device'
import DesktopAbout from '@/pages/desktop/about';
import MobileAbout from '@/pages/mobile/about'

export default function About({ isMobile }: Props) {
    return isMobile ? <MobileAbout /> : <DesktopAbout />;
}

export const getServerSideProps = device;