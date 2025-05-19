import { metadata } from "./metadata";
import '../styles/index.scss'
import { Providers } from "./providers";
import { Suspense } from "react";
import Head from "next/head";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#000000" />
                <title>{metadata.title}</title>
            </head>
            <Head>
                <meta name="theme-color" content="#0a0e1a" />
                <title>{metadata.title}</title>
                <meta name="keywords" content="Medo Miriam  Software Engineer  Front End Engineer  Web Developer Full Stack" />
                <meta name="description" content="Medo Miriam | Projects" />
                <meta name="author" content="Medo Miriam" />
                <link rel="icon" href="/icon.png" />
            </Head>
            <body>
                <Suspense fallback={null}>
                    <Providers>
                        {children}
                    </Providers>
                </Suspense>
            </body>
        </html>
    )
}