import { FC } from "react";
import { Easing, Img, interpolate, useCurrentFrame } from "remotion";
import logo from "../../../images/logo.png";
import TextWordPopIn from "../Common/TextWordPopIn";

/**<div className="h-[100px] w-[100px] pt-[100px] pl-[100px] block">
                <div
                    style={{
                        transform: `scale(${logoPopInScale})`,
                    }}
                    className="h-[100px] w-[100px] rounded-full bg-[rgba(0,123,255,0.1)] [border:2px_solid_rgba(0,123,255,0.2)] overflow-hidden"
                >
                    <Img src={logo} alt="SudoBot" height={100} width={100} />
                </div>
            </div>
            <div
                style={{
                    opacity: slideRightOpacity,
                    transform: `translateX(${slideRightTranslateX2}%)`,
                }}
                className="absolute bottom-[100px] left-[50%] w-[92%] h-[150px] overflow-y-hidden"
            >
                <h2 className="text-[3.4rem] text-center">
                    Struggling to Effectively Moderate Your&nbsp;
                    <span className="text-blue-500">Discord Server</span>?
                </h2>
            </div> */

const PostIntro: FC = () => {
    const frame = useCurrentFrame();

    const slideRightOpacity = interpolate(frame, [60, 70], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const logoPopInScale = interpolate(frame, [30, 45], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: Easing.ease,
    });

    return (
        <div className="p-[20px] h-[100%] w-[100%]">
            <div className="h-[100px] w-[100px] pt-[100px] pl-[100px] block">
                <div
                    style={{
                        transform: `scale(${logoPopInScale})`,
                    }}
                    className="h-[100px] w-[100px] rounded-full bg-[rgba(0,123,255,0.1)] [border:2px_solid_rgba(0,123,255,0.2)] overflow-hidden"
                >
                    <Img src={logo} alt="SudoBot" height={100} width={100} />
                </div>
            </div>
            <div
                style={{
                    opacity: slideRightOpacity,
                    transform: `translateX(${-50}%)`,
                }}
                className="absolute bottom-[100px] left-[50%] w-[92%] h-[150px] overflow-y-hidden"
            >
                <div
                // style={{
                //     transform: `translateY(${textSlideUpTranslateY}%)`,
                // }}
                >
                    {frame < 220 && (
                        <h2 className="text-[3.4rem] text-center">
                            <TextWordPopIn
                                children={[
                                    ..."Struggling to Effectively Moderate Your"
                                        .split(" ")
                                        .map((s) => <>{s}&nbsp;</>),
                                    <>
                                        <span className="text-blue-500">
                                            Discord Server
                                        </span>
                                        ?
                                    </>,
                                ]}
                                start={60}
                            />
                        </h2>
                    )}

                    {/* 
                    <h2 className="text-[3.4rem] text-center">
                        Struggling to Effectively Moderate Your&nbsp;
                        <span className="text-blue-500">Discord Server</span>?</h2>  */}

                    {/* <h2 className="text-[3.4rem] text-center">
                        Power up your server's moderation with{" "}
                        <span className="text-blue-500">SudoBot</span>.
                    </h2>  */}

                    <h2 className="text-[3.4rem] text-center">
                        <TextWordPopIn
                            children={[
                                ..."Power up your server's moderation with"
                                    .split(" ")
                                    .map((s) => <>{s}&nbsp;</>),
                                <>
                                    <span className="text-blue-500">
                                        SudoBot
                                    </span>
                                    .
                                </>,
                            ]}
                            start={225}
                        />
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default PostIntro;
