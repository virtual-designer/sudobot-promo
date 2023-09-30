import { FC } from "react";
import { Composition } from "remotion";
import Intro from "./compositions/Intro";
import "./styles/global.css";

const RemotionRoot: FC = () => {
    return (
        <>
            <Composition
                id="Intro"
                component={Intro}
                durationInFrames={460}
                fps={30}
                width={1280}
                height={720}
            />
        </>
    );
};

export default RemotionRoot;
