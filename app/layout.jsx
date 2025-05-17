import { metadata } from "./metadata";
import '../styles/index.scss'
import './globals.css'
import { Providers } from "./providers";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#000000" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
                <title>{metadata.title}</title>

            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}