import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/about">About</Link> |{' '}
      <Link href="/contact">Contact</Link> |{' '}
      <Link href="/privacy">Privacy Policy</Link>
    </nav>
  );
}
