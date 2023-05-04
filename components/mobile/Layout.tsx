import Logo from "./Logo";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialPage from "@/components/modals/social";
import WidgetBotCrate from "@/components/discord/widgetbot";

type LayoutProps = {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps){
    return (
      <>
        <div style={{ background: "#D9D9D9", color: "#000" }}>
          <Logo/>
          <Banner/>
          <Navbar/>
          <SocialPage/>
          {children}
          <Footer/>
        </div>
        <WidgetBotCrate server="872113947166249041" channel="1056835060113866752" />
      </>
    );
  }