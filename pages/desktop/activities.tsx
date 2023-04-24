import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/desktop/Layout";
import { identityURL, redirectURI } from "@/components/utils/discord";
import { getHederaMsg, getKlaytnMsg } from "@/services/discord";
import { verifyStore } from "@/stores/verify.store";
import { walletStore } from "@/stores/wallet.store";
import VerifyPage from "@/components/modals/verify";

export default function Activities() {

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
      }, [router.isReady, code, error]);


    return (
        <Layout>
            <VerifyPage />
            <div style={{ display: "flex", alignItems: "flex-end", height: "5vh", padding: "0 20px" }}>
                <div>
                    <span style={{ color: "#36B167", textDecoration: "underline", fontSize: "30px", marginRight: "10px" }}>ACTIVITIES</span>
                    <span>We provide numerous contents that matches DSC&apos;s identity.</span>
                </div>
            </div>
            <div style={{ display: "flex", height: "5vh", background: "url('/desktop/activities/banner1.png')", backgroundSize: "cover", overflowX: "hidden", overflowY: "hidden", position: "relative", lineHeight: "5vh" }}>
                <div style={{ width: "100%", position: "relative" }}>
                    <div style={{ position: "absolute", whiteSpace: "nowrap", willChange: "transform", animation: "welcome 10s linear infinite" }}>
                        <div style={{ color: "#ffffff", fontSize: "17px", fontFamily: "Digital Numbers" }}>OPEN YOUR UNIVERSE. DSC WILL WELCOME YOU.</div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", height: "40vh" }}>
                <img src="/desktop/activities/holder_certification.png" alt="" style={{ width: "60%" }} />
                <img src="/desktop/activities/holder_certification_klaytn.png" alt="" style={{ width: "20%" }} onClick={() => (location.href = identityURL("klaytn"))}/>
                <img src="/desktop/activities/holder_certification_hedera.png" alt="" style={{ width: "20%" }} onClick={() => (location.href = identityURL("hedera"))}/>
            </div>
            <div style={{ display: "flex", height: "20vh" }}>
                <img id="banner2" src="/desktop/activities/banner2.png" alt="" style={{ width: "50%" }} />
                <img id="banner3" src="/desktop/activities/banner3.png" alt="" style={{ width: "50%" }} />
            </div>
            <div style={{ display: "flex", height: "20vh", }}>
                <img id="banner4" src="/desktop/activities/banner4.png" alt="" style={{ width: "50%" }} />
                <img id="banner5" src="/desktop/activities/banner5.png" alt="" style={{ width: "50%" }} />
            </div>
            <style jsx>{`
            @keyframes welcome {
                from {
                    transform: translateX(300%);
                }

                to {
                    transform: translateX(-100%);
                }
            }
            #banner2:hover {
                content: url('/desktop/activities/banner2_hover.png');
            }
            #banner3:hover {
                content: url('/desktop/activities/banner3_hover.png');
            }
            #banner4:hover {
                content: url('/desktop/activities/banner4_hover.png');
            }
            #banner5:hover {
                content: url('/desktop/activities/banner5_hover.png');
            }
            `}</style>
        </Layout>
    );
}
