import Image from 'next/image';
import styles from '../../../page.module.css';

export default function SteeringDiscussionPage() {
  return (
    <>
      <section className={styles.projectDetailSection}>
        <header className={styles.projectDetailHeader}>
          <h1 className={styles.projectDetailTitle}>
            Steering the Discussion: Exploring Opinion Influence in Groups of Humans and AI Agents
          </h1>
          <p className={styles.projectDetailSubtitle}>
            Under review at CSCW 2027
            <br />
            <span className={styles.projectDetailAuthor}>Hajun Kim</span>, Dawon Lee
          </p>
        </header>

        <h2 className={styles.projectDetailSubheadingSecondary}>Research Focus</h2>

        <p className={styles.projectDetailBody}>
          How do <strong>two AI agents with a persistent persuasive goal</strong> influence people’s opinions and interactions in a discussion with <strong>two human participants</strong>?
          <br /><br />
          We compare groups of two humans and two AI agents under contrasting goals: <strong>promoting a designated position</strong> or <strong>revising positions in response to evidence</strong>, alongside a four-human baseline. With AI identities undisclosed during discussion, we examine changes in <strong>opinion strength, confidence, perceived group dynamics, and judgments of who is human or AI</strong>.
          <br /><br />
          Beyond whether people switch sides, we ask how AI participation shapes <strong>how firmly they hold their views and which position they perceive as prevailing</strong>—aspects relevant to understanding opinion formation in mixed human–AI groups.
        </p>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/steering-discussion/discussion-interface-v2.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Discussion interface for two AI agents and two human participants. Humans report their opinions and confidence after each round.">
            <Image
              src="/images/steering-discussion/discussion-interface-v2.png"
              alt="Discussion interface for two AI agents and two human participants. Humans report their opinions and confidence after each round."
              width={9624}
              height={6020}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Discussion interface for two AI agents and two human participants. Humans report their opinions and confidence after each round.
            {' '}
            <a href="/images/steering-discussion/discussion-interface-v2.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>System Design</h2>

        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          We developed a text-based discussion platform in which four participants begin with <strong>two opposing positions</strong>. In both AI conditions, the two agents initially support one position, while the two humans support the other.
        </p>

        <ul className={styles.projectDetailList}>
          <li><strong>Contrasting goals and complementary roles:</strong> Goal-directed agents seek acceptance of a designated position; deliberative agents can revise their positions as evidence develops. One agent addresses objections and concerns, while the other introduces new reasons, criteria, and examples.</li>
          <li><strong>Structured discussion memory:</strong> A shared memory tracks participants’ positions, emerging disagreements, unresolved questions, and the relationships between arguments. Each agent combines this memory with recent messages to plan its contributions.</li>
          <li><strong>Planning, critique, and response generation:</strong> A <strong>Planner</strong> selects whom to address and what to contribute. A <strong>Plan Critic</strong> checks the plan for contextual fit, policy compliance, and repetition; a <strong>Guided Replanner</strong> revises it when needed. A separate <strong>Response AI</strong> turns the final plan into a short conversational reply.</li>
          <li><strong>Learned timing and pre-send review:</strong> A neural timing model trained on speed feedback and human discussion data estimates response delays. While a reply waits to be sent, a <strong>Pending reviewer</strong> checks new messages and decides whether to retain the reply, revise it, or replan the contribution.</li>
          <li><strong>Controlled participation:</strong> Each participant contributes once per round without a fixed speaking order. Both AI conditions use the same model, interface, roles, and timing mechanism, with participants displayed under anonymous labels.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/steering-discussion/system-architecture.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: System architecture for multiparty human–AI discussion.">
            <Image
              src="/images/steering-discussion/system-architecture.png"
              alt="System architecture for multiparty human–AI discussion."
              width={5100}
              height={3450}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            System architecture for multiparty human–AI discussion.
            {' '}
            <a href="/images/steering-discussion/system-architecture.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/steering-discussion/response-timing.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Online neural learning interface for training agent response timing through human feedback on whether replies arrive too quickly, too slowly, or at an appropriate pace.">
            <Image
              src="/images/steering-discussion/response-timing.png"
              alt="Online neural learning interface for training agent response timing through human feedback on whether replies arrive too quickly, too slowly, or at an appropriate pace."
              width={1649}
              height={954}
              sizes="(max-width: 960px) 100vw, (max-width: 1440px) 75vw, 1002px"
              className={styles.projectDetailImage}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Online neural learning interface for training agent response timing through human feedback on whether replies arrive too quickly, too slowly, or at an appropriate pace.
            {' '}
            <a href="/images/steering-discussion/response-timing.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>User Study</h2>

        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          We recruited <strong>36 university students</strong> for a study of <strong>30-minute, four-party discussions conducted in Korean</strong>.
        </p>

        <ul className={styles.projectDetailList}>
          <li><strong>Conditions:</strong> Two humans with two goal-directed AI agents, two humans with two deliberative AI agents, or four humans.</li>
          <li><strong>Topics:</strong> Friendship with an ex-partner, team formation for group projects, and asking gift recipients what they want.</li>
          <li><strong>Repeated measurements:</strong> Participants reported their opinions and confidence before discussion and after each round.</li>
          <li><strong>Interaction and experience:</strong> We analyzed how arguments moved across speakers, alongside participants’ retrospective explanations, perceptions of which side prevailed, and experiences of persuasion and social pressure.</li>
          <li><strong>Identity judgments:</strong> Participants assessed others’ persuasive goals and identities before AI participation was disclosed.</li>
        </ul>

        <figure className={styles.projectDetailFigure}>
          <a href="/images/steering-discussion/retrospective-survey.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureLink} aria-label="View full-size figure: Example of a personalized retrospective survey automatically generated immediately after the discussion, incorporating the participant’s conversation history and round-by-round opinion and confidence ratings.">
            <Image
              src="/images/steering-discussion/retrospective-survey.png"
              alt="Example of a personalized retrospective survey automatically generated immediately after the discussion, incorporating the participant’s conversation history and round-by-round opinion and confidence ratings."
              width={5718}
              height={9180}
              sizes="(max-width: 560px) 100vw, 560px"
              className={`${styles.projectDetailImage} ${styles.projectDetailPortraitImage}`}
            />
          </a>
          <figcaption className={styles.projectDetailCaption}>
            Example of a personalized retrospective survey automatically generated immediately after the discussion, incorporating the participant’s conversation history and round-by-round opinion and confidence ratings.
            {' '}
            <a href="/images/steering-discussion/retrospective-survey.png" target="_blank" rel="noopener noreferrer" className={styles.projectFigureFullSize}>View full size</a>
          </figcaption>
        </figure>

        <h2 className={styles.projectDetailSubheadingSecondary}>Key Findings</h2>

        <p className={styles.projectDetailBody} style={{ marginBottom: '16px' }}>
          These findings describe <strong>exploratory patterns</strong> across the study conditions.
        </p>

        <ul className={styles.projectDetailList}>
          <li><strong>Stable choices could conceal weakening support:</strong> In the goal-directed condition, 11 of 12 participant-session records retained their initial side, but six of those showed reduced support. Average support declined by 1.00 point on a 10-point scale, compared with little change in the other conditions.</li>
          <li><strong>Confidence and perceived advantage differed:</strong> Average confidence decreased slightly with goal-directed AI (−0.25), while increasing with deliberative AI (+1.75) and human-only discussion (+1.00). Participants in the goal-directed condition also rated their own side’s dominance and argumentative persuasiveness lower than those in the other conditions.</li>
          <li><strong>Steering unfolded across speakers:</strong> Goal-directed discussions showed more concentrated challenges to particular arguments, human counter-coalitions, and agents defending one another’s claims. Deliberative discussions showed more compromise formation. Humans also adopted, contested, and redirected AI arguments.</li>
          <li><strong>Identity judgments were intertwined with influence:</strong> Across both AI conditions, all 10 instances of an AI being judged human involved that agent being named as an influence on opinion or confidence. Conversely, some human partners’ rapid understanding and helpful elaboration were interpreted as signs of AI identity.</li>
        </ul>

        <h2 className={styles.projectDetailSubheadingSecondary}>The Steering Shadow</h2>

        <p className={styles.projectDetailBody}>
          We use <strong>steering shadow</strong> to describe connected traces of AI influence across <strong>opinion strength, confidence, perceived group dynamics, and interpretations of other participants</strong>.
          <br /><br />
          People may remain on the same side while becoming less certain of their views or perceiving the opposing position as stronger. These shifts raise questions about how AI participation could shape the <strong>perceived climate of opinion</strong>, even when explicit position changes are limited.
        </p>

        <h2 className={styles.projectDetailSubheadingSecondary}>Implications and Future Directions</h2>

        <ul className={styles.projectDetailList}>
          <li><strong>Make AI goals visible:</strong> Help participants understand what an agent is trying to achieve, alongside whether it is AI.</li>
          <li><strong>Evaluate influence beyond position changes:</strong> Examine confidence, strength of support, perceived dominance, and how arguments gain reinforcement across speakers.</li>
          <li><strong>Extend to larger discussion environments:</strong> Investigate whether these patterns persist or change in larger online groups, with different human–AI ratios, uneven initial opinion distributions, and repeated exposure. This would help establish how small-group dynamics relate to broader opinion formation.</li>
        </ul>
      </section>

      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}
