import { FC } from "react";
import { interpolate, useCurrentFrame } from "remotion";
import LogoPop from "../Ending/LogoPop";

const Ending: FC = () => {
    const frame = useCurrentFrame();

    return (
        <div>
            <div className="text-5xl theme-font w-[100%] h-[100%] flex items-center justify-center absolute top-0 left-0">
                {frame < 216 && (
                    <h2
                        style={{
                            opacity: interpolate(
                                frame,
                                [60, 75, 200, 215],
                                [0, 1, 1, 0],
                                {
                                    extrapolateLeft: "clamp",
                                    extrapolateRight: "clamp",
                                }
                            ),
                        }}
                        className="text-center flex items-center justify-center"
                    >
                        So, what are you waiting for?
                    </h2>
                )}

                {frame > 224 && frame < 431 && (
                    <h2
                        style={{
                            opacity: interpolate(
                                frame,
                                [225, 240, 415, 430],
                                [0, 1, 1, 0],
                                {
                                    extrapolateLeft: "clamp",
                                    extrapolateRight: "clamp",
                                }
                            ),
                        }}
                        className="text-center flex items-center justify-center"
                    >
                        Get started with SudoBot now!
                    </h2>
                )}

                {frame > 450 && <LogoPop />}
            </div>
        </div>
    );
};

export default Ending;
