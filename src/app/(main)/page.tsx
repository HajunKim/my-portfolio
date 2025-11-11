// src/app/(main)/page.js (반드시 이 코드로 덮어쓰세요!)

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css'; // 경로는 '../page.module.css'

// 1. 'SelectedResearch' 컴포넌트를 import 합니다.
// (이 파일 안에는 projectData 배열이 더 이상 없습니다!)
import SelectedResearch from '../components/SelectedResearch'; 

export default function Home() {
  return (
    // 2. 레이아웃 코드는 모두 삭제하고 <>로 감쌉니다.
    <>
      {/* --- 하단 콘텐츠 (About, Education 등) --- */}
      <section className={styles.contentBody}>

        {/* About Me & 다이어그램 */}
        <div className={styles.aboutSection}>
          <h2>About Me</h2>
          <p>
            Hello, I am Hajun Kim. I'm currently working at NEOWIZ Games as an AI researcher.
            <br /><br />
            My research explores the critical tension between AI-driven efficiency
            and the preservation of human cognition. I design AI-augmented
            interfaces and interaction patterns that reshape user workflows,
            prioritizing human-led reasoning and agency. This approach
            enhances core abilities like critical thinking, learning, and creativity.
          </p>
          <Image 
            src="/images/Diagram.png" 
            alt="연구 다이어그램" 
            className={styles.researchDiagram}
            width={475}
            height={289}
          />
        </div>

        {/* Education & Work Experience */}
        <div className={styles.detailsSection}>
          {/* Education */}
          <section className={styles.educationSection}>
            <h2>Education</h2>
            <div className={styles.eduItem}>
              <h3><span className={styles.year}>2022</span> Korean Advance Institute of Science & Technology(KAIST)</h3>
              <ul>
                <li>M.S in Graduate School of Culture Technology <br /> (specialization in Human Computer Interaction)</li>
                <li>Advisor: Juhan Nam & Byungjoo Lee</li>
              </ul>
            </div>
            <div className={styles.eduItem}>
              <h3><span className={styles.year}>2020</span> Handong Global University(HGU)</h3>
              <ul>
                <li>B.S in Information and Communication Technology Convergence (specialization in Human Computer Interaction)</li>
                <li>B.S in User Experience Engineering</li>
              </ul>
            </div>
          </section>

          {/* Work Experience */}
          <section className={styles.workSection}>
            <h2>Work Experience</h2>
            <div className={styles.workItem}>
              <h3><span className={styles.year}>2025</span> NEOWIZ <span className={styles.company}>(Game Company)</span></h3>
              <ul>
                <li>AI Researcher in AI R&D Center</li>
                <li>Key Research Contributions:
                  <ul>
                    <li>Developing Novel Pipelines for interaction among Character Agents (LLM-based)</li>
                    <li>Developing an image generation tool, focusing on Designer UX and Controllability through user studies.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>

      {/* 3. 'Selected Research' 컴포넌트를 태그로 삽입합니다. */}
      {/* (projectData와 map 로직은 components/SelectedResearch.js 안에 있습니다) */}
      <SelectedResearch />

      {/* 4. 푸터(Footer)를 삽입합니다. */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}