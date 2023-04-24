import type { Props } from 'next/app';
import { device } from '@/utils/device'
import DesktopGallery from '@/pages/desktop/gallery';
import MobileGallery from '@/pages/mobile/gallery'

export default function Gallery({ isMobile }: Props) {
    return isMobile ? <MobileGallery /> : <DesktopGallery />;
}

export const getServerSideProps = device;