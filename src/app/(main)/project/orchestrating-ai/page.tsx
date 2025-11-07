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
          IdeAmigos: Human-Orchestrated Multi-agent Tool for Supporting End-to-End Brainstorming
          </h1>
          <p className={styles.projectDetailSubtitle}>
            Submitted to CHI 26: Proceedings of the CHI Conference on Human Factors in Computing Systems
            <br />
            <span className={styles.projectDetailAuthor}>Hajun Kim*</span>, Jeongeon Park 
          </p>
        </header>

        {/* --- 2. Research Focus --- */}
        <p className={styles.projectDetailBody}>
          <strong className={styles.projectDetailSubheading}>Research Focus:</strong>
          <br /><br />
          This study investigates the effectiveness of 'user-led orchestration', a method where a user actively collaborates with a team of independent AI agents. We introduce IdeAmigos, a multi-agent tool designed to support the entire brainstorming process—from divergence and refinement to convergence to test this concept. The core of this orchestration method is enabling the user to strategically steer the collaboration by directly tuning individual agent attributes and guiding the global conversational flow.
        </p>

        {/* --- 3. 이미지 1 + 캡션 1 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/IdeAmigos_UI.png"
            alt="Overview of the IdeAmigos interface"
            width={992} 
            height={603}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            {/* [반영] 이미지 1번 caption */}
            Overview of the IdeAmigos interface. (a) Users brainstorm with agents in a turn-taking manner to explore ideas from diverse perspectives. (b) Interaction tuning allows control over agent behavior and conversation flow. (c) Proposed ideas are saved as sticky notes, with full history and reusability.
          </figcaption>
        </figure>

        {/* --- 4. [반영] 텍스트 (Image 1번 2번 사이) --- */}
        <h3 className={styles.projectDetailSubheadingSecondary}>System of IdeAmigos</h3>
        <p className={styles.projectDetailBody} style={{marginBottom: '10px'}}>
          While many multi-agent systems focus on automation, an approach that leaves little room for leveraging unique human strengths, IdeAmigos is designed to allow users to orchestrate real-time interactions with multiple agents. Its core components are:
        </p>
        <ul className={styles.projectDetailList}>
          <li>Interface: The system is divided into three main parts: (a) the Conversational Space for user-agent dialogue , (b) the Interactive Tuning panel for controlling agent behavior , and (c) the Idea Space for managing ideas.</li>
          <li>Orchestration (Interaction Tuning): Users conduct orchestration via the 'Interactive Tuning' panel.
            <ul style={{marginTop: '8px'}}> {/* 중첩 리스트 */ }
              <li>Individual Agent Tuning: Users can adjust sliders for each agent's Creativity (to modulate response variability) and Engagement (to control participation frequency).</li>
              <li>Group Flow Tuning: Users can also control Response Length and the # of reponses / turn (number of agent responses per user input) for all agents simultaneously, managing the conversation's pace and density.</li>
            </ul>
          </li>
          <li>Idea Management (Idea Space): Ideas proposed by both the user and the agents are automatically captured and saved as sticky notes in the Idea Space. Users can trace the full evolution of an idea, as each note retains its development history (e.g., how it was combined or expanded).</li>
        </ul>
        <p className={styles.projectDetailBody}>
          In practice, a user collaborates with agents with diverse personas through an ongoing dialogue in the Conversational Space. Throughout this conversation, the user can steer the ideation by adjusting tuning sliders, contributing their own thoughts, or by selecting and combining ideas from the Idea Space for further refinement.
        </p>

        {/* --- 5. 이미지 2 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/IdeAmigos_prompt.png"
            alt="Agent Persona Template"
            width={986} 
            height={264}
            className={styles.projectDetailImage} 
          />
          <figcaption className={`${styles.projectDetailCaption} ${styles.captionCenter}`}>
            {/* (캡션을 덤프에서 가져옴) */}
            Agent Persona Template, Responder Selection Algorithm
          </figcaption>
        </figure>

  

        {/* --- 7. [반영] 텍스트 (Image 3번과 4번 사이) --- */}
        <p className={styles.projectDetailBody}>
          Agent Persona Template: Each agent has an independent persona (e.g., 'Matthew' the Radical Innovator, 'May' the Practical Realist), creating a complementary team needed for robust deliberation. This consistency is maintained by a template comprised of: (a) a Shared Message History, (b) Persona-Specific Instructions (defining their core persona and dynamic role for each phase), and (c) Common Instructions (outlining shared objectives and rules).
        </p>
        <p className={styles.projectDetailBody}>
          Responder Selection Algorithm: When a user sets the number of responses, the system uses a decentralized mechanism to select the next speaking agent. This algorithm integrates (a) Agent Mutual Evaluation (based on their distinct persona perspectives), (b) Participation Balancing Penalty (to prevent one agent from dominating), and (c) Human-Guided Scoring (derived from the user's 'Engagement' slider setting, acting as the primary influence).
        </p>

          {/* --- 6. 이미지 3 --- */}
          <figure className={styles.projectDetailFigure}>
            <Image 
              src="/images/IdeAmigos_process.png"
              alt="User study protocol"
              width={914} 
              height={118}
              className={styles.projectDetailImage} 
            />
          <figcaption className={styles.projectDetailCaption}>
            {/* 캡션을 4번 캡션으로 넣으라는 요청이 없어서 비워둡니다. */}
            The 100-minute user study consisted of two sessions with IdeaAmigos and the baseline tool, each including a 30-minute brainstorming phase utilizing the given tool.
          </figcaption>
        </figure>


        {/* --- 9. [반영] 텍스트 (Image 4번과 5번 사이) --- */}
        <h3 className={styles.projectDetailSubheadingSecondary}>Experiment</h3>
        <p className={styles.projectDetailBody} style={{marginBottom: '5px'}}>
          A user study was conducted with 12 UX design students.
          <br /><br />
          Task Goal: In each session, participants performed a 30-minute brainstorming task. The goal was to generate ideas (divergence), then refine and combine them (refinement), and finally select their top five ideas (convergence).
          <br /><br />
          Methodology: The study used a 'within-subjects' design. This means each participant completed the task twice, using two different conditions:
        </p>
        <ul className={styles.projectDetailList}>
          <li>IdeAmigos: A multi-agent system (4 agents).</li>
          <li>Baseline: A single-agent system (1 agent) with an identical interface. Two different, open-ended topics (e.g., "reducing digital fatigue") were used. The order of conditions and topics was counterbalanced across participants to minimize learning effects.</li>
        </ul>
        <p className={styles.projectDetailBody}>
          Metrics: Researchers measured outcomes like idea quality (rated by experts for innovation, relevance, insightfulness), idea diversity (using semantic clustering), originality, and users' subjective satisfaction via post-task surveys.
        </p>


      
        {/* --- 8. 이미지 4 + 캡션 4 --- */}
          <figure className={styles.projectDetailFigure}>
            <Image 
              src="/images/IdeAmigos_Result.png"
              alt="Experimental Results"
              width={986}
              height={264}
              className={styles.projectDetailImage} 
            />
          <figcaption className={styles.projectDetailCaption}>
            {/* [반영] Image 4번 caption */}
            Experimental Results: Table of Idea Quality, Diversity, and Originality.
          </figcaption>
        </figure>

        {/* --- 10. 이미지 5 + 캡션 5 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/IdeAmigos_Survey.png"
            alt="Experimental Results Table"
            width={782}
            height={603}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            {/* [반영] Image 5번 caption */}
            Users' subjective satisfaction via post-task surveys including NASA-TLX
          </figcaption>
        </figure>
        
        
        
        {/* --- 11. [반영] 텍스트 (Image 7번과 8번 사이 -> 5번과 6번 사이로 해석) --- */}
        <h3 className={styles.projectDetailSubheadingSecondary}>Key Results</h3>
        <ul className={styles.projectDetailList}>
          <li>Idea Quality & Diversity: IdeAmigos produced higher-quality ideas compared to the single-agent baseline. Notably, the top 3 highest-rated ideas for both topics were all generated using IdeAmigos. It also generated a broader and more diverse range of ideas, producing more semantic clusters and outliers.</li>
          <li>User Perception: Participants rated the ideas from IdeAmigos as statistically significantly more original (p=0.013), valuable (p=0.047), and surprising (p=0.018) than those from the baseline.</li>
          <li>Usability: Despite the better ideas, participants reported lower usability satisfaction with IdeAmigos. They cited that managing multiple conversations and reading more text increased fatigue and split their attention.</li>
        </ul>


        {/* --- 12. 이미지 6 + 캡션 6 --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/IdeAmigos_oche_result.png"
            alt="Average tuning values"
            width={948}
            height={27} // (덤프의 27px은 너무 작아보입니다. 실제 이미지 높이에 맞춰 자동 조절됩니다)
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            {/* [반영] Image 8번 caption -> 6번 캡션으로 적용 */}
            Average tuning values of creativity, engagement, response length, and number of responses per turn during user interaction with IdeAmigos. Each metric ranges from 0 to 1 for creativity and engagement, and from 1 to 10 for response length and number of responses per turn.          </figcaption>
        </figure>

        {/* --- 13. [반영] 텍스트 (Image 8번 아래) --- */}
        <h3 className={styles.projectDetailSubheadingSecondary}>User Strategies (Orchestration)</h3>
        <p className={styles.projectDetailBody} style={{marginBottom: '5px'}}>
          Participants actively orchestrated the agents using specific strategies:
        </p>
        <ul className={styles.projectDetailList}>
          <li>Phase-Based Tuning: Users adapted the controls based on the brainstorming phase.
            <ul style={{marginTop: '8px'}}> {/* 중첩 리스트 */ }
              <li>Divergence: They increased the # of reponses / turn to "Listen Broadly" and quickly gather a wide range of perspectives.</li>
              <li>Refinement: They increased the Response Length to "Listen Deeply" and get more detailed, in-depth feedback on specific ideas.</li>
            </ul>
          </li>
          <li>Role-Based Selection: Users dynamically selected agents based on their needs. They increased the 'Engagement' of the creative agent (Matthew) during divergence and the practical agent (May) during refinement.</li>
          <li>Adopting a Facilitator Role: Many users shifted from being idea generators to acting as 'facilitators'. They focused on directing the agents, identifying good ideas, and combining agent-generated content rather than contributing their own.</li>
        </ul>

      {/* --- 11. [반영] 텍스트 (Image 7번과 8번 사이 -> 5번과 6번 사이로 해석) --- */}
      <h3 className={styles.projectDetailSubheadingSecondary}>Key Findings</h3>
        <ul className={styles.projectDetailList}>
          <li>Model Homogeneity: All agents were built on the same base LLM, which we suggest contributed to the high homogeneity of ideas across users . Future work should explore assigning different base models or fine-tuning strategies to each agent to enhance true divergence.</li>
          <li>Revisiting Social Presence and User Bias: This work calls for a fundamental reexamination of social presence and user bias in multi-agent contexts. We observed that biases studied in single-agent collaboration (like anchoring effects and social loafing ) reemerge in new and novel forms in a multi-agent setting. The very act of agents interacting with each other led users to perceive them as a 'team,' creating new cognitive biases. Future work must investigate how these emerging social dynamics shape user perception and reasoning, and explore how to design interfaces that preserve critical thinking.</li>
          <li>Interaction Load: Participants reported cognitive load from managing multiple text-based conversations. We see an opportunity to explore multimodal interfaces, such as using TTS or avatars, to make the interaction more accessible and less mentally taxing. </li>
        </ul>

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}