// src/app/(main)/project/multi-character-dialogue/page.js (주석 에러 수정)

import React from 'react';
import Image from 'next/image';
import styles from '../../../page.module.css'; // 경로는 3단계 위!

export default function ProjectMultiCharacterPage() {
  return (
    // 공통 레이아웃(사이드바, 배너, 가림막)이 적용됩니다.
    <>
      <section className={styles.projectDetailSection}>
        {/* --- 1. 헤더 (제목, 저자) --- */}
        <header className={styles.projectDetailHeader}>
          <h1 className={styles.projectDetailTitle}>
          A Multi-Character Dialogue System for Interactive Game Storytelling
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
          This research investigates the design and implementation of a novel multi-agent dialogue system aimed at enhancing player immersion and expanding game world-building. The core investigation centers on (1) developing a robust methodology for creating vivid, multi-dimensional character personas, and (2) engineering the interaction dynamics between multiple character agents, a user, and a central "Scenario Manager" agent to enable the co-creation of dynamic, "spin-off" narratives.
        </p>

                {/* --- [반영] 이미지 1 (ImageTool_factors1.png) --- */}
                <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/ImageTool_factors1.png"
            alt="Key design elements for character chatbots"
            width={917} 
            height={463}
            className={styles.projectDetailImageWithShadow} 
          />
          <figcaption className={styles.projectDetailCaption}>
          </figcaption>
        </figure>

        {/* --- [반영] 이미지 2 (ImageTool_factors2.png) --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/ImageTool_factors2.png"
            alt="Interface of the implemented system"
            width={917} 
            height={492}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            Key design elements to consider when creating character chatbots. This organizes essential factors—such as character attributes, memory design, and conversation rules—into multidimensional aspects that support believable, consistent, and adaptive character behaviors.
          </figcaption>
        </figure>

          {/* --- [반영] 이미지 3 (Chat_UI.png) --- */}
          <figure className={styles.projectDetailFigure}>
            <Image 
              src="/images/Chat_UI.png"
              alt="Interface of the implemented system, illustrating an active multi-character conversation"
              width={448} 
              height={929}
              className={styles.projectDetailImage} 
            />
          <figcaption className={styles.projectDetailCaption}>
            Interface of the implemented system, illustrating an active multi-character conversation. The system enables users to interact with multiple characters simultaneously within a narrative context, with dialogues dynamically reflecting each character’s personality and role in the story.
          </figcaption>
        </figure>

        {/* --- 3. Key Contributions & Methodology --- */}
        <h3 className={styles.projectDetailSubheadingSecondary}>Key Contributions & Methodology</h3>
        
        <p className={styles.projectDetailBody} style={{marginBottom: '30px'}}>
          <strong>1. Multi-Dimensional Persona Framework</strong><br/>
          To create compelling characters, We conducted a foundational analysis of two areas: the essential components of character construction in narrative and the design principles of successful commercial chatbot services. This research produced a multi-dimensional persona framework for instantiating "three-dimensional" agents. This framework defines how to extract and structure personality traits, knowledge bases, and conversational styles from source material (e.g., existing lore and dialogue).
        </p>
        
        <p className={styles.projectDetailBody} style={{marginBottom: '10px'}}>
          <strong>2. Multi-Agent Interaction & Turn-Taking Algorithm</strong><br/>
          Moving beyond traditional 1:1 chat, this system allows the user to interact with multiple character agents simultaneously.
        </p>
        <ul className={styles.projectDetailList}>
          <li>We designed a dynamic turn-taking algorithm that determines which character (or characters) should respond at each conversational turn, based on context, persona relevance, and narrative goals.</li>
          <li>To ensure user agency, the system also provides manual controls, allowing the user to directly adjust the conversational participation level of each character.</li>
        </ul>

        <p className={styles.projectDetailBody} style={{marginBottom: '10px'}}>
          <strong>3. The "Scenario Manager" Agent</strong><br/>
          A distinct agent acts as a "Director" or "Game Master" to manage the macro-narrative.
        </p>
        <ul className={styles.projectDetailList}>
          <li>This Scenario Manager Agent monitors the full conversational context between the user and the character agents.</li>
          <li>Based on the dialogue, it dynamically generates and introduces new plot elements—such as a change in location or a new situation—to guide the interaction into new episodes. This ensures the co-created story progresses with diversity and coherence.</li>
        </ul>




      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}