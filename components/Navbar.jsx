import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <a>home</a>
            </Link>
            <Link href="/about">
                <a>about</a>
            </Link>
        </nav>
    )
}