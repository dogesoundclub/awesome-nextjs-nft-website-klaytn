import Link from 'next/link'

export default function Logo() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link href="/"><img src="/mobile/logo.webp" alt="" style={{ width: "100%" }} /></Link>
        </div>
    )
}