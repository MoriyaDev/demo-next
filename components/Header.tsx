// components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '10px', background: '#333', color: 'white' }}>
      <nav>
        <Link href="/">בית</Link> |{' '}
        <Link href="/about">אודות</Link> |{' '}
        <Link href="/contact">צור קשר</Link>
      </nav>
    </header>
  )
}
