import { FC, ReactNode } from "react";
import { interpolate, useCurrentFrame } from "remotion";

interface TextWordPopInProps {
    children: ReactNode[];
    start?: number;
}

const TextWordPopIn: FC<TextWordPopInProps> = ({ children, start = 0 }) => {
    const frame = useCurrentFrame();

    return (
        <>
            {children.map((child, index) => (
                <div
                    style={{
                        opacity: interpolate(
                            frame,
                            [index * 20 + start, index * 20 + 15 + start],
                            [0, 1],
                            {
                                extrapolateLeft: "clamp",
                                extrapolateRight: "clamp",
                            }
                        ),
                        transform: `translateX(${interpolate(
                            frame,
                            [index * 20 + start, index * 20 + 10 + start],
                            [10, 0],
                            {
                                extrapolateLeft: "clamp",
                                extrapolateRight: "clamp",
                            }
                        )}px)`,
                        display: "inline-block h-[100%]",
                    }}
                >
                    {child}
                </div>
            ))}
        </>
    );
};

export default TextWordPopIn;
