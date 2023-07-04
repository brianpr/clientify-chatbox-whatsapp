import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ padding: '100px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          maxWidth: '400px',
        }}
      >
        <Link href={'/'}>home</Link>
        <Link href={'/page1'}>page 1</Link>
        <Link href={'/page2'}>page 2</Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
