import { modalsStore } from "@/stores/modals.store";

export default function SocialPage() {
    const modals = modalsStore();
    const Close = () => { modals.setView(true); }

    if(modals.view) return <></>

    return (
        <div
            style={{
                position: "fixed",
                right: 0,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
            }}
        >
            <div className="window">
                <div className="title-bar" style={{ padding: "12px 3px 12px 3px" }}>
                <div className="title-bar-text"></div>
                <div className="title-bar-controls">
                    <button aria-label="Close" onClick={ Close }></button>
                </div>
                </div>
                <div className="window-body">
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="https://discord.gg/79CqdTdu8w" target="_blank"><img src="/logo/discord.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="https://www.instagram.com/dogesoundclub/" target="_blank"><img src="/logo/instagram.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="https://twitter.com/dogesoundclub" target="_blank"><img src="/logo/twitter.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="mailto:support@dsclabel.co.kr" target="_blank"><img src="/logo/email.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="https://t.me/dogesoundclub" target="_blank"><img src="/logo/telegram.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="https://www.youtube.com/@dosocl" target="_blank"><img src="/logo/youtube.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="https://github.com/dogesoundclub" target="_blank"><img src="/logo/git.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <a href="https://opensea.io/collection/dogesoundclub-mates" target="_blank"><img src="/logo/opensea.webp" alt="" style={{ width: "32px" }}/></a>
                    </section>
                </div>
            </div>
        </div>
    )
}