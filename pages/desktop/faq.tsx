import Layout from "@/components/desktop/Layout";

export default function Faq() {
    return (
        <Layout>
            <div style={{ display: "flex", height: "30vh" }}>
                <img src="/desktop/faq/pray_for_dsc.webp" alt="" style={{ width: "100%" }} />
            </div>
            <div style={{ overflow:"scroll", height: "60vh", padding: "20px", fontFamily: "Alegreya Sans", fontSize: "20px" }}>
                <div style={{ color: "#36B167", fontFamily: "Sunflower", fontSize: "32px", textDecoration: "underline" }}>FAQ</div>

            </div>
        </Layout>
    );
}
