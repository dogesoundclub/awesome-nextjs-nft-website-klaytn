import { walletStore } from "@/stores/wallet.store";
import { kaikasConnect } from "@/components/wallet/kaikas";

export default function WalletPage() {
    const WalletStore = walletStore();
    const WalletClose = () => { WalletStore.setView(false); }
    if (!WalletStore.view) return <></>;

    const kaikas = async () => { await kaikasConnect(true); }
    const klip = async () => { }

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