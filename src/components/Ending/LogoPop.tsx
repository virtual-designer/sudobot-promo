import { FC } from "react";
import { Easing, Img, interpolate, useCurrentFrame } from "remotion";
import logo from "../../../images/logo.png";
import osnLogo from "../../../images/osn.png";

const LogoPop: FC = () => {
    const frame = useCurrentFrame();
    const logoPopInScale = interpolate(
        frame,
        [450, 470, 485, 500],
        [0, 1.6, 1.6, 1],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.ease,
        }
    );
    const logoMoveTranslateX = interpolate(frame, [485, 500], [0, -200], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.ease,
    });

    return (
        <div className="flex items-center justify-center">
            <div
                style={{
                    transform: `scale(${logoPopInScale}) translateX(${logoMoveTranslateX}px)`,
                }}
                className="h-[100px] w-[100px] rounded-full bg-[rgba(0,123,255,0.1)] [border:2px_solid_rgba(0,123,255,0.2)] overflow-hidden"
            >
                <Img src={logo} alt="SudoBot" height={100} width={100} />
            </div>
            <h1
                className="text-[#007bff] absolute top-[50%] left-[50%] text-[5rem]"
                style={{
                    transform: `translate(${interpolate(
                        frame,
                        [485, 500],
                        [-50, -30],
                        {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                            easing: Easing.ease,
                        }
                    )}%, -50%)`,
                    opacity: interpolate(frame, [485, 500], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: Easing.ease,
                    }),
                }}
            >
                SudoBot
            </h1>

            <h5
                style={{
                    opacity: interpolate(frame, [560, 575], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                        easing: Easing.ease,
                    }),
                }}
                className="text-4xl absolute top-[65%] left-[50%] -translate-x-[50%] [font-family:Roboto] font-extralight flex items-center gap-3"
            >
                <span className="mr-5">Powered by</span>{" "}
                <Img src={osnLogo} height={50} width={50} />{" "}
                <span className="text-blue-400">OneSoftNet</span>
            </h5>
        </div>
    );
};

export default LogoPop;
