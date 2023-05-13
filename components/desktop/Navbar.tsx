// Navbar.tsx:
import Link from 'next/link'
import { useRouter } from "next/router";

const navigation = [
    { name: "about", href: "/about" },
    { name: "gallery", href: "/gallery" },
    { name: "board", href: "/board" },
    { name: "activities", href: "/activities" },
    { name: "MIX", href: "/mix" },
    { name: "FAQ", href: "/faq" }
];

export default function Navbar(){
    
    const router = useRouter();

    return (
        <>
        <nav>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "10vh", padding: "10px", background: "linear-gradient(180deg,#646464 30%,#ffffff88 50%,#646464 70%)" }}>
                <Link href="/"><img src="/logo.webp" alt="dogesoundclub_logo" style={{ height: "10vh" }}/></Link>
                <div style={{ width: "50%"}}>
                    <ul style={{ display: "flex", justifyContent: "flex-end", listStyle: "none", fontSize: "20px", fontFamily: "Audiowide", fontWeight: "bold" }}>
                        {navigation.map((item) => (
                            <li key={item.name} style={{ padding: "10px", textShadow: "-1px 1px #000, 1px 1px #000, 1px 1px #000, 1px -1px #000" }}>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        <style jsx>{`
            a:hover{
                text-shadow: 3px -1px 1px black, 1px 1px black, 1px 1px black, 1px -1px black;
            }
        `}</style>
        </>
    )
}
