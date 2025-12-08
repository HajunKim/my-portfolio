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
          Image Generation Tool for Game IP Consistency & 1.5-Year Longitudinal Study
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
          This 1.5-year longitudinal study investigates the integration of bespoke generative AI tools into the workflows of senior game concept artists. The research prioritizes augmenting expert capabilities and preserving unique studio IP by shifting the focus from generic Text-to-Image (T2I) models to context-aware Image-to-Image (I2I) functionalities. Through long-term observation, I analyzed emergent collaborative strategies to identify how AI can effectively support professional creative pipelines.
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

        {/* --- 3. 본문 1 --- */}
        <p className={styles.projectDetailBody}>
          The technology probe The study initially engaged 16 senior concept artists (avg. experience: 5.3 years) across eight game studios. A primary challenge was that these experts struggled to conceptualize the potential of generative AI due to its nascent state and their high visual standards. Consequently, traditional co-design methods were insufficient. To bridge this gap, I employed a technology probe strategy. I developed and deployed a customized generation pipeline trained on studio-specific assets. This approach allowed artists to explore the technology in their actual work environment while ensuring their unique IP remained secure.
        </p>


        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/ImageTool_process.png"
            alt="Production Process of Concept Artists"
            width={1007} 
            height={1049}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
          Concept artist production workflow. After AI adoption, the traditional rendering/detailing stage shifted to an AI-assisted pipeline: image generation from sketches followed by post-processing.
          </figcaption>
        </figure>

        <p className={styles.projectDetailBody}>
          Over the 1.5-year period, I observed how these experts integrated the probe into their standard workflow, which consists of conceptualization, rough sketching, and final rendering. The study revealed a critical divide in adoption. Artists frequently abandoned the tool during the early conceptualization and sketching phases. They found it cognitively demanding to translate abstract visual ideas into text prompts. Furthermore, the fine-tuned models often produced repetitive outputs for similar text inputs, which hindered divergent thinking. Conversely, concept artists actively utilized the tool during the rendering phase to enhance quality and efficiency. However, this usage resulted in a fragmented and repetitive workflow that disrupted their creative immersion.
        </p>

  
        

        {/* --- 5. 본문 2 + Key Findings (불릿포인트) --- */}
        <p className={styles.projectDetailBody}>
          We then conducted a 1.5-year longitudinal analysis, collecting user data and observation as these domain experts integrated the tools into their daily work. This long-term perspective allowed us to identify nuanced human-AI collaboration patterns and pragmatic adaptation strategies, where artists confronted the AI's limitations, informing the precise design requirements for the next-generation tool.
        </p>

        <h3 className={styles.projectDetailSubheadingSecondary}>Key findings include:</h3>
        <ul className={styles.projectDetailList}>
          <li>Custom trained AI maintained studio style consistency well, cutting down art directors’ review overhead. This improved handoffs and made team collaboration faster and cleaner.</li>
          <li>Even with the same AI, outcomes varied by artist. Skill in steering and curating AI outputs strongly correlated with creative performance.</li>
          <li>As tool reliance increased, artists worried novice roles could shrink. AI was automating many entry level tasks that used to be key for learning.</li>
          <li>To address the limitations of T2I specifically during reference exploration and sketching, I proposed a novel interaction environment that unifies these disjointed stages. The system integrates a real-time sketching interface where users can perform reference exploration directly, extract silhouettes from those references, and retouch them to produce immediate visual outputs. From these generated results, artists can selectively extract visual fragments and assemble them into a free-form collage. This collage serves as the basis for high-fidelity generation, establishing a seamless workflow that bridges abstract ideation and detailed production to scaffold the tacit visual knowledge of experts.</li>
        </ul>

        <p className={styles.projectDetailBody}>
          The study’s results are being consolidated, and the paper is currently being prepared for submission to DIS 2026. However, unlike IdeAmigos, whose paper has already been completed, this work is still in progress, so we did not mark it as a DIS submission.
        </p>

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}