import type { Props } from 'next/app';
import { device } from '@/utils/device'
import DesktopFaq from '@/pages/desktop/faq';
import MobileFaq from '@/pages/mobile/faq'

export default function Faq({ isMobile }: Props) {
    return isMobile ? <MobileFaq /> : <DesktopFaq />;
}

export const getServerSideProps = device;