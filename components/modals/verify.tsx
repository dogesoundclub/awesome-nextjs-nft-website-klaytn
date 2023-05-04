import { verifyStore } from "@/stores/verify.store";

export default function VerifyPage() {
  const hook = verifyStore();
  if (!hook.modal) return <></>;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "brightness(0.5)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
      }}
    >
      <div className="window" style={{ margin: "32px", width: "300px" }}>
        <div className="title-bar" style={{ padding: "12px 3px 12px 3px" }}>
          <div className="title-bar-text">DSC Holder Certification</div>

          <div className="title-bar-controls">
            <button aria-label="Close" onClick={() => hook.init()}></button>
          </div>
        </div>
        <div className="window-body">
          <section className="field-row" style={{ justifyContent: "center" }}>
            {hook.result === "success" ? (
              hook.network === "klaytn" ? (
                <img
                  src="/desktop/activities/certification/klaytnsuccess.webp"
                  style={{ width: "32px" }}
                />
              ) : (
                <img
                  src="/desktop/activities/certification/hederasuccess.webp"
                  style={{ width: "32px" }}
                />
              )
            ) : hook.result === "fail" && hook.network === "klaytn" ? (
              <img
                src="/desktop/activities/certification/klaytnfail.webp"
                style={{ width: "32px" }}
              />
            ) : (
              <img
                src="/desktop/activities/certification/hederafail.webp"
                style={{ width: "32px" }}
              />
            )}

            <p>{hook.resultMsg}</p>
          </section>
          <section className="field-row" style={{ justifyContent: "center" }}>
            <button style={{ color: "#000000" }} onClick={() => hook.init()}>
              OK
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
