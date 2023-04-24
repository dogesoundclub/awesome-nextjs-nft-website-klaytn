import type { Props } from 'next/app';
import { device } from '@/utils/device'
import Desktop from '@/pages/desktop/index';
import Mobile from '@/pages/mobile/index'

export default function Index({ isMobile }: Props) {
    return isMobile ? <Mobile /> : <Desktop />;
}

export const getServerSideProps = device;