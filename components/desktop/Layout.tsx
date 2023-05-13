// Layout.tsx:
import Navbar from "./Navbar";
import Left from "./Left"
import Right from "./Right"
import WidgetBotCrate from "@/components/discord/widgetbot";

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps){
  return (
    <div>

      <Navbar/>
      <div style={{ display: "flex", height: "90vh", background: "#fff", color: "#000"}}>
        <div style={{ width: "15%", background: "#C1C1C1", height: "90vh" }}>
          <Left/>
        </div>
        <div style={{ width: "70%", height: "90vh" }}>
          { children }
        </div>
        <div style={{ width: "15%", background: "#D1D4BD", height: "90vh" }}>
          <Right/>
        </div>
      </div>
      <WidgetBotCrate server="872113947166249041" channel="1056835060113866752" />

    </div>

  );
}
