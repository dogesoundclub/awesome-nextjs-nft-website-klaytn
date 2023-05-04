import { useCallback, useState, useRef } from "react";
import { walletStore } from "@/stores/wallet.store";
import { kaikasConnect } from "@/components/wallet/kaikas";
import QRCode from "qrcode";

export default function WalletPage() {
    const [data, setData] = useState('');
    const [time, setTime] = useState(300);
    const timeState = useRef(300);
    const [popupKlip, setPopupKlip] = useState(false);
    const WalletStore = walletStore();
    const WalletClose = () => { WalletStore.setView(false); }
    const kaikas = async () => { await kaikasConnect(false); }
    const klipClose = () => { setPopupKlip(false); }

    const klip = useCallback(() => {
      const klipSDK = require("klip-sdk");
      async function KlipConnect(): Promise<any> {
        const res = await klipSDK.prepare.auth({ bappName: "도지사운드클럽" });
        await klipSDK.request(res, async () => {
          const qr = await QRCode.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`);
          timeState.current = 300;
          setData(qr);
          return new Promise((resolve) => {
              const interval = setInterval(async () => {
                  setTime(timeState.current--);
                  const result = await klipSDK.getResult(res.request_key);
                  if (result.result !== undefined) {
                      clearInterval(interval);
                      setTimeout(() => resolve(result.result), 2000);
                      sessionStorage.setItem('klaytn_klip_address', result.result.klaytn_address);
                      location.reload();
                  }
              }, 1000);
          });
        });
      }
      KlipConnect();
      setPopupKlip(true);
    }, []);

    if(popupKlip) return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
          zIndex: "11",
        }}
      >
        <div className="window" style={{ margin: "32px", width: "300px" }}>
          <div className="title-bar" style={{ padding: "12px 3px 12px 3px" }}>
            <div className="title-bar-text">Klip QRCode</div>
            <div className="title-bar-controls">
              <button aria-label="Close" onClick={ klipClose }></button>
            </div>
          </div>
          <div className="window-body">
            <section className="field-row" style={{ justifyContent: "center" }}>
              <img src={data}/>
            </section>
            <section className="field-row" style={{ justifyContent: "center", fontSize: "10px" }}>
            QR 코드 리더기 또는 카카오톡 앱을 통해 QR 코드를 스캔해주세요.<br/>
            카카오톡 실행 ▶ 상단 검색창 클릭 ▶ 코드 스캔 후 로그인<br/>
            * Klip &gt; 코드스캔 (사이드메뉴)에서도 스캔이 가능합니다.<br/>
            </section>
            {/* <section className="field-row" style={{ justifyContent: "center" }}>
              남은 시간: { Math.floor((time%3600)/60) }분 { time%60 }초
            </section> */}
            <section className="field-row" style={{ justifyContent: "center" }}>
              <button style={{ color: "#000000" }} onClick={ klipClose }>Close</button>
            </section>
          </div>
        </div>
      </div>
    );

    if (!WalletStore.view) return <></>;

    return (
        <>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backdropFilter: "brightness(0.5)",
            width: "100%",
            height: "100vh",
            zIndex: "10",
          }}
        >
          <div className="window" style={{ margin: "32px", width: "300px" }}>
            <div className="title-bar" style={{ padding: "12px 3px 12px 3px" }}>
              <div className="title-bar-text">Wallet Connect</div>
              <div className="title-bar-controls">
                <button aria-label="Close" onClick={ WalletClose }></button>
              </div>
            </div>
            <div className="window-body">
              <section className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ color: "#000000", width: "50%" }} onClick={ kaikas }>Connect to Kaikas</button>
              </section>
              <section className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ color: "#000000", width: "50%" }} onClick={ klip }>Connect to Klip</button>
              </section>
              <section className="field-row" style={{ justifyContent: "center" }}>
                <button style={{ color: "#000000", width: "50%" }} onClick={ WalletClose }>Don&apos;t Connect</button>
              </section>
            </div>
          </div>
        </div>
        </>
    );
}