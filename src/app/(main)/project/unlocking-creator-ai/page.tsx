// src/app/(main)/project/unlocking-creator-ai/page.js (Key Findings 수정본)

import React from 'react';
import Image from 'next/image';
import styles from '../../../page.module.css'; // 경로는 3단계 위!

export default function ProjectPage() {
  return (
    <>
      <section className={styles.projectDetailSection}>
        {/* --- 1. 헤더 (제목, 저자) --- */}
        <header className={styles.projectDetailHeader}>
          <h1 className={styles.projectDetailTitle}>
            Unlocking Creator-AI Synergy: Challenges, Requirements, and Design Opportunities in AI-Powered Short-Form Video Production
          </h1>
          <p className={styles.projectDetailSubtitle}>
            CHI 24: Proceedings of the CHI Conference on Human Factors in Computing Systems
            <br />
            <span className={styles.projectDetailAuthor}>Hajun Kim*</span>, Jini Kim<span className={styles.projectDetailAuthor}>*</span> (co-first author)
          </p>
        </header>

        {/* --- 2. Research Focus --- */}
        <p className={styles.projectDetailBody}>
          {/* 스펙(700)에 맞게 Subheading 클래스를 사용합니다 */}
          <strong className={styles.projectDetailSubheading}>Research Focus:</strong>
          <br />
          <br />
          This study investigates design opportunities from the perspective of short-form creators, focusing on optimizing their workflows by automating repetitive tasks while enhancing creative cognition. It also explores their core concerns regarding collaboration with AI.
        </p>

        {/* --- 3. 본문 1 --- */}
        <p className={styles.projectDetailBody}>
          We conducted interviews with 17 short-form video creators, identifying three distinct creator types(Participatory Entertainer, Knowledge Sharer, Highlight Capturer) and mapping their unique production workflows and challenges.
        </p>

        {/* --- 4. 이미지 + 캡션 1 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/Unlocking_Types.png"
            alt="Short-form video creators’ production process"
            width={906} 
            height={744}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            Short-form video creators’ production process, showing common behaviors (A) and distinctive behaviors across three types: (1) Participatory Entertainers, (2) Knowledge Sharers, and (3) Highlight Capturers.
          </figcaption>
        </figure>

        {/* --- 5. 본문 2 --- */}
        <p className={styles.projectDetailBody}>
          A thematic analysis of the interview data was performed to systematically code these difficulties.
          Following this, we designed and conducted participatory workshops with 12 creators, grouped by type, to explore domain-specific design opportunities. Four distinct stimuli were utilized to facilitate ideation: AI capability cards, interventions for scaffolding AI concepts, an idea summary template, and a functional working prototype.
        </p>

        {/* --- 6. 이미지 + 캡션 2 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/Unlocking_Process.png"
            alt="The participatory design workshop"
            width={914} 
            height={286}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            The participatory design workshop consisted of three phases: (1) participants rated the challenges they deemed most relevant and in need of solutions, (2) they shared their experiences related to the selected challenges, and (3) they collaboratively developed solutions using workshop materials to address these challenges
          </figcaption>
        </figure>

        {/* --- 7. 이미지 + 캡션 3 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/Unlocking_Findings.png"
            alt="Thematic analysis map of findings"
            width={961} 
            height={1007}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            Thematic analysis map of findings: (1) team challenge selection, (2) selected challenges, and (3) design suggestions from workshop sessions. Design suggestions were categorized based on the production process: (a) planning, (b) performance, (c) editing, and (d) uploading & management
          </figcaption>
        </figure>

        {/* --- 8. 본문 4 --- */}
        <p className={styles.projectDetailBody}>
          Our findings highlight crucial design opportunities from the creators' perspective, primarily focusing on the automation of repetitive tasks and methods to enhance their creative cognition and capabilities.
          <br /><br />
          We also identified significant concerns regarding AI collaboration, including the potential dilution of creator identity, the need for empathetic AI interaction, and challenges related to trust and transparency.
        </p>

        {/* --- ▼▼▼ [수정됨] 9. Key Findings (텍스트/불릿포인트) ▼▼▼ --- */}
        
        {/* 이미지(image_9cb781.png)를 참고하여 
            Key Findings, Automating..., Augmenting..., Key Concerns 
            모두 동일한 600 weight 스타일을 적용합니다. 
        */}
        <h3 className={styles.projectDetailSubheadingSecondary}>Key Findings:</h3>
        
        <h3 className={styles.projectDetailSubheadingSecondary}>Automating Repetitive & Labor-Intensive Tasks</h3>
        <ul className={styles.projectDetailList}>
          <li>Editing Automation: Automatically spotting highlights, cutting silences, stitching together essential scenes, and dynamically adjusting layouts for vertical formats.</li>
          <li>Performance Assistance: Providing real-time guidance on "viewer-friendly" camera angles and layout, ensuring the subject isn't obscured by platform UI elements (like 'like' buttons).</li>
          <li>Management Support: Supporting motivation by analyzing positive viewer comments and reminding creators of their production schedules to maintain consistency.</li>
        </ul>

        <h3 className={styles.projectDetailSubheadingSecondary}>Augmenting Creative & Cognitive Tasks</h3>
        <ul className={styles.projectDetailList}>
          <li>Creative Planning: Moving beyond simple idea generation to co-planning scripts. A key opportunity is an AI that helps creators "Harmonize Trends with Creators' Unique Identity", suggesting ways to adapt a trend to their specific channel's style rather than just copying it.</li>
          <li>Context-Aware Editing: Creators desired AI with complex and contextual understanding. Instead of just identifying subjects, they envisioned commands like, "Find me a scene where character 461 in the Squid Game gets angry!".</li>
          <li>Preserving Identity: Moving beyond generic Text-to-Speech (TTS). Creators proposed AI that could generate "Emotional and Controllable Intelligent AI Voices", for instance, by learning and mimicking a creator's unique vocal style to maintain their channel's brand.</li>
          <li>Ethical Guidance: Using AI to empower ethical and responsible content creation by analyzing content for potential issues like false information, ethical concerns, or copyright infringements before uploading.</li>
        </ul>

        <h3 className={styles.projectDetailSubheadingSecondary}>Key Concerns</h3>
        <p className={styles.projectDetailBody} style={{marginTop: '5px', marginBottom: '10px'}}>
          A critical finding is the central tension between the utility of AI and the preservation of creator identity. While creators welcome AI's benefits, they expressed some primary concerns:
        </p>
        <ul className={styles.projectDetailList}>
          <li>Retaining Channel-Specific Identity: The most significant concern was that over-reliance on AI-generated ideas could lead to generic content, diluting their unique brand. One creator worried that relying on AI "could potentially disrupt the flow and character of my channel".</li>
          <li>Lack of Empathetic Communication: Creators value emotional connection with their audience. They found current AI tools "unfriendly" and lacking the ability to grasp human emotion, context, and nuance.</li>
          <li>Trust and Transparency: Creators were wary of AI's unreliability, citing instances where tools like ChatGPT provided inaccurate or outdated information. This damages trust, especially for Knowledge Sharers whose credibility depends on accuracy.</li>
        </ul>
        {/* --- ▲▲▲ Key Findings 끝 ▲▲▲ --- */}

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}