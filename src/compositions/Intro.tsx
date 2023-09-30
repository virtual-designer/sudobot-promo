import { FC } from "react";
import { AbsoluteFill } from "remotion";
import BackgroundElements from "../components/Common/BackgroundElements";
import IntroTextSequence from "../components/Intro/IntroTextSequence";
import SudoBot from "../components/Intro/SudoBot";
import styles from "../styles/Intro.module.css";

const Intro: FC = () => {
    return (
        <AbsoluteFill
            className={`bg-white items-center justify-center ${styles.main}`}
        >
            <BackgroundElements />
            <div className={styles.content}>
                <div className="flex justify-center items-center min-h-[100%] text-center px-3">
                    <IntroTextSequence
                        duration={50}
                        text="Imagine a bot..."
                        tempo={15}
                        frameStart={0}
                        offset={10}
                    />

                    <IntroTextSequence
                        duration={50}
                        text="That moderates your server"
                        tempo={15}
                        frameStart={0}
                        offset={90}
                    />

                    <IntroTextSequence
                        duration={50}
                        text="Just like you"
                        tempo={15}
                        frameStart={0}
                        offset={180}
                    />

                    <SudoBot
                        duration={80}
                        tempo={15}
                        frameStart={0}
                        offset={270}
                    />
                </div>
            </div>
        </AbsoluteFill>
    );
};

export default Intro;
