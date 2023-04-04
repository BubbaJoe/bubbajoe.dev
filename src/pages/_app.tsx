import '@/styles/global.css'
import Head from 'next/head'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const measurementId = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
  return <>
    <div className='container'>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}></script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${measurementId}");
            `,
          }}
        />
      </Head>
      <main><Component {...pageProps} /></main>
      <footer>
        bubbajoe.dev © {new Date().getFullYear()}
      </footer>
    </div>
  </>;
}
