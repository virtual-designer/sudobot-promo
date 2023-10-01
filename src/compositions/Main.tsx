import { FC } from "react";
import { AbsoluteFill, interpolate, Series, useCurrentFrame } from "remotion";
import BackgroundElements from "../components/Common/BackgroundElements";
import Ending from "../components/Scenes/Ending";
import Intro from "../components/Scenes/Intro";
import PostIntro from "../components/Scenes/PostIntro";
import WhySudoBot from "../components/Scenes/WhySudoBot";
import styles from "../styles/Intro.module.css";

const Main: FC = () => {
    const frame = useCurrentFrame();
    const introSlideLeftTranslateX = interpolate(frame, [840, 870], [0, -100], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const bgFadeInOpacity = interpolate(frame, [871, 900], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill
            className={`bg-[#000] items-center justify-center ${styles.main}`}
        >
            <div className={styles.content}>
                <Series>
                    <Series.Sequence
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            height: "100%",
                            width: "100%",
                            opacity: 1,
                            transform: `translateX(${introSlideLeftTranslateX}%)`,
                        }}
                        durationInFrames={900}
                    >
                        <BackgroundElements />
                        <Intro />
                    </Series.Sequence>

                    <Series.Sequence
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            height: "100%",
                            width: "100%",
                            transform: `translateY(${interpolate(
                                frame,
                                [1300, 1320],
                                [0, -120],
                                {
                                    extrapolateLeft: "clamp",
                                    extrapolateRight: "clamp",
                                }
                            )}%)`,
                        }}
                        durationInFrames={450}
                    >
                        <BackgroundElements
                            style={{
                                opacity: bgFadeInOpacity,
                            }}
                        />
                        <PostIntro />
                    </Series.Sequence>

                    <Series.Sequence
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            height: "100%",
                            width: "100%",
                            transform: `translateY(${interpolate(
                                frame,
                                [1775, 1785],
                                [0, -120],
                                {
                                    extrapolateLeft: "clamp",
                                    extrapolateRight: "clamp",
                                }
                            )}%)`,
                        }}
                        durationInFrames={450}
                    >
                        <BackgroundElements
                            style={{
                                opacity: interpolate(
                                    frame,
                                    [1350, 1380],
                                    [0, 1],
                                    {
                                        extrapolateLeft: "clamp",
                                        extrapolateRight: "clamp",
                                    }
                                ),
                            }}
                        />
                        <WhySudoBot />
                    </Series.Sequence>

                    <Series.Sequence
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            height: "100%",
                            width: "100%",
                        }}
                        durationInFrames={700}
                    >
                        <BackgroundElements
                            style={{
                                opacity: interpolate(
                                    frame,
                                    [1805, 1820],
                                    [0, 1],
                                    {
                                        extrapolateLeft: "clamp",
                                        extrapolateRight: "clamp",
                                    }
                                ),
                            }}
                        />
                        <Ending />
                    </Series.Sequence>
                </Series>
            </div>
        </AbsoluteFill>
    );
};

export default Main;
