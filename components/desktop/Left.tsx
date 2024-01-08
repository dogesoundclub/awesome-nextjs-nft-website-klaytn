import Image from "next/image"

export default function Left() {
    return (
        <div style={{ padding: "10px" }}>
            <div style={{ display: "flex", padding: "5px" }}>
                <p style={{ fontFamily: "Yantramanav", fontSize: "25px", fontWeight: "900", color: "#656565" }}>Popular Dogesound</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: "5px", color: "#54A5F0", fontSize: "15px" }}>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/18" target="_blank">{"1. 도지 사운드 클럽에 다니고 나의 성공시대 시작됐다~ 도지 사운드 클럽에 다니고 나를 찾는 사람 많아졌다! 도지 사운드 클럽♪♬".substring(0, 20)+"..."}</a>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/17" target="_blank">{"2. 도사클 하나로 노후준비 끝났다.".substring(0, 20)+"..."}</a>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/14" target="_blank">{"3. 카리나!! 메이트 가지고 싶으면 이야기해 내가 쿨하게 그냥준다!!".substring(0, 20)+"..."}</a>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/13" target="_blank">{"4. 이제 개소리도 글로발 진출이다!! Now tell me your bullshit 세계의 불쓋 들은 하나하나 작은 불씨가되어 모이고 이는 곧 DSC의 큰 화력이 될것이다 !!".substring(0, 20)+"..."}</a>
                <a href="https://opensea.io/assets/klaytn/0x252a59642c494db5d3645bca65a36e70e50bf85e/12" target="_blank">{"5. 메이트사려고 제 4 금융권에서 풀대출 받았습니다...".substring(0, 20)+"..."}</a>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "5px" }}>
                <a href="https://opensea.io/collection/dsc-dogesound-winners" target="_blank" style={{ fontFamily: "Yantramanav", color: "#54A5F0", fontSize: "15px" }}>&gt;&gt;&gt; see more</a>
            </div>
            <div style={{ display: "flex", padding: "5px", width: "100%"}}>
                <Image 
                    src="/desktop/layout/left/LeftBanner.webp"
                    alt=""
                    layout="responsive"
                    width={793}
                    height={934}
                />
            </div>
            {/* <div style={{ display: "flex", padding: "5px" }}>
                <img 
                    src="/desktop/layout/left/license.webp"
                    alt=""
                    width="100%"
                />
            </div> */}
            <div style={{ textAlign: "center", fontFamily: "Audiowide", color: "#fff", background: "#65656580", padding: "5px" }}>
                <p>Unless otherwise stated, the content of this page is licensed under Creative Contents Attribution-Share Alike 4.0 International License</p>
            </div>
            <div style={{ textAlign: "center", padding: "5px" }}>
                <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
                    <Image 
                        src="/desktop/layout/left/CC_BY-SA_icon.webp"
                        alt=""
                        width="100"
                        height="35"
                    />
                </a>
            </div>
            <div style={{ textAlign: "center", fontFamily: "Audiowide", color: "#656565", padding: "5px" }}>
                <p>© Doge Sound Club</p>
                <p>support@dsclabel.co.kr</p>
            </div>
        </div>
    );
}