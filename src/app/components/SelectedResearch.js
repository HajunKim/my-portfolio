// src/app/components/SelectedResearch.js

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// CSS는 page.module.css를 그대로 같이 씁니다.
import styles from '../page.module.css';

// 1. 기존 page.js에 있던 'projectData' 배열을 그대로 복사해옵니다.
const projectData = [
    {
        id: 3,
        image: '/images/IdeAmigos_FIRST.png',
        width: 345,
        height: 159,
        shadowType: 'boxShadow',
        link: '/project/orchestrating-ai',
        title: 'IdeAmigos: Human-Orchestrated Multi-agent Tool for Supporting End-to-End Brainstorming',
        context: '(Submitted: CHI 2026 Paper)',
        authors: (
            <>
            <span className={styles.author}>Hajun Kim</span>, Jeongeon Park
            </>
        ),
        description: [
            'Developed a multi-agent system enabling users to actively orchestrate AI agents with distinct roles for end-to-end brainstorming.',
            'Designed a system that allowed users to tune agent-level attributes (e.g., Creativity) and dialogue-level flow (e.g., Response Length).',
            'Conducted a within-subjects study (N=12) comparing the user-orchestrated tool against a single-agent brainstorming tool.',
            'Results suggest that user-orchestration led to higher-quality and more diverse ideas, while highlighting concerns about social presence and user bias.',
        ],
    },
  {
    id: 2,
    image: '/images/AICompanion_FIRST.png',
    width: 345,
    height: 159,
    shadowType: 'boxShadow',
    link: '/project/collaborative-mediator',
    title: 'Generative AI as a Collaborative Mediator: Design Opportunities, and Concerns in Creative Collaboration',
    context: '(Under Review: Revision at CSCW 2026 Paper)',
    authors: (
      <>
        <span className={styles.author}>Hajun Kim*</span>, Jini Kim* (co-first author), Yunjae Choi
      </>
    ),
    description: [
      'Explored GenAI tools as mediators for inter-creator collaboration via interviews (N=20; narrative writers & visual designers) and a participatory design study.',
      'Analyzed the collaboration challenges between writers and designers during the initial conceptualization phase.',
      'Conducted a participatory design study, using multi-stage stimuli to help creators envision GenAI-mediated collaboration.',
      'Identified design opportunities (e.g., bridging knowledge gaps) and creator concerns (e.g., privacy issues, reduced communication) for GenAI as a mediator.',
    ],
  },
  {
    id: 1,
    image: '/images/Unlocking_FIRST.png',
    width: 292,
    height: 318,
    shadowType: 'dropShadow',
    link: '/project/unlocking-creator-ai',
    title: 'Unlocking Creator-AI Synergy: Challenges, Requirements, and Design Opportunities in AI-Powered Short-Form Video Production',
    context: '(CHI 2024 Paper)',
    authors: (
      <>
        <span className={styles.author}>Hajun Kim*</span>, Jini Kim* (co-first author)
      </>
    ),
    description: [
      'Explored AI-powered Short-form Video Generators (ASVG) as creator collaboration tools via interviews (N=17) and design workshops (N=12).',
      'Analyzed participation workshops, defining three distinct creator types and their challenges.',
      'Conducted participatory workshops, using four distinct stimuli to help creators envision collaborative AI tools.',
      'Identified design opportunities (e.g., inspiration) tailored to the distinct creator workflows and key creator concerns (e.g., identity dilution) for collaborating with AI.',
    ],
  },
  {
    id: 5,
    image: '/images/ImageTool_FIRST.png',
    width: 326,
    height: 185,
    shadowType: 'boxShadow',
    link: '/project/image-generation-tool',
    title: 'Image Generation Tool Tailored for Visual Designers to Maintain Game IP Consistency',
    context: 'Project Lead, NEOWIZ',
    authors: <></>,
    description: [
      'Developed an image generation tool to support IP-consistent art creation across game studios.',
      'Conducted formative interviews with concept artists from eight in-house studios to analyze their needs.',
      'Built web-based tools using customized ComfyUI pipelines optimized for each studio’s workflow.',
    ],
  },
  {
    id: 6,
    image: '/images/Chat_FIRST.png',
    width: 142,
    height: 295,
    shadowType: 'boxShadow',
    centerAlign: true,
    link: '/project/multi-character-dialogue',
    title: 'A Multi-Character Dialogue System for Interactive Game Storytelling',
    context: 'Project Lead, NEOWIZ',
    authors: <></>,
    description: [
      'Developed an interactive multi-character dialogue system that allows users to create evolving stories through dynamic conversations.',
      'Designed an architecture that integrates each character’s unique persona and long-term memory into the dialogue flow.',
      'Implemented an algorithm that determines the most likely responding agent based on user input, ensuring coherent and context-aware interactions.',
    ],
  },
  {
    id: 4,
    image: '/images/GAME_FIRST.png',
    width: 337,
    height: 161,
    shadowType: 'boxShadow',
    link: '/project/game-scenario-system',
    title: 'Personalizing Game Spaces Based on Individual Visual-Motor Skills',
    context: 'Master Thesis, Paper, Book',
    authors: <></>,
    description: [
      'Developed a novel difficulty balancing technique that personalizes game design from the start, based on user-skill and mental models.',
      'This technique adjusts game parameters by using a player’s pre-measured visual-motor skill (MTA model) to reach a target error rate.',
      'Conducted a comparative user study across three distinct games (SMG) (personal vs. average design), demonstrating personalization achieved designer-intended performance but yielded unexpected player experience results.',
    ],
  },
];

// 2. 'SelectedResearch' 컴포넌트를 export합니다.
export default function SelectedResearch() {
  return (
    <section className={styles.researchSection} id="research">
      <h2>Selected Research</h2>

      <div className={styles.projectsList}>
        {projectData.map((project, index) => (
          <React.Fragment key={project.id}>
            <article className={styles.projectItem}>
              {/* 1. 이미지 */}
              <div className={styles.projectImageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.width}
                  height={project.height}
                  className={`${
                    project.shadowType === 'dropShadow'
                      ? styles.projectImageDropShadow
                      : styles.projectImageShadow
                  } ${project.centerAlign ? styles.centerImage : ''}`}
                />
              </div>
              
              {/* 2. 텍스트 정보 */}
              <div className={styles.projectDetails}>
                <h3>{project.title}</h3>
                <p className={styles.projectContext}>
                  {project.context}
                  <br />
                  {project.authors}
                </p>
                <ul>
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* 3. 버튼 */}
              <div className={styles.projectButtonContainer}>
                <Link href={project.link} passHref>
                  <Image
                    src="/images/Button.png"
                    alt="View project details"
                    width={39}
                    height={39}
                    className={styles.projectButton}
                  />
                </Link>
              </div>
            </article>

            {index < projectData.length - 1 && (
              <hr className={styles.projectSeparator} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}