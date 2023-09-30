import { FC } from "react";
import { Img } from "remotion";
import logo from "../../../images/logo-bh.png";

export const Logo: FC = () => {
    return (
        <div className="h-[200] w-[200] rounded-full">
            <Img src={logo} alt="SudoBot" height={170} width={170} />
        </div>
    );
};
