import WidgetBotCrate from "@/components/discord/widgetbot";

type LayoutProps = {
    children: React.ReactNode
}
export default function Layout({ children }: LayoutProps){
    return (
      <>
        {children}
        <WidgetBotCrate server="872113947166249041" channel="1056835060113866752" />
      </>
    );
  }