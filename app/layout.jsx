import { metadata } from "./metadata";
import '../styles/index.scss'
import { Providers } from "./providers";
import { Suspense } from "react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#000000" />
                <title>{metadata.title}</title>
            </head>
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