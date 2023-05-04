import type { GetServerSidePropsContext } from 'next';
import Layout from "@/components/mobile/Layout";
import WalletMobilePage from "@/components/modals/walletMobile";
import { walletStore } from "@/stores/wallet.store";

export default function Board({ isBoard }:any) {
    const WalletStore = walletStore();
    const WalletShow = () => { WalletStore.setView(true); }

    if(isBoard) return <>ss</>

    return (
        <Layout>
            <WalletMobilePage />
            <div style={{ padding: "50px 10px", color: "#000", textAlign: "center" }}>
                <button style={{ paddingRight: "50px", paddingLeft: "50px", paddingTop: "15px", paddingBottom: "15px", fontSize: "15px", color: "#000000", background: "#9F9F9F", border: "none" }} onClick={()=> WalletShow() }>Login</button>
            </div>
            <div style={{ display: "flex" }}>
                <img src="/mobile/board/pray_for_dsc.webp" alt="" style={{ width: "100%" }} />
            </div>
            <div style={{ display: "flex" }}>
                <img src="/mobile/board/banner1.webp" alt="" style={{ width: "100%" }} />
            </div>
        </Layout>
    );
}

export async function login(context: GetServerSidePropsContext) {
    const klaytn_klip_address = sessionStorage.getItem('klaytn_klip_address');
    const klaytn_kaikas_address = sessionStorage.getItem('klaytn_kaikas_address');
    let isBoard;
    if (klaytn_klip_address || klaytn_kaikas_address) { isBoard = true; }

    return {
        props: { isBoard },
      };
}