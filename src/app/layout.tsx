import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script'; 

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
});

export const metadata = {
  title: 'Hajun Kim - Personal Page',
  description: 'AI Researcher Hajun Kim\'s personal webpage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        
        {/* ▼▼▼ 2. 여기에 구글 애널리틱스 코드를 넣으세요 ▼▼▼ */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-PP1FCJ293W`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PP1FCJ293W');
          `}
        </Script>
        {/* ▲▲▲ 여기까지 ▲▲▲ */}

        {children}
      </body>
    </html>
  );
}