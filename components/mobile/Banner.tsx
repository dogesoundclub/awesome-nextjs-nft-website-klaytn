import Image from "next/image";
import Dogesound from "@/components/api/Dogesound";
import Mix from "@/components/api/Mix";

export default function Banner() {
    return (
        <>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ width: "50%", position: "relative", overflowX: "hidden", overflowY: "hidden" }}>
            <div style={{ position: "absolute", whiteSpace: "nowrap", willChange: "transform", animation: "dogesound 20s linear infinite", zIndex: "1" }}>
                <div style={{ color: "#ffffff", position: "relative", textAlign: "center", lineHeight: "15vh", fontSize: "18px" }}>{ Dogesound() }</div>
            </div>
                <Image
                    alt=""
                    layout="fill"
                    src="/mobile/banner/banner1.webp"
                    objectFit="fill"
                />
            </div>
            <div style={{ width: "50%", position: "relative" }}>
                <div style={{ color: "#ffffff", position: "relative", zIndex: "1", textAlign: "center", lineHeight: "15vh", fontSize: "18px" }}><a href="https://dexata.kr/#/?tokenA=0xdd483a970a7a7fef2b223c3510fac852799a88bf" target="_blank">MIX: &#8361;{ Math.ceil(Number(Mix())*1000)/1000 }</a></div>
                <Image
                    alt=""
                    layout="fill"
                    src="/mobile/banner/banner2.webp"
                    objectFit="fill"
                />
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
        </>
    )
}