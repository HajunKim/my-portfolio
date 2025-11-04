import { Inter } from 'next/font/google'; // Google 폰트(Inter) 가져오기
import './globals.css'; // 전역 스타일시트

// Inter 폰트 설정 (Figma 스펙 반영)
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700'], // Light, Medium, Bold
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
      {/* <body>에 Inter 폰트 적용 */}
      <body className={inter.className}>{children}</body> 
    </html>
  );
}


