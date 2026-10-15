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
            Generative AI as a Mediator in Creator Collaboration: Challenges, Design Opportunities, and Concerns
          </h1>
          <p className={styles.projectDetailSubtitle}>
            CSCW 26: The ACM Conference on Computer-Supported Cooperative Work and Social Computing
            <br />
            <span className={styles.projectDetailAuthor}>Hajun Kim*</span>, Jini Kim<span className={styles.projectDetailAuthor}>*</span> (co-first author), Yunjae Choii<span className={styles.projectDetailAuthor}></span>
          </p>
        </header>

        <h2 className={styles.projectDetailSubheadingSecondary}>Research Focus</h2>
        <p className={styles.projectDetailBody}>
          How can GenAI support collaboration between <strong>heterogeneous creators with different expertise, expressive modalities, and creative priorities</strong>?
          <br /><br />
          Focusing on game narrative writers and visual designers, this study examines how these differences complicate building <strong>common ground</strong>. We identify opportunities for GenAI to mediate creative intent, shared context, and interpersonal communication, alongside concerns about trust and creative agency.
        </p>

        <figure className={styles.projectDetailFigure}>
          <Image
            src="/images/AICompanion_document.png"
            alt="GenAI mediating narrative development, clarification, and visual concept creation between writers and designers"
            width={997}
            height={460}
            className={styles.projectDetailImage}
          />
          <figcaption className={styles.projectDetailCaption}>
            <em>GenAI support across narrative development, clarification, and visual concept creation.</em>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>Research Approach</h2>
        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          We conducted a multi-method study with <strong>10 narrative writers and 10 visual designers</strong> in South Korea.
        </p>
        <ul className={styles.projectDetailList}>
          <li><strong>Preliminary interviews:</strong> Examined individual workflows and collaboration challenges, informing a study designed around creators’ remote, asynchronous work practices.</li>
          <li><strong>Creative prompting:</strong> Writers developed narratives with ChatGPT-4o. Designers asked the AI clarifying questions through shared conversation histories before creating concept art with Midjourney.</li>
          <li><strong>Participatory design:</strong> Participants drew on these experiences and GenAI Capability Cards to propose collaboration tools and discuss their potential consequences.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <Image
            src="/images/creative-prompting.png"
            alt="Participatory design study protocol and creative-prompting activity with narrative writers and visual designers"
            width={1009}
            height={671}
            className={styles.projectDetailImage}
          />
          <figcaption className={styles.projectDetailCaption}>
            <em>Participatory design protocol and creative-prompting activity.</em>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>Key Collaboration Challenges</h2>
        <ul className={styles.projectDetailList}>
          <li><strong>Knowledge and expression gaps:</strong> Writers struggled to communicate visual intent, while designers needed narrative and historical context that was often left implicit.</li>
          <li><strong>Different creative priorities:</strong> Writers emphasized fidelity to narrative intent, while designers balanced that intent with visual originality and aesthetic coherence.</li>
          <li><strong>Coordination and interpersonal barriers:</strong> Incomplete documentation, asynchronous schedules, hierarchy, and reluctance to question others’ expertise hindered clarification and feedback.</li>
        </ul>

        <h2 className={styles.projectDetailSubheadingSecondary}>Key Design Opportunities</h2>
        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          Participants envisioned GenAI supporting collaboration through:
        </p>
        <ul className={styles.projectDetailList}>
          <li><strong>Translating creative intent:</strong> Generating visual references and alternative drafts to help creators communicate ideas and negotiate a shared direction.</li>
          <li><strong>Maintaining shared context:</strong> Preserving narrative decisions, flagging inconsistencies, and answering contextual questions when collaborators are unavailable.</li>
          <li><strong>Mediating communication:</strong> Clarifying terminology, adjusting message tone, and easing interpersonal tension. Designers’ questions could also reveal missing context, helping writers improve their explanations.</li>
          <li><strong>Respecting different forms of expertise:</strong> Writers welcomed direct image generation, while designers preferred control over prompts, refinement, and project-specific styles—highlighting the need for role-sensitive support.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <Image
            src="/images/AICompanion_Finding.png"
            alt="Collaboration challenges and GenAI design opportunities across narrative construction, document exchange, and concept-art creation"
            width={1003}
            height={492}
            className={styles.projectDetailImage}
          />
          <figcaption className={styles.projectDetailCaption}>
            <em>Collaboration challenges and corresponding GenAI opportunities across narrative construction, document exchange, and concept-art creation.</em>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>Critical Concerns</h2>
        <ul className={styles.projectDetailList}>
          <li><strong>Professional reputation and disclosure:</strong> Revealing AI use and early trial and error could undermine perceptions of competence, motivating selective sharing.</li>
          <li><strong>Trust and accountability:</strong> Inaccurate AI outputs could misrepresent creative intent and damage relationships, while creators remained accountable for mistakes.</li>
          <li><strong>Reduced human communication:</strong> Reliance on AI could displace conversations essential to mutual understanding, collective judgment, and creative negotiation.</li>
        </ul>

        <h2 className={styles.projectDetailSubheadingSecondary}>Design Concept: Dual-Space GenAI</h2>
        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          We proposed <strong>Dual-Space GenAI</strong> to connect individual creative work with collaboration while giving creators control over contextual sharing.
        </p>
        <ul className={styles.projectDetailList}>
          <li><strong>Personal Studio:</strong> A private space for working with GenAI. Optional contextual memory captures creative reasoning, explored alternatives, and stylistic preferences.</li>
          <li><strong>Shared Workshop:</strong> Creators share an artifact together with selected context. Collaborators can then ask the AI about the reasoning behind creative decisions.</li>
        </ul>
        <p className={styles.projectDetailBody}>
          This concept supports shared understanding across different areas of expertise while preserving control over disclosure and room for creative interpretation.
        </p>

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}