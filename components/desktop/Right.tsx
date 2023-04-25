import WalletPage from "@/components/modals/wallet";
import { walletStore } from "@/stores/wallet.store";

export default function Right() {
    const WalletStore = walletStore();
    const WalletShow = () => { WalletStore.setView(true); }
    
    return (
            <>
                <div style={{ padding: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                        <img src="/desktop/layout/right/login.png" alt="" style={{ width: "100%" }} onClick={ WalletShow }/>
                    </div>
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
                <WalletPage/>
            </>
    );
}