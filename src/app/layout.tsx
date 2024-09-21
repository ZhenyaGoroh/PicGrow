import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';

const workSansFont = Work_Sans({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Pic grow',
    //TODO: add description
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${workSansFont.className}`}>{children}</body>
        </html>
    );
}
