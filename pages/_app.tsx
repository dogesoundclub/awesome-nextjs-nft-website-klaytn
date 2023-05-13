// _app.tsx:
import "xp.css/dist/XP.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import MusicPlayer from '../components/desktop/MusicPlayer';
import { MusicPlayerProvider } from '../context/MusicPlayerContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MusicPlayerProvider>
      <NextSeo 
        title="DogeSoundClub - NFT를 수집하는 유쾌한 사람들의 모임"
        description="도지사운드클럽은 NFT를 수집하는 유쾌한 사람들의 모임입니다. 한국 최초이자 클레이튼 최초로 발행된 제너레이티브 NFT인 메이트를 수집하는 것을 시작으로 2021년 7월에 탄생하였습니다."
        canonical="https://dogesound.club/"
        openGraph={{
          url: 'https://dogesound.club/',
          title: 'DogeSoundClub - NFT를 수집하는 유쾌한 사람들의 모임',
          description: '도지사운드클럽은 NFT를 수집하는 유쾌한 사람들의 모임입니다. 한국 최초이자 클레이튼 최초로 발행된 제너레이티브 NFT인 메이트를 수집하는 것을 시작으로 2021년 7월에 탄생하였습니다.',
          images: [{ url: 'https://dogesound.club/thumb.webp' }],
          siteName: 'DogeSoundClub',
        }}
        twitter={{
          handle: '@dogesoundclub',
          cardType: 'summary_large_image',
        }}
      ></NextSeo>     
        <MusicPlayer />
        <Component {...pageProps}/>
    </MusicPlayerProvider>
  )
}
