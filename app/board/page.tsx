import { useEffect, useState } from "react";
import Layout from "@/components/desktop/Layout";
import WalletPage from "@/components/modals/wallet";
import { walletStore } from "@/stores/wallet.store";

export default function Board() {
    const [klaytnAddress, setKlaytnAddress] = useState(true);
    const WalletStore = walletStore();
    const WalletShow = () => { WalletStore.setView(true); }

    useEffect(() => {
        const klaytn_klip_address = sessionStorage.getItem('klaytn_klip_address');
        const klaytn_kaikas_address = sessionStorage.getItem('klaytn_kaikas_address');
        if (klaytn_klip_address || klaytn_kaikas_address) { setKlaytnAddress(false); }
    }, []);
    
    if(klaytnAddress) {
        return (
            <Layout>
                <div style={{ display: "flex", height: "90vh", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ padding: "10px" }}>
                        <img src="/desktop/layout/right/login.png" alt="" style={{ width: "100%" }} onClick={ WalletShow }/>
                    </div>
                </div>
                <WalletPage />
            </Layout>
        );
    }

    return (
        <Layout>
            <div style={{ display: "flex", height: "5vh" }}>
                <div style={{ width: "30%" }}>
                    <img src="/desktop/board/mate.png" alt="" style={{ height: "5vh" }} />
                    <span>DSC Live Chat</span>
                </div>
                <div style={{ width: "70%" }}>
                    <img src="/desktop/board/mate.png" alt="" style={{ height: "5vh" }} />
                    <span>DSC Live Chat</span>
                </div>
            </div>
            <div style={{ display: "flex", height: "85vh" }}>
                <div style={{ width: "30%" }}>

                </div>
                <div style={{ width: "70%", display: "flex" }}>
                    <div style={{ width: "70%"}}>
                    </div>
                    <div style={{ width: "30%"}}>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
