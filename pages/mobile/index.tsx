
export default function Index() {
    return (
        <>
        <div style={{ background: "url('/mobile/index/main.webp')", textAlign: "center", backgroundSize: "cover", display: "flex", alignItems: "center", height: "100vh" }}></div>
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
            }}
        >
            <div className="window" style={{ margin: "32px", width: "300px" }}>
                <div className="title-bar" style={{ padding: "12px 3px 12px 3px" }}>
                <div className="title-bar-text">Welcome to DSC</div>
                <div className="title-bar-controls">
                    <button aria-label="Close"></button>
                </div>
                </div>
                <div className="window-body">
                <section className="field-row" style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                    <section className="field-row" style={{ justifyContent: "center" }}>
                        <img src="/mobile/index/logo.webp" alt="" style={{ width: "100px" }} />
                    </section>
                    <section className="field-row" style={{ flexDirection: "column", justifyContent: "center", color: "#000", width: "100%", margin: "0px" }}>
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>Welcome to the</p>
                        <p style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 10px 0" }}>Doge Sound Club!</p>
                        <button style={{ color: "#000000", margin: "0" }} onClick={() => (location.href = "/about")}>enter</button>
                    </section>
                </section>
                </div>
            </div>
        </div>
        </>
    );
}