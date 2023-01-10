import Link from 'next/link'
import styles from './NavBar.module.css'

const routes = [
    { name: 'StaticProps', path: '/staticprops' },
    { name: 'Server', path: '/server' },
    { name: 'Client', path: '/client' }
]

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                {routes.map((route) => (
                    <Link key={route.path} href={route.path}>
                        {route.name}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}
