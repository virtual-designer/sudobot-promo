import "@fontsource/quicksand";
import "@fontsource/roboto";
import { FC } from "react";
import { Composition } from "remotion";
import Main from "./compositions/Main";
import "./styles/global.css";

const RemotionRoot: FC = () => {
    return (
        <>
            <Composition
                id="Main"
                component={Main}
                durationInFrames={2500}
                fps={60}
                width={1920}
                height={1280}
            />
        </>
    );
};

export default RemotionRoot;
