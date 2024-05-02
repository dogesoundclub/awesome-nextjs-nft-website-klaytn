import Link from 'next/link'
import { useRouter } from "next/navigation";

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
        <nav className="bg-gradient-to-b">
            <div className="flex justify-between items-center h-full">
                <Link href="/"><img src="/logo.webp" alt="dogesoundclub_logo" className="h-full"/></Link>
                <div className="w-1/2">
                    <ul className="flex justify-end list-none text-2xl font-bold font-audiowide">
                        {navigation.map((item) => (
                            <li key={item.name} className="p-2.5 text-shadow">
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        <style jsx global>{`
            .text-shadow {
                text-shadow: -1px 1px #000, 1px 1px #000, 1px 1px #000, 1px -1px #000;
            }
            a:hover {
                text-shadow: 3px -1px 1px black, 1px 1px black, 1px 1px black, 1px -1px black;
            }
        `}</style>
        </>
    )
}
