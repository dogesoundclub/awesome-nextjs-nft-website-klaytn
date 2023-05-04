import Layout from "@/components/mobile/Layout";

export default function Faq() {
    return (
        <Layout>
            <div style={{ padding: "0 10px", color: "#000", fontFamily: "Sunflower" }}>
                <div style={{ display: "flex", alignItems: "flex-start", margin: "10px 0" }}>
                    <img src="/mobile/faq/qna1.webp" style={{ width: "50px", marginRight: "5px" }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{fontSize: "25px", color: "#000000"}}>What is DogeSoundClub?</div>
                        <div style={{fontSize: "15px", color: "#777777"}}>DogeSoundClub (DSC) is the first online PFP NFT project based in South Korea, based on the Klaytn blockchain.</div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", margin: "10px 0" }}>
                    <img src="/mobile/faq/qna2.webp" style={{ width: "50px", marginRight: "5px" }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{fontSize: "25px", color: "#000000"}}>Why is this project called DogeSoundClub (DSC)?</div>
                        <div style={{fontSize: "15px", color: "#777777"}}>DogeSoundClub, as its name presents, means ‘a club for nonsense bullshiters’. Anyone with an entrance ticket can come in and freely express various thoughts, even if they are full of nonsense. Mate is a 10,000 pieces of Generative Art NFT which works as a ticket to enter the DogeSoundClub.</div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", margin: "10px 0" }}>
                    <img src="/mobile/faq/qna3.webp" style={{ width: "50px", marginRight: "5px" }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{fontSize: "25px", color: "#000000"}}> How can I get Mates?</div>
                        <div style={{fontSize: "15px", color: "#777777"}}>You can buy our NFTs through the secondary market of OpenSea and also at KLUBS, a marketplace that uses MIX as its currency.</div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", margin: "10px 0" }}>
                    <img src="/mobile/faq/qna5.webp" style={{ width: "50px", marginRight: "5px" }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{fontSize: "25px", color: "#000000"}}>What is MIX token?</div>
                        <div style={{fontSize: "15px", color: "#777777"}}>MIX Token is an cryptocurrency connected to DodgeSoundClub, officially launched by DSC. The MIX token acts as a key currency within the DodgeSoundClub ecosystem. If you have a Mate, you can mine a certain amount of MIX tokens.</div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", margin: "10px 0" }}>
                    <img src="/mobile/faq/qna6.webp" style={{ width: "50px", marginRight: "5px" }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{fontSize: "25px", color: "#000000"}}>Where can I buy MIX token?</div>
                        <div style={{fontSize: "15px", color: "#777777"}}>You can buy MIX token via KLAYswap and KlayFi.</div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", margin: "10px 0" }}>
                    <img src="/mobile/faq/qna7.webp" style={{ width: "50px", marginRight: "5px" }}/>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{fontSize: "25px", color: "#000000"}}>What is AYIAS?</div>
                        <div style={{fontSize: "15px", color: "#777777"}}>AYIAS is our own metaverse platform. And it’s the final destination of the DogeSoundClub’s ecosystem.</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
