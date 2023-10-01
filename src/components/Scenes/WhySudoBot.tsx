import { FC } from "react";
import {
    HiCodeBracket,
    HiOutlineCpuChip,
    HiOutlineCube,
    HiOutlineLockClosed,
    HiOutlineQuestionMarkCircle,
    HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import Card from "../Common/Card";
import TextWordPopIn from "../Common/TextWordPopIn";

const WhySudoBot: FC = () => {
    const frame = useCurrentFrame();

    return (
        <div className="w-[100%]">
            <h1
                style={{
                    transform: `translateY(${interpolate(
                        frame,
                        [70, 75],
                        [-20, 0],
                        {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                        }
                    )}%)`,
                    opacity: interpolate(frame, [70, 75], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                    }),
                }}
                className="text-center"
            >
                Why <span className="text-blue-500">SudoBot</span>?
            </h1>

            <div
                style={{
                    transformOrigin: "center",
                    transform: `translateX(-50%) scaleX(${interpolate(
                        frame,
                        [80, 95],
                        [0, 1],
                        {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                            easing: Easing.bezier(1, 0, 0, 1),
                        }
                    )})`,
                }}
                className="h-[5px] w-[20vw] absolute left-[50%] top-[25%] bg-white rounded-lg"
            ></div>

            <div
                className="grid grid-cols-3 absolute bottom-[215px] left-[20px] h-[200px]"
                style={{
                    transform: `translateX(${interpolate(
                        frame,
                        [280, 300],
                        [0, -100],
                        {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                            easing: Easing.bezier(1, 0, 0, 1),
                        }
                    )}%)`,
                }}
            >
                <TextWordPopIn
                    start={100}
                    children={[
                        <Card>
                            <Card.Header icon={HiCodeBracket}>
                                <span className="text-3xl">
                                    Free & Open Source
                                </span>
                            </Card.Header>

                            <Card.Body>
                                SudoBot is free and open source, respecting{" "}
                                <span className="text-blue-500">
                                    your freedom
                                </span>
                                . It is licensed under the GNU Affero General
                                Public License v3.0. Everyone is welcome to
                                change and redistribute copies of the source
                                code!
                            </Card.Body>
                        </Card>,
                        <Card>
                            <Card.Header icon={HiOutlineLockClosed}>
                                <span className="text-3xl">Secure</span>
                            </Card.Header>

                            <Card.Body>
                                SudoBot is secure, community-powered, and we
                                always try our best to keep it secure. That's
                                the power of open source.
                            </Card.Body>
                        </Card>,
                        <Card>
                            <Card.Header icon={HiOutlineCube}>
                                <span className="text-3xl">
                                    Highly Customizable
                                </span>
                            </Card.Header>

                            <Card.Body>
                                SudoBot's configuration system is built in a way
                                so that you can customize almost everything the
                                bot does.
                            </Card.Body>
                        </Card>,
                    ]}
                />
            </div>

            <div
                className="grid grid-cols-3 absolute bottom-[60px] left-[20px] h-[300px]"
                style={{
                    transform: `translateX(${interpolate(
                        frame,
                        [301, 325],
                        [100, 0],
                        {
                            extrapolateLeft: "clamp",
                            extrapolateRight: "clamp",
                            easing: Easing.bezier(1, 0, 0, 1),
                        }
                    )}%)`,
                }}
            >
                <Card>
                    <Card.Header icon={HiOutlineCpuChip}>
                        <span className="text-3xl">Self-hosted</span>
                    </Card.Header>

                    <Card.Body>
                        Don't want to host the bot yourself? We have a solution
                        for that as well — you can invite our self-hosted
                        instance! It's free as well.
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header icon={HiOutlineQuestionMarkCircle}>
                        <span className="text-3xl">Help & Support</span>
                    </Card.Header>

                    <Card.Body>
                        We're always here to help you. In case if you face any
                        issues, or if you need help with something else, feel
                        free to contact us!
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header icon={HiOutlineWrenchScrewdriver}>
                        <span className="text-3xl">Active Development</span>
                    </Card.Header>

                    <Card.Body>
                        We are actively adding new features and fixing issues.
                        We always welcome new feature requests or improvement
                        ideas.
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default WhySudoBot;
