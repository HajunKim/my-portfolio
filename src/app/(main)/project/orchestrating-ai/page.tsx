// src/app/(main)/project/orchestrating-ai/page.js

import React from 'react';
import Image from 'next/image';
import styles from '../../../page.module.css'; // 경로는 3단계 위!

export default function ProjectOrchestrationPage() {
  return (
    // 공통 레이아웃(사이드바, 배너, 가림막)이 적용됩니다.
    <>
      <section className={styles.projectDetailSection}>
        {/* --- 1. 헤더 (제목, 저자) --- */}
        <header className={styles.projectDetailHeader}>
          <h1 className={styles.projectDetailTitle}>
            IdeAmigos: Comparing User-Orchestrated and System-Orchestrated Multi-Agent Brainstorming
          </h1>
          <p className={styles.projectDetailSubtitle}>
            In preparation
            <br />
            <span className={styles.projectDetailAuthor}>Hajun Kim</span>, Jeongeon Park 
          </p>
        </header>

        <h2 className={styles.projectDetailSubheadingSecondary}>Research Focus</h2>
        <p className={styles.projectDetailBody}>
          Who should orchestrate an AI team during creative collaboration—the user or the system?
          <br /><br />
          We introduce <strong>IdeAmigos</strong>, a brainstorming tool with four AI agents offering complementary creative perspectives. By comparing <strong>user-orchestrated and system-orchestrated collaboration with the same agent team</strong>, we examine how orchestration authority shapes creative outcomes, agency, intent alignment, psychological ownership, and coordination burden.
        </p>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/ideamigos/interface.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: IdeAmigos interface showing agent conversation, participation controls, and ideas with development histories">
            <Image
              src="/images/ideamigos/interface.png"
              alt="IdeAmigos interface showing agent conversation, participation controls, and ideas with development histories"
              width={3440}
              height={1400}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            IdeAmigos combines conversation with four complementary agents, interaction-level controls, and a shared idea space.
            {' '}
            <a href="/images/ideamigos/interface.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>System Design</h2>
        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          IdeAmigos supports brainstorming from <strong>divergence through elaboration to evaluation</strong>, combining conversation, interaction controls, and a shared idea space.
        </p>
        <ul className={styles.projectDetailList}>
          <li><strong>Complementary agents:</strong> Riley proposes radical ideas, Casey explores structural innovation, Alex expands existing ideas, and Jordan evaluates practical feasibility. Their contributions adapt to each brainstorming stage.</li>
          <li><strong>Interaction-level orchestration:</strong> Users adjust each agent’s participation and access to external information, alongside group-level response length and the number of responses per user input.</li>
          <li><strong>Idea management:</strong> Ideas are automatically saved as sticky notes with development histories. Users can revisit, combine, and refine them before selecting final ideas.</li>
          <li><strong>System orchestration:</strong> An alternative version automatically manages interaction settings based on the brainstorming stage and conversational context. Users continue to guide ideas through conversation, stage switching, and selection.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/ideamigos/prompt-and-response.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Agent prompt structure and response selection algorithm combining shared conversation history, agent personas, shared objectives, and participation settings">
            <Image
              src="/images/ideamigos/prompt-and-response.png"
              alt="Agent prompt structure and response selection algorithm combining shared conversation history, agent personas, shared objectives, and participation settings"
              width={8788}
              height={2290}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Agent prompt structure and response selection: conversation history, agent personas, shared objectives, and participation settings guide agent contributions.
            {' '}
            <a href="/images/ideamigos/prompt-and-response.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>User Study</h2>
        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          We conducted a <strong>within-subjects study with 16 students with HCI or UX coursework experience</strong>. Each participant completed two 30-minute brainstorming sessions, with condition order and topic assignment counterbalanced.
        </p>
        <ul className={styles.projectDetailList}>
          <li><strong>Conditions:</strong> User-orchestrated vs. system-orchestrated collaboration, using the same four agents and core brainstorming functions.</li>
          <li><strong>Tasks:</strong> Generate, elaborate, and select five ideas for reducing digital fatigue or reconnecting with someone after a long period without contact.</li>
          <li><strong>Evaluation:</strong> Expert ratings of idea quality, semantic analyses of diversity and between-user distinctiveness, post-task surveys, interaction logs, and interviews.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/ideamigos/study-procedure.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Study procedure with preparation, two 30-minute brainstorming sessions, post-task surveys, and an interview">
            <Image
              src="/images/ideamigos/study-procedure.png"
              alt="Study procedure with preparation, two 30-minute brainstorming sessions, post-task surveys, and an interview"
              width={6896}
              height={2324}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Within-subjects study procedure, including two 30-minute brainstorming sessions with counterbalanced orchestration conditions.
            {' '}
            <a href="/images/ideamigos/study-procedure.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>Key Results</h2>
        <ul className={styles.projectDetailList}>
          <li><strong>Positive trends in user experience:</strong> User orchestration received higher average ratings for creativity support, agency, intent alignment, and psychological ownership. These differences were not statistically significant.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/ideamigos/survey-overview.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Survey overview comparing user-orchestrated and system-orchestrated collaboration">
            <Image
              src="/images/ideamigos/survey-overview.png"
              alt="Survey overview comparing user-orchestrated and system-orchestrated collaboration"
              width={3318}
              height={2052}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Post-task survey comparisons between user and system orchestration. User orchestration received higher average ratings on several experience measures, without statistically significant differences.
            {' '}
            <a href="/images/ideamigos/survey-overview.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <ul className={styles.projectDetailList}>
          <li><strong>Creative outcomes varied by task:</strong> Average quality ratings favored user orchestration for digital fatigue and system orchestration for relationship reconnection. Semantic clustering showed broadly similar diversity across conditions.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/ideamigos/performance-tables.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Tables comparing expert-rated idea quality, semantic clustering, and conversation activity across user and system orchestration">
            <Image
              src="/images/ideamigos/performance-tables.png"
              alt="Tables comparing expert-rated idea quality, semantic clustering, and conversation activity across user and system orchestration"
              width={2784}
              height={760}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Creative outcome and interaction measures across conditions: expert-rated idea quality, semantic clustering, and conversation activity.
            {' '}
            <a href="/images/ideamigos/performance-tables.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <ul className={styles.projectDetailList}>
          <li><strong>Managing agents and developing ideas were distinct experiences:</strong> Some participants experienced orchestration as a creative contribution that helped express their intentions. Others found that managing agents diverted attention from examining and developing ideas.</li>
          <li><strong>Collaboration tendencies mattered:</strong> In exploratory analyses, stronger analytical listening tendencies were associated with smaller advantages of user orchestration in agency, intent alignment, and creativity support.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/ideamigos/analytical-listening.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Exploratory analysis of analytical listening tendencies and differences in core perceived outcomes between user and system orchestration">
            <Image
              src="/images/ideamigos/analytical-listening.png"
              alt="Exploratory analysis of analytical listening tendencies and differences in core perceived outcomes between user and system orchestration"
              width={2458}
              height={1432}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Exploratory relationship between analytical listening tendencies and differences in core perceived outcomes across orchestration conditions.
            {' '}
            <a href="/images/ideamigos/analytical-listening.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>How Users Collaborated</h2>
        <ul className={styles.projectDetailList}>
          <li><strong>From listening broadly to listening deeply:</strong> Users initially sought multiple perspectives, then reduced response counts and increased response length to develop promising ideas. A similar progression appeared under system orchestration.</li>
          <li><strong>Selecting useful perspectives:</strong> Users adjusted agent participation according to the relevance and usefulness of contributions, amplifying promising perspectives and limiting repetitive or unsuitable ones.</li>
          <li><strong>Steering through conversation:</strong> Under system orchestration, users remained active collaborators, using questions, constraints, and redirection to influence the discussion.</li>
          <li><strong>Directing and exploring:</strong> Across both conditions, users sometimes established clear criteria and corrected the agents; at other times, they followed emerging suggestions to discover a direction.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/ideamigos/orchestration-patterns.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Changes in agent participation, external information access, response length, and response count during brainstorming">
            <Image
              src="/images/ideamigos/orchestration-patterns.png"
              alt="Changes in agent participation, external information access, response length, and response count during brainstorming"
              width={9936}
              height={4719}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Interaction patterns across brainstorming: agent participation and external information access, alongside response length and number of responses per turn.
            {' '}
            <a href="/images/ideamigos/orchestration-patterns.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>Design Implications</h2>
        <ul className={styles.projectDetailList}>
          <li><strong>Balance control with attention:</strong> Support users in deciding how much effort to devote to managing the team versus developing its ideas.</li>
          <li><strong>Adapt orchestration to tasks and stages:</strong> Allow the balance between automation and direct control to change as users move between exploration, elaboration, and judgment.</li>
          <li><strong>Preserve opportunities to revisit ideas:</strong> Let users set suggestions aside and reconsider them in new contexts, rather than permanently excluding them.</li>
          <li><strong>Support critical engagement:</strong> Make it easier to inspect shared assumptions, distinguish substantive contributions from repetition, and request alternative perspectives.</li>
        </ul>

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}
