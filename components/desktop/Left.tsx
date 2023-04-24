import Image from "next/image"

export default function Left() {
    return (
        <div style={{ padding: "10px" }}>
            <div style={{ display: "flex", padding: "5px" }}>
                <p style={{ fontFamily: "Yantramanav", fontSize: "25px", fontWeight: "900", color: "#656565" }}>Popular Dogesound</p>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "5px" }}>
                <a href="https://opensea.io/collection/dsc-dogesound-winners" target="_blank" style={{ fontFamily: "Yantramanav", fontWeight: "900", color: "#54A5F0", fontSize: "15px" }}>&gt;&gt;&gt; see more</a>
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
                <Image 
                    src="/desktop/layout/left/LeftBanner.png"
                    alt=""
                    width="793"
                    height="934"
                />
            </div>
            <div style={{ textAlign: "center", padding: "5px" }}>
                <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
                    <Image 
                        src="/desktop/layout/left/CC_BY-SA_icon.png"
                        alt=""
                        width="100"
                        height="35"
                    />
                </a>
            </div>
            <div style={{ textAlign: "center", fontFamily: "Audiowide", color: "#656565", padding: "5px" }}>
                <p>DSC LABEL inc.</p>
                <p>support@dsclabel.co.kr</p>
            </div>
        </div>
    );
}