import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.mainContainer}>
      <aside className={styles.sidebar}>
        <Link href="/">
          <Image
            src="/images/profile.png"
            alt="Hajun Kim 프로필 사진 (홈으로 가기)"
            className={styles.profileImg}
            width={358}
            height={290}
            sizes="(max-width: 560px) 80px, (max-width: 960px) 136px, (max-width: 1440px) 25vw, 358px"
            priority
          />
        </Link>

        <div className={styles.profileInfo}>
          <div className={styles.profileIdentity}>
            <h2>Hajun Kim</h2>
            <p className={styles.email}>hajune0628<span className={styles.at}>[at]</span>gmail.com</p>
          </div>

          <nav className={styles.profileNav} aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/Research">Research</Link>
            <a href="/HajunKim_CV.pdf" download>
              Curricular Vitae
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
      <main className={styles.mainContent}>
        <header className={styles.heroSection}>
          <div className={styles.heroBgImages} aria-hidden="true">
            <Image
              src="/images/WorldMap.png"
              alt=""
              className={styles.worldMap}
              width={706}
              height={286}
            />
            <Image
              src="/images/Cloud.png"
              alt=""
              className={styles.cloudImg}
              width={1055}
              height={418}
            />
          </div>
          <h1>Technology for a <span className={styles.highlight}>Better World</span></h1>
        </header>
        {children}

      </main>
    </div>
  );
}
