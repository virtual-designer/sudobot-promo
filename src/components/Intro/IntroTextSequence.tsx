import { FC, PropsWithChildren } from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface IntroTextSequenceProps extends Partial<PropsWithChildren> {
    frameStart?: number;
    duration?: number;
    text?: string;
    tempo: number;
    offset?: number;
    neverDisappear?: boolean;
}

const IntroTextSequence: FC<IntroTextSequenceProps> = ({
    text,
    tempo,
    offset = 0,
    frameStart = 0,
    duration = 0,
    children,
    neverDisappear = false,
}) => {
    const frame = useCurrentFrame();
    const frameEnd = frameStart + duration + offset + tempo;
    const opacity = interpolate(
        frame,
        [
            frameStart + offset,
            frameStart + tempo + offset,
            frameStart + duration + offset,
            frameEnd,
        ],
        [0, 1, 1, neverDisappear ? 1 : 0],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: neverDisappear ? "extend" : "clamp",
        }
    );

    if ((!neverDisappear && frame > frameEnd) || frame < frameStart + offset) {
        return null;
    }

    return children ? (
        <div style={{ opacity }}>{children}</div>
    ) : (
        <h1 style={{ opacity }}>{text}</h1>
    );
};

export default IntroTextSequence;
