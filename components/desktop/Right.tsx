import { useEffect, useState } from "react";
import WalletPage from "@/components/modals/wallet";
import { walletStore } from "@/stores/wallet.store";

export default function Right() {
    const [klaytnAddress, setKlaytnAddress] = useState(false);
    const [address, setAddress] = useState('');
    const [walletName, setwalletName] = useState('');
    const WalletStore = walletStore();
    const WalletShow = () => { WalletStore.setView(true); }

    function sessionRemove(){
        sessionStorage.removeItem('klaytn_klip_address');
        sessionStorage.removeItem('klaytn_kaikas_address');
        location.reload();
    }

    useEffect(() => {
        const klaytn_klip_address = sessionStorage.getItem('klaytn_klip_address');
        const klaytn_kaikas_address = sessionStorage.getItem('klaytn_kaikas_address');
        if (klaytn_klip_address || klaytn_kaikas_address) {
            setKlaytnAddress(true);
            if(klaytn_klip_address) { setAddress(klaytn_klip_address); setwalletName('KLIP'); }
            if(klaytn_kaikas_address) { setAddress(klaytn_kaikas_address); setwalletName('KAIKAS'); }
        }
    }, []);
    
    return (
            <>
                <div style={{ padding: "10px" }}>
                    { klaytnAddress ? 
                    <>
                    <div style={{ display: "flex", padding: "5px" }}>
                        <p style={{ fontFamily: "Yantramanav", fontSize: "25px", fontWeight: "900", color: "#656565" }}>Your Wallet</p>
                    </div>
                    <div style={{ display: "flex", padding: "5px" }}>
                        <p style={{ fontSize: "18px", color: "#656565" }}>{ address.slice(0, 6) + "....."+ address.slice(-5) + " " + walletName }</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "5px" }}>
                        <a onClick={ sessionRemove } target="_blank" style={{ fontFamily: "Yantramanav", color: "#54A5F0", fontSize: "15px" }}>&gt;&gt; Logout</a>
                    </div>
                    </> : <img src="/desktop/layout/right/login.png" alt="" style={{ width: "100%" }} onClick={ WalletShow }/>
                    }
                    <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                        <a href="https://discord.com/invite/dogesoundclub" target="_blank"><img src="/desktop/layout/right/banner1.gif" alt="" style={{ width: "100%" }} /></a>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                        <a href="https://opensea.io/collection/portal-engine" target="_blank">
                            <video autoPlay muted width="100%">
                                <source src="/desktop/layout/right/banner2.webm" type="video/webm"/>
                            </video>
                            <img src="/desktop/layout/right/banner2.webm" alt="" style={{ width: "100%" }}/>
                        </a>
                    </div>
                </div>
                <WalletPage />
            </>
    );
}