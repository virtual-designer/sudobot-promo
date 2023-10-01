import { ComponentProps, FC } from "react";
import IntroTextSequence from "../Intro/IntroTextSequence";
import SudoBot from "../Intro/SudoBot";

interface IntroProps {
    style?: ComponentProps<"div">["style"];
}

const Intro: FC<IntroProps> = ({ style }) => {
    return (
        <div
            className="flex justify-center items-center min-h-[100%] w-[100%] text-center px-3"
            style={style}
        >
            <IntroTextSequence
                duration={100}
                text="Imagine a bot..."
                tempo={30}
                frameStart={0}
                offset={20}
            />

            <IntroTextSequence
                duration={100}
                text="That moderates your server"
                tempo={30}
                frameStart={0}
                offset={180}
            />

            <IntroTextSequence
                duration={100}
                text="Just like you"
                tempo={30}
                frameStart={0}
                offset={360}
            />

            <SudoBot duration={100} tempo={30} frameStart={0} offset={540} />
        </div>
    );
};

export default Intro;
