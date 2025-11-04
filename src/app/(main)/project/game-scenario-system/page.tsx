// src/app/(main)/project/game-scenario-system/page.js (주석 제거본)

import React from 'react';
import Image from 'next/image';
import styles from '../../../page.module.css'; // 경로는 3단계 위!

export default function ProjectGameSpacePage() {
  return (
    // 공통 레이아웃(사이드바, 배너, 가림막)이 적용됩니다.
    <>
      <section className={styles.projectDetailSection}>
        {/* --- 1. 헤더 (제목, 저자) --- */}
        <header className={styles.projectDetailHeader}>
          <h1 className={styles.projectDetailTitle}>
          Personalizing Game Spaces Based on Individual Visual-Motor Skills
          </h1>
          <p className={styles.projectDetailSubtitle}>
            Master Thesis
            <br />
          </p>
        </header>



        {/* --- 2. Research Focus --- */}
        <p className={styles.projectDetailBody}>
          <strong className={styles.projectDetailSubheading}>Research Focus:</strong>
          <br /><br />
          This study focuses on the fundamental challenge that the difficulty of a game can be perceived differently resulted by the skill difference among players. We aim to provide personalized game designs based on individuals' visual motor integration skill from the initial stage, so that individuals can perform the score the designer intended.
        </p>

        {/* --- [반영] 이미지 1 (GAME_cue.png) --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/GAME_cue.png"
            alt="Example of combined estimation using visual and force cues"
            width={982} 
            height={200}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
          Example of combined estimation using visual and force cues. The final prediction is derived by averaging the perceived sizes from both sensory inputs.          </figcaption>
        </figure>

        {/* --- [반영] 이미지 2 (GAME_math.png) --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/GAME_math.png"
            alt="Game design parameters"
            width={900} 
            height={200}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
            Game's own design parameters (such as $P$ - period, $T_c$ - cue time, $W_t$ - target time) are also inputs to the MTA model.
          </figcaption>
        </figure>

        
        {/* --- 3. 본문 1 (MTA Model, Cues) --- */}
        <p className={styles.projectDetailBody}>
          Our approach is built on a novel difficulty balancing technique that uses the Moving Target Acquisition (MTA) model. The MTA model is a cognitive model that describes how players predict a target's arrival by integrating multiple sensory cues. As its formulation shows, it optimally combines the Visually Perceivable Movement Cue (information from the target's continuous movement and speed) with the Temporal Structure Cue (information from the target's repetitive appearance period).
        </p>

      
        
        {/* --- 6. 본문 2 (3-steps) --- */}
        <p className={styles.projectDetailBody}>
          This model allows our technique to work in three steps:
        </p>
        <ul className={styles.projectDetailList}>
          <li>Measure Skill: We first use a standard MTA task to measure a player's individual cognitive parameters (their intrinsic visual motor integration skill)</li>
          <li>Predict Performance: Because the game's own design parameters (such as $P$ - period, $T_c$ - cue time, $W_t$ - target time) are also inputs to the MTA model, we can use the player's cognitive parameters to accurately predict their error rate for any specific game design.</li>
          <li>Balance Difficulty: Taking advantage of this predictive power, we then automatically adjust the game's design parameters ($P$, $T_c$, $W_t$) until the predicted error rate matches the target error rate intended by the designer.</li>
        </ul>

        {/* --- [반영] 이미지 3 (GAME_MTAModel) --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/GAME_MTAModel.png"
            alt="MTA Model"
            width={443} 
            height={74}
            className={styles.projectDetailImage} 
          />
          <figcaption className={`${styles.projectDetailCaption} ${styles.captionCenter}`}>
            MTA Model
          </figcaption>
        </figure>

        {/* --- [반영] 이미지 4 (GAME_MTA.png) --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/GAME_MTA.png"
            alt="Illustration of the target selection process"
            width={982} 
            height={197}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
          Illustration of the target selection process. A target appears for a given period ($P$), moves toward the selection region, and is selected after spending a certain time ($T_c$) within the designated area ($W_t$).          </figcaption>
        </figure>

        {/* --- [반영] 이미지 5 (GAME_SML) --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/GAME_SML.png"
            alt="Screenshots of three mini-games in SML"
            width={995} 
            height={476}
            className={styles.projectDetailImageWithShadow} 
          />
          <figcaption className={styles.projectDetailCaption}>
          Screenshots of three mini-games in SML. The first game follows a Flappy Bird–style mechanic where the player avoids obstacles while flying. The second game involves stepping on illuminated platforms to climb upward. The third is a rhythm-based game where players hit notes in sync with the beat.          </figcaption>
        </figure>

        <p className={styles.projectDetailBody}>
          To verify our idea, we developed a game called SML, consisting of three different games, and applied the difficulty balancing technique. For the experiment, each player played both the personally designed version and the one designed for average skill.          
        </p>




        {/* --- [반영] 이미지 6 (GAME_Result) --- */}
        <figure className={styles.projectDetailFigure}>
          <Image 
            src="/images/GAME_Result.png"
            alt="Comparison of error rates"
            width={991} 
            height={239}
            className={styles.projectDetailImage} 
          />
          <figcaption className={styles.projectDetailCaption}>
          Comparison of error rates between average-based and personalized difficulty settings. The red line represents the target error rate, red dots indicate individual players’ error rates under personalized difficulty, and blue dots show error rates based on average cognitive ability.
          </figcaption>
        </figure>

        <p className={styles.projectDetailBody}>
          As a result, we were able to observe that the game with the personalized design was played as intended by designers; the actual error rate was remarkably similar to the target error rate. However, the game experience of players, observed through a survey, revealed an interesting finding. Players rated the "average design" version, which was objectively easier for them, as more immersive and challenging. This suggests a complex relationship exists between the error rate as an objective metric and the perceived difficulty of the player.         
        </p>

      </section>

      {/* --- 푸터 --- */}
      <footer className={styles.footer}>
        Designed By Hajun
      </footer>
    </>
  );
}