import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/mobile/Layout";
import { identityURL, redirectURI } from "@/components/utils/discord";
import { getHederaMsg, getKlaytnMsg } from "@/services/discord";
import { verifyStore } from "@/stores/verify.store";
import { walletStore } from "@/stores/wallet.store";
import VerifyPage from "@/components/modals/verify";
import WalletMobilePage from "@/components/modals/walletMobile";

export default function Activities() {
    const [klaytnAddress, setKlaytnAddress] = useState(true);
    const WalletStore = walletStore();
    const WalletShow = () => { WalletStore.setView(true); }

    const router = useRouter();
    const hook = verifyStore();
    const { error, code, network } = router.query;

    useEffect(() => {
        if (!router.isReady) return;
        if (error === "access_denied") window.open(redirectURI);
        if (code && typeof code == "string" && network) {
          if (network === "klaytn") {
            getKlaytnMsg(code).then((res) => {
              // console.log(res);
              if (res) hook.setResult("success", "klaytn");
              else hook.setResult("fail", "klaytn");
            });
          } else if (network === "hedera") getHederaMsg(code, hook.setResult);
        }
        // setVerifyMsg({ state: "select", msg: "네트워크 선택" });
        // if (code && typeof code === "string" && address)
        //   getUserInfo(code, address).then((res) => setInit(res));
        const klaytn_klip_address = sessionStorage.getItem('klaytn_klip_address');
        const klaytn_kaikas_address = sessionStorage.getItem('klaytn_kaikas_address');
        if (klaytn_klip_address || klaytn_kaikas_address) { setKlaytnAddress(false); }
      }, [router.isReady, code, error]);

    return (
        <Layout>
            <VerifyPage />
            <WalletMobilePage />
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img src="/mobile/activities/holder_certification.webp" alt="" style={{ width: "100%" }}/>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img src="/mobile/activities/holder_certification_klaytn.webp" alt="" style={{ width: "100%" }} onClick={() => klaytnAddress ? WalletShow() : location.href = identityURL("klaytn")}/>
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img src="/mobile/activities/holder_certification_hedera.webp" alt="" style={{ width: "100%" }}/>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img id="banner1" src="/mobile/activities/banner1.webp" alt="" style={{ width: "100%" }}/>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img id="banner2" src="/mobile/activities/banner2.webp" alt="" style={{ width: "100%" }}/>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img id="banner3" src="/mobile/activities/banner3.webp" alt="" style={{ width: "100%" }}/>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img id="banner4" src="/mobile/activities/banner4.webp" alt="" style={{ width: "100%" }}/>
                    </div>
                </div>
            </div>
            <style jsx>{`
                #banner1:hover {
                    content: url('/mobile/activities/banner1_hover.webp');
                }
                #banner2:hover {
                    content: url('/mobile/activities/banner2_hover.webp');
                }
                #banner3:hover {
                    content: url('/mobile/activities/banner3_hover.webp');
                }
                #banner4:hover {
                    content: url('/mobile/activities/banner4_hover.webp');
                }
            `}</style>
        </Layout>
    );
}
