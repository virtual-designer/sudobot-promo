import { FC } from "react";
import { Img, interpolate, useCurrentFrame } from "remotion";
import logo from "../../../images/logo-full.png";
import IntroTextSequence from "./IntroTextSequence";

interface SudoBotProps {
    frameStart?: number;
    duration?: number;
    text?: string;
    tempo: number;
    offset?: number;
}

const SudoBot: FC<SudoBotProps> = ({
    frameStart = 0,
    offset = 0,
    tempo = 0,
    duration = 0,
    ...props
}) => {
    const frameEnd = frameStart + offset + tempo + duration;
    const frame = useCurrentFrame();
    const textOpacity = interpolate(
        frame,
        [frameEnd - 45, frameEnd - 10],
        [1, 0],
        {
            extrapolateRight: "extend",
            extrapolateLeft: "clamp",
        }
    );
    const scale = interpolate(frame, [frameEnd - 20, frameEnd], [1, 1.5], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
    });
    const translateX = interpolate(frame, [frameEnd - 20, frameEnd], [0, -85], {
        extrapolateRight: "clamp",
        extrapolateLeft: "clamp",
    });
    const translateY = interpolate(
        frame,
        [frameEnd + 20, frameEnd + 40],
        [0, -100],
        {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
        }
    );
    const sudobotTextOpacity = interpolate(
        frame,
        [frameEnd + 20, frameEnd + 30],
        [1, 0],
        {
            extrapolateRight: "extend",
            extrapolateLeft: "clamp",
        }
    );
    const sudobotLogoOpacity = interpolate(
        frame,
        [frameEnd + 20, frameEnd + 25],
        [0, 1],
        {
            extrapolateRight: "clamp",
            extrapolateLeft: "extend",
        }
    );
    const sudobotLogoTranslateY = interpolate(
        frame,
        [frameEnd + 20, frameEnd + 30],
        [30, -50],
        {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
        }
    );

    return (
        <IntroTextSequence
            neverDisappear={true}
            frameStart={frameStart}
            offset={offset}
            tempo={tempo}
            duration={duration}
            {...props}
        >
            <h1>
                <span style={{ opacity: textOpacity }}>
                    Introducing&nbsp;&mdash;&nbsp;
                </span>
                <span
                    style={{
                        transform: `translateX(${translateX}%) translateY(${translateY}%) scale(${scale})`,
                        display:
                            sudobotTextOpacity === 0 ? "none" : "inline-block",
                        opacity: sudobotTextOpacity,
                    }}
                >
                    SudoBot
                </span>
            </h1>
            <Img
                style={{
                    transform: `translate(-50%, ${sudobotLogoTranslateY}%)`,
                    display: "inline-block",
                    opacity: sudobotLogoOpacity,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                }}
                src={logo}
                width={348 * 2}
                height={114 * 2}
            />
        </IntroTextSequence>
    );
};

export default SudoBot;
