import { kaikasConnect } from "@/components/wallet/kaikas";

export default function Right() {
    

    const kaikas = async () => { await kaikasConnect(true); }

    return (
        <div style={{ padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                <img src="/desktop/layout/right/login.png" alt="" style={{ width: "100%" }} onClick={ kaikas }/>
            </div>
            <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                <a href="https://discord.com/invite/dogesoundclub" target="_blank"><img src="/desktop/layout/right/banner1.gif" alt="" style={{ width: "100%" }} /></a>
            </div>
            <div style={{ display: "flex", justifyContent: "center", padding: "5px" }}>
                <a href="https://opensea.io/collection/portal-engine" target="_blank"><img src="/desktop/layout/right/banner2.gif" alt="" style={{ width: "100%" }}/></a>
            </div>
        </div>
    );
}