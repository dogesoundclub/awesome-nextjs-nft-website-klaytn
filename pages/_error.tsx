export default function Page404() {
    return (
        <div style={{ background: "url('/error/bg.png')", textAlign: "center", backgroundSize: "contain", display: "flex", alignItems: "center", height: "100vh" }}>
            <div style={{ color: "#fff", margin: "0 auto" }}>
                <div style={{ fontFamily: "Bigshot One", fontSize: "15em", fontWeight: "bold", lineHeight: "0.6" }}>404</div>
                <div style={{ fontFamily: "Bigshot One", fontSize: "4em", fontWeight: "bold", lineHeight: "1" }}>page not found</div>
                <div style={{ fontFamily: "Actor", fontSize: "20px", paddingTop: "20px" }}>The Page you are looking for doesn’t exist or an other error occured.<br/>Go back, or head over to <a href="https://dogesound.club/" style={{textDecoration:"underline"}}>dogesound.club</a> to choose a new direction.</div>
            </div>
        </div>
    )
};