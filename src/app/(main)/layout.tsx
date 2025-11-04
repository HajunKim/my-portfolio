// src/app/(main)/layout.js (최종 수정본)

import Image from 'next/image';
import Link from 'next/link';
// CSS는 page.module.css를 그대로 같이 씁니다.
import styles from '../page.module.css'; 

// 이 레이아웃이 하위 페이지(children)를 감싸게 됩니다.
export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    // 1. React Fragment <>로 전체를 감싸줍니다.
    <>
      {/* 2. '깨지는 문제' 해결: 스크롤 가림막을 다시 추가합니다. */}
      <div className={styles.scrollBlockerHeader}></div>

      {/* 3. 기존 mainContainer 레이아웃 */}
      <main className={styles.mainContainer}>
        {/* ===== 1. 왼쪽 사이드바 (모든 페이지 공통) ===== */}
        <aside className={styles.sidebar}>
          
          {/* --- ▼▼▼ 2. 프로필 사진에 홈 링크 추가 ▼▼▼ --- */}
          <Link href="/">
            <Image 
              src="/images/profile.png" 
              alt="Hajun Kim 프로필 사진 (홈으로 가기)" 
              className={styles.profileImg}
              width={358}
              height={290}
              priority
            />
          </Link>
          {/* --- ▲▲▲ 여기까지 수정 ▲▲▲ --- */}

          <div className={styles.profileInfo}>
            <h2>Hajun Kim</h2>
            <p className={styles.email}>hajune0628<span className={styles.at}>[at]</span>gmail.com</p>
            
            <nav className={styles.profileNav}>
              <Link href="/">Home</Link>
              <Link href="/Research">Research</Link>
              <a 
                href="/HajunKim_CV.pdf" 
                download
                >
                Curricular Vital
                </a>
              <Link href="https://www.linkedin.com/in/%ED%95%98%EC%A4%80-%EA%B9%80-85305b23b/" target="_blank">
                <Image 
                  src="/images/linkedin.png" 
                  alt="LinkedIn" 
                  className={styles.linkedinIcon}
                  width={25}
                  height={25}
                />
              </Link>
              <hr className={styles.sidebarSeparator} />
            </nav>
          </div>
        </aside>

        {/* ===== 2. 오른쪽 메인 콘텐츠 (모든 페이지 공통) ===== */}
        <main className={styles.mainContent}>

          {/* --- 상단 히어로 배너 (모든 페이지 공통) --- */}
          <header className={styles.heroSection}>
            <div className={styles.heroBgImages}>
              <Image 
                src="/images/WorldMap.png" 
                alt="세계 지도 배경" 
                className={styles.worldMap}
                width={706}
                height={286}
              />
              <Image 
                src="/images/Cloud.png" 
                alt="구름 배경" 
                className={styles.cloudImg}
                width={1055}
                height={418}
              />
            </div>
            <h1>Technology for a <span className={styles.highlight}>Better World</span></h1>
          </header>

          {/* --- 페이지별 실제 콘텐츠가 여기에 삽입됨 --- */}
          {children} 
          
        </main>
      </main>
    </>
  );
}