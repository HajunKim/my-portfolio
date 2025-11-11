// src/app/(main)/Research/page.js (특수공백 제거 + 구분선 수정본)

import React from 'react';
import styles from '../../page.module.css'; // 경로는 '../../page.module.css'
import SelectedResearch from '../../components/SelectedResearch'; // 재사용 컴포넌트

// 1. 스펙 기반 'Publication' 데이터 배열
const publicationData = [
  {
    id: 1,
    title: 'IdeAmigos: Human-Orchestrated Multi-agent Tool for Supporting End-to-End Brainstorming',
    context: '(In preparation: DIS 2026 Paper)',
    authors: (
      <>
        <span className={styles.pubAuthor}>Hajun Kim</span>, Jeongeon Park
      </>
    )
  },
  {
    id: 2,
    title: 'Generative AI as a Collaborative Mediator: Design Opportunities, and Concerns in Creative Collaboration',
    context: '(Under Review: Revision at CSCW 2026 Paper)',
    authors: (
      <>
        <span className={styles.pubAuthor}>Hajun Kim*</span>, Jini Kim* (co-first author), Yunjae Choi
      </>
    )
  },
  {
    id: 3,
    title: 'Unlocking Creator-AI Synergy: Challenges, Requirements, and Design Opportunities in AI-Powered Short-Form Video Production',
    context: 'CHI 2024 Paper',
    authors: (
      <>
        <span className={styles.pubAuthor}>Hajun Kim*</span>, Jini Kim* (co-first author)
      </>
    )
  },
  {
    id: 4,
    title: 'Usability Comparison between 2D and 3D Control Methods for the Operation of Hovering Objects',
    context: 'Drones 2023 (IF 4.8)',
    authors: (
      <>
        Daesung Lee, <span className={styles.pubAuthor}>Hajun Kim</span>, Heesoo Yoon, Wonsup Lee
      </>
    )
  },
  {
    id: 5,
    title: 'Harmonionz, Rescue The Planet: A Voice Visualizing Game that Match Pitch with Color',
    context: 'CHI PLAY 21: Extended Abstracts',
    authors: (
      <>
        <span className={styles.pubAuthor}>Hajun Kim*</span>, Eunjin Choi*, Byeoli Choi* (co-first author)
      </>
    )
  },
  {
    id: 6,
    title: 'Generational Empathy through Game Design Strategy: A Case Study on the Development of the Mobile Game <Ghost',
    context: 'Korean Game Society 2021',
    authors: (
      <>
        Saeyeon Lee, <span className={styles.pubAuthor}>Hajun Kim</span>, Yougim Do, Haein Kim, Hyunah Jo, Kyunghyun Lee, Minsuck Do, Byungjoo Lee
      </>
    )
  },
  {
    id: 7,
    title: 'Comparative Analysis of Controlling Drone',
    context: 'AHFE 2019',
    authors: (
      <>
        <span className={styles.pubAuthor}>Hajun Kim</span>, Seunchan Lim, Wonsup Lee
      </>
    )
  },
  {
    id: 8,
    title: 'Connecting Generations: Game Design Guide for Adults in Their 50s and Older',
    context: 'Book funded by Ministry of Culture, Sports and Tourism and Korea Creative Content Agency',
    authors: <>
      Byungjoo Lee, Youngim Do, Kyungmyun Lee, Junyoung Shin, Minseok Do, Seyun Lee, Injung Lee, Seokbeom Park, <span className={styles.pubAuthor}>Hajun Kim</span>, Jinyoung Lee, Hyunwook Lee, Taeun Kim, Haein Kim, Jongchang Park, Kyunghyun Lee, Hyunah Cho
    </> // 스펙에 저자 없음
  },
];

export default function ResearchPage() {
  return (
    <>
      {/* --- 1. 'Publication' 섹션 (신규) --- */}
      <section className={styles.publicationSection}>
        <h2>Publication</h2>
        
        <div className={styles.publicationList}>
          {publicationData.map((item, index) => (
            <React.Fragment key={item.id}>
              <article className={styles.publicationItem}>
                <h3>{item.title}</h3>
                <p>
                  {item.context}
                  <br />
                  {item.authors}
                </p>
              </article>
              
              {/* --- [수정] 스펙에 따라 마지막 구분선도 포함시킵니다 --- */}
              <hr className={styles.publicationSeparator} />
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* --- 2. 'Selected Research' 섹션 (재사용) --- */}
      <SelectedResearch />

      {/* --- 3. 푸터(Footer) --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}