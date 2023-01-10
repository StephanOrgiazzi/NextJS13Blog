import Link from 'next/link'
import Navbar from '../components/NavBar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const header = (
        <header>
            <Link href="/">
                <h1>Stephan's Blog</h1>
            </Link>
            <Navbar />
        </header>
    )

    const footer = (
        <footer>
            <p>© 2023 Stephan</p>
        </footer>
    )

    return (
        <html>
            <head />
            <body>
                {header}
                {children}
                {footer}
            </body>
        </html>
    )
}
