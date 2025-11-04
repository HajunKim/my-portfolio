// src/app/(main)/project/image-generation-tool/page.js (텍스트 누락 없음)

import React from 'react';
import Image from 'next/image';
import styles from '../../../page.module.css'; // 경로는 3단계 위!

export default function ProjectImageToolPage() {
  return (
    // 공통 레이아웃(사이드바, 배너, 가림막)이 적용됩니다.
    <>
      <section className={styles.projectDetailSection}>
        {/* --- 1. 헤더 (제목, 저자) --- */}
        <header className={styles.projectDetailHeader}>
          <h1 className={styles.projectDetailTitle}>
            Image Generation Tool Tailored for Visual Designers to Maintain Game IP Consistency
          </h1>
          <p className={styles.projectDetailSubtitle}>
            Project Lead at NEOWIZ
            <br />
            <span className={styles.projectDetailAuthor}>Hajun Kim</span>
            {/* (덤프를 보니 저자가 한 명이네요) */}
          </p>
        </header>

        {/* --- 2. Research Focus --- */}
        <p className={styles.projectDetailBody}>
          <strong className={styles.projectDetailSubheading}>Research Focus:</strong>
          <br /><br />
          This two-year longitudinal study explores the co-design and integration of bespoke generative AI tools for senior game artists (5.3 years avg. experience). The research prioritized augmenting expert capabilities and preserving unique studio IP, shifting the focus from T2I to the more critical I2I functionalities, and analyzed the emergent collaborative strategies and performance impacts within professional creative workflows.
        </p>

        {/* --- 3. 본문 1 --- */}
        <p className={styles.projectDetailBody}>
          This study began with the central challenge of preserving unique Intellectual Property (IP), a critical need for the 8 game studios involved. Unlike generic models, our goal was to augment the capabilities of expert artists, not replace them.
          <br /><br />
          To achieve this, we initiated an in-depth qualitative phase, interviewing 16 senior artists (averaging 5.3 years of experience) to map their distinct workflows and identify specific pain points. At the project's inception, generative AI was nascent, and artists were often unsure of its potential. We therefore employed an iterative co-design process, holding repeated meetings to build and deploy early-stage, customized tools. These tools varied significantly, providing different functionalities tailored to each studio's specific game art style and pipeline.
        </p>

        {/* --- 4. 이미지 + 캡션 1 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/ImageTool_UI.png"
            alt="Interface of the AI Image Generator"
            width={1007} 
            height={1049}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            Interface of the AI Image Generator: Users can select their preferred game art style, choose desired generation features, and create images accordingly. The generated images are organized and managed within the Gallery section for easy access and review.
          </figcaption>
        </figure>

        {/* --- 5. 본문 2 + Key Findings (불릿포인트) --- */}
        <p className={styles.projectDetailBody}>
          We then conducted a 1.5-year longitudinal analysis, collecting user data and observation as these domain experts integrated the tools into their daily work. This long-term perspective allowed us to identify emergent collaborative strategies and evolving needs, which were further validated through 12 follow-up interviews and user log analysis.
        </p>

        <h3 className={styles.projectDetailSubheadingSecondary}>Key findings include:</h3>
        <ul className={styles.projectDetailList}>
          <li>The Criticality of Image-to-Image (I2I): We confirmed that for practical production, the industry's focus on Text-to-Image (T2I) is secondary. T2I was found useful for initial brainstorming, but I2I functionality was overwhelmingly identified as the most crucial feature for the iterative expert workflow.</li>
          <li>Workflow & Team-Level Impact: The custom-trained AI proved highly effective at establishing and maintaining art style consistency. This significantly reduced the manual review burden on art directors and streamlined team collaboration.</li>
          <li>Emergence of an "AI Collaboration Skill": Access to the same AI did not yield uniform results. We observed a distinct "AI collaboration skill"—an artist's proficiency in guiding and curating AI output—which directly correlated with their overall creative performance.</li>
          <li>New Professional Concerns: As dependency on the tools grew, artists raised significant concerns about the potential obsolescence of novice-level designers, as the AI effectively automated many traditional entry-level tasks.</li>
        </ul>

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}