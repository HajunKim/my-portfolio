// src/app/(main)/project/collaborative-mediator/page.js

import React from 'react';
import Image from 'next/image';
import styles from '../../../page.module.css'; // 경로는 3단계 위!

export default function ProjectMediatorPage() {
  return (
    <>
      <section className={styles.projectDetailSection}>
        {/* --- 1. 헤더 (제목, 저자) --- */}
        <header className={styles.projectDetailHeader}>
          <h1 className={styles.projectDetailTitle}>
            Generative AI as a Collaborative Mediator: Design Opportunities, and Concerns in Creative Collaboration
          </h1>
          <p className={styles.projectDetailSubtitle}>
            Under Review: Revision at CSCW 26: Proceedings of the CHI Conference on Human Factors in Computing Systems
            <br />
            <span className={styles.projectDetailAuthor}>Hajun Kim*</span>, Jini Kim<span className={styles.projectDetailAuthor}>*</span> (co-first author)
          </p>
        </header>

        {/* --- 2. Research Focus --- */}
        <p className={styles.projectDetailBody}>
          <strong className={styles.projectDetailSubheading}>Research Focus:</strong>
          <br />
          <br />
          This study investigates how Generative AI (GenAI) can facilitate and mediate collaboration between heterogeneous creators (game narrative writers <em>(N=10)</em> and visual designers <em>(N=10)</em>). <br/>
          The study addresses the multi-dimensional asymmetries they face, such as knowledge and workflow gaps, and fundamental misalignments in goals (e.g., writers prioritizing narrative consistency while designers focus on visual coherence), and the psychological burden of interacting with creators, etc.
        </p>

        {/* --- 3. 이미지 + 캡션 1 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/AICompanion_document.png"
            alt="Overview of AI Collaboration Between Game Narrative Writers and Visual Designers"
            width={997} 
            height={460}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            Overview of AI Collaboration Between Game Narrative Writers and Visual Designers
          </figcaption>
        </figure>

    
        {/* --- 6. 본문 (Multi-method study) --- */}
        <p className={styles.projectDetailBody}>
          To understand their processes, we conducted a multi-method study with 10 narrative writers and 10 visual designers in the context of early game development. This study began with preliminary interviews to understand their individual and collaborative workflows.
          <br /><br />
          These interviews provided critical insights, revealing that creators struggled to envision how AI could be integrated into their collaborative processes and that they often collaborate remotely by exchanging work rather than sharing a physical space
        </p>

      
        {/* --- 4. 이미지 + 캡션 2 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/creative-prompting.png"
            alt="Thematic analysis map connecting identified challenges and design suggestions"
            width={1003} 
            height={492}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            Thermatic analysis map connecting identified challenges and design suggestions from participatory design sessions. Left (1) shows the selected challenges expressed by creators. Right (2) presents design suggestions proposed during the participatory design sessions.
          </figcaption>
        </figure>

        {/* --- 7. 본문 (Participatory design study) --- */}
        <p className={styles.projectDetailBody}>
          Building on these insights, we conducted a participatory design study. This process combined semi-structured interviews to define collaboration challenges with co-design sessions to develop solutions. 
          <br /><br />
          To give participants a concrete experience of GenAI-mediated collaboration, we designed a 'Creative Prompting' session. This session simulated their workflow in steps : writers first used ChatGPT-4o to develop a narrative document. Then, to simulate the crucial clarification phase, writers shared their full ChatGPT-40 conversation log with the designer. This allowed designers to ask follow-up questions to resolve ambiguities before they used MidJourney Alpha to produce concept art based on that understanding.
          <br /><br />
          We also provided stimuli, such as 'GenAI Capability Cards,' to help participants understand GenAI's functions and brainstorm solutions to their identified challenges.
        </p>

          {/* --- 5. 이미지 + 캡션 3 --- */}
            <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/AICompanion_Finding.png"
            alt="Participatory design study protocol"
            width={1009} 
            height={671}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            The image at the top represents an overview of our participatory design study protocol, while the image below specifically illustrates the creative prompting process
          </figcaption>
        </figure>

        {/* --- 8. Key Findings (불릿포인트로 번역) --- */}
        <h3 className={styles.projectDetailSubheadingSecondary}>Key Challenges:</h3>
        <ul className={styles.projectDetailList}>
          <li>Knowledge Gaps: Writers, lacking visualization skills, struggle to convey their textual intent, while designers must spend extensive time on research (e.g., historical accuracy) that writers are unaware of.</li>
          <li>Goal Misalignment: Writers prioritize narrative consistency, while designers focus on visual coherence, leading to conflicts in the creative product.</li>
          <li>Process Gaps: Communication avoidance occurs due to hierarchical team structures, differing work styles, and the psychological burden of asking "stupid questions," leading to information loss.</li>
        </ul>

        <h3 className={styles.projectDetailSubheadingSecondary}>Key Design Opportunities:</h3>
        {/* 덤프를 보니 'Automating...' 등은 소제목이 아닌 본문 텍스트라, <p>와 <strong>으로 처리합니다 */}
        <p className={styles.projectDetailBody} style={{ marginBottom: '5px' }}>
          <strong>Automating Burdensome Work (Efficiency):</strong>
        </p>
        <ul className={styles.projectDetailList}>
          <li>For Writers: GenAI can automate narrative-to-image generation, allowing writers to create visual references that better communicate their intent without needing artistic skills.</li>
          <li>For Designers: GenAI can automate knowledge-gap-filling by providing historically accurate contextual references and accelerate idea alignment by rapidly generating multiple visual drafts.</li>
        </ul>

        <p className={styles.projectDetailBody} style={{ marginBottom: '5px' }}>
          <strong>Augmenting Collaborative Work (Mediation):</strong>
        </p>
        <ul className={styles.projectDetailList}>
          <li>As a Shared Memory: GenAI can act as a "collaborative memory platform" that stores all narrative details, automatically flagging inconsistencies and ensuring both creators are working from the same information.</li>
          <li>As an Information Mediator: Designers envisioned GenAI as a mediator they could query about the narrative document. This reduces the psychological burden of directly asking the writer and allows them to get information instantly, maintaining their creative flow.</li>
          <li>As an Emotional Mediator: GenAI can be a "neutral communication bridge" that helps adjust the tone of messages, clarify requirements, and provide emotional support, alleviating interpersonal tensions that arise from hierarchical pressure or work-style differences.</li>
        </ul>

        <h3 className={styles.projectDetailSubheadingSecondary}>Critical Concerns:</h3>
        <ul className={styles.projectDetailList}>
          <li>Damage Reputation: Creators feared appearing less competent to their peers if they revealed their use of AI.</li>
          <li>Erode Trust: Inaccurate AI outputs (hallucinations) could be embedded in the final product, causing conflicts and reducing trust between collaborators.</li>
          <li>Reduce Communication: Over-reliance on GenAI could lead to a significant reduction in essential human-to-human communication.</li>
        </ul>

        <h3 className={styles.projectDetailSubheadingSecondary}>The "Dual-Space GenAI":</h3>
        <p className={styles.projectDetailBody} style={{marginTop: '5px', marginBottom: '10px'}}>
          Based on these findings, we proposed a "Dual-Space GenAI" design concept. This model separates the creative process into:
        </p>
        <ul className={styles.projectDetailList}>
          <li>A 'Personal Studio': A private space where a creator works individually with GenAI to ideate, with the AI learning their creative intent and rationale.</li>
          <li>A 'Shared Workshop' : A collaborative space where GenAI acts as a mediator, transferring not just the final artifact (e.d., the script) but also the associated "Contextual Memory" (e.g., why the writer made certain choices).</li>
        </ul>

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}