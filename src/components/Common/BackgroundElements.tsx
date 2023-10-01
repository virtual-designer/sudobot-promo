import { ComponentProps, FC } from "react";

const BackgroundElements: FC<ComponentProps<"div">> = (props) => {
    return (
        <div {...props}>
            <div className="h-[400px] w-[200px] bg-[#007bff] block rounded-full absolute top-[200px] left-[0] [filter:blur(180px)]"></div>
            <div className="h-[200px] w-[400px] bg-[#fc63ff] block rounded-full absolute top-[0] left-[500px] [filter:blur(180px)]"></div>
            <div className="h-[200px] w-[400px] bg-[#1fd2ff] block rounded-full absolute bottom-[0] right-[10px] [filter:blur(180px)]"></div>
        </div>
    );
};

export default BackgroundElements;
