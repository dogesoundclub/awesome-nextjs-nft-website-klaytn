import Image from "next/image";
import Layout from "@/components/desktop/Layout";
import Dogesound from "@/components/api/Dogesound";
import Mix from "@/components/api/Mix";

export default function Index() {

    return (
        <Layout>
            <div style={{ padding: "10px", border: "#F7D701 10px solid", height: "10vh", background: "url('/desktop/index/dogesound.png')", backgroundSize: "cover", overflowX: "hidden", overflowY: "hidden", position: "relative", display: "flex", alignItems: "center" }}>
                <div style={{ position: "absolute", whiteSpace: "nowrap", willChange: "transform", animation: "dogesound 20s linear infinite" }}>
                    <div style={{ color: "#ffffff", fontSize: "17px", fontFamily: "NeoDunggeunmo" }}>{ Dogesound() }</div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", height: "15vh" }}>
                <div style={{ width: "50%", position: "relative" }}>
                        <Image
                            alt=""
                            layout="fill"
                            src="/desktop/index/banner1.png"
                            objectFit="fill"
                        />
                </div>
                <div style={{ width: "50%", position: "relative" }}>
                    <div style={{ color: "#ffffff", position: "relative", zIndex: "1", textAlign: "center", lineHeight: "15vh", fontSize: "18px" }}><a href="https://dexata.kr/#/?tokenA=0xdd483a970a7a7fef2b223c3510fac852799a88bf" target="_blank">MIX: &#8361;{ Math.ceil(Number(Mix())*1000)/1000 }</a></div>
                    <Image
                        alt=""
                        layout="fill"
                        src="/desktop/index/banner2.png"
                        objectFit="fill"
                    />
                </div>
            </div>
            <div style={{ overflow:"scroll", height: "65vh", padding: "20px" }}>
                <div style={{ fontSize: "24px", fontFamily: "Alegreya Sans" }}>
                    <br />
                    Welcome to the Doge Sound Club (DSC), a friendly community that
                    embraces creativity and collaboration through the use of
                    generative Non-Fungible Tokens (NFTs) and an open-license
                    approach.
                    <br />
                    <br />
                    Doge Sound Club is centered around the concept of &quot;Doge 
                    Sound,&quot; which playfully refers to nonsensical jokes and
                    sayings, known as &quot;Gaesori&quot; in Korean. The term 
                    &quot;Doge Sound&quot; derives from the Korean words 
                    &quot;Gae&quot; (meaning dog) and &quot;Sori&quot; (meaning 
                    sound), signifying lighthearted, entertaining conversations.
                    <br />
                    <br />
                    Our project started in July 2021 with the launch of Korea&apos;s 
                    first generative NFTs called Doge Sound Club Mates. These unique 
                    digital collectibles form the basis for our membership activities 
                    and foster a sense of belonging within the community.
                    <br />
                    <br />
                    DSC is committed to fostering a creative environment where 
                    everyone can contribute, regardless of their background or skill 
                    set. We believe in the importance of an open-license approach, 
                    ensuring that our stories and content are available for anyone to 
                    use and build upon without restrictions.
                    <br />
                    <br />
                    To support our open-license philosophy, all DSC content follows 
                    the Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0) 
                    license, unless otherwise stated. 
                    <br />
                    <br />
                    Our community members are encouraged to create and share their 
                    work using a variety of mediums, such as writing, drawing, or 
                    coding. To facilitate this collaborative process, we use Git, a 
                    version control system that allows for seamless cooperation and 
                    the continuous development of our collective stories.
                    <br />
                    <br />
                    <span style={{ fontSize: "3rem", fontFamily: "Alegreya Sans", fontWeight: "bold" }}>
                    TOY DAPP
                    </span>
                    <br />
                    <br />
                    At Doge Sound Club (DSC), we also develop Toy Decentralized Applications 
                    (Toy DApps) to make blockchain technology more accessible and enjoyable 
                    for everyone, regardless of their knowledge about the blockchain. These 
                    playful dApps may not have specific utility, but they provide a fun, 
                    engaging experience for users.
                    <br />
                    <br />
                    One of our popular Toy DApps is the Doge Sound Contest. This competition 
                    combines blockchain technology with a Discord bot to host a monthly 
                    contest where participants submit their best &quot;Doge Sound&quot; 
                    entries. Doge Sound refers to nonsensical jokes and sayings, known as 
                    &quot;Gaesori&quot; in Korean. DSC community members vote for the most 
                    illogical and unpredictable submissions to select a winner.
                    <br />
                    <br />
                    The winning Doge Sound is then showcased on the main page of our 
                    website. Winners also have the opportunity to mint their Doge Sound as 
                    an NFT by clicking a button connected to the smart contract.
                    <br />
                    <br />
                    The idea behind hosting this unique contest is rooted in our 
                    project&apos;s fiction. The DSC community believes that the world is a 
                    simulation, and that inconsistent or unpredictable sayings and actions 
                    often cause bugs in the simulation. These bugs serve as clues that the 
                    world is a simulation. To encourage the discovery and exploration of 
                    these bugs, we&apos;ve been running the Doge Sound Contest on the Klaytn 
                    blockchain since 2021.
                    <br />
                    <br />
                    By developing and promoting Toy DApps like the Doge Sound Contest, DSC 
                    aims to create a fun and inclusive environment for users to engage with 
                    blockchain technology, fostering curiosity and creativity within our 
                    community.
                    <br />
                    <br />
                    <span style={{ fontSize: "3rem", fontFamily: "Alegreya Sans", fontWeight: "bold" }}>MISSION</span>
                    <br />
                    <br />
                    Our ultimate mission at Doge Sound Club is to create a world where 
                    everyone can be a creator, unrestricted by licensing barriers or other 
                    limitations. We aim to make it easy for ordinary people to express their 
                    creativity and contribute to a shared universe of stories and 
                    experiences.
                    <br />
                    <br />
                    To learn more about the Doge Sound Club, our team, and our various NFT 
                    offerings, please visit our website and join our vibrant
                    community.
                    <br />
                    <br />
                </div>
            </div>
            <style jsx>{`
            @keyframes dogesound {
                from {
                    transform: translateX(100%);
                }

                to {
                    transform: translateX(-100%);
                }
            }
            `}</style>
        </Layout>
    );
}
