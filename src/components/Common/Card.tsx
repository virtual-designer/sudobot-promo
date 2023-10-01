import { FC, PropsWithChildren } from "react";
import { IconType } from "react-icons";

const Card = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col m-5 bg-[rgba(255,255,255,0.15)] rounded-lg h-[100%]">
            {children}
        </div>
    );
};

const Header: FC<
    {
        icon?: IconType;
    } & PropsWithChildren
> = ({ icon, children }) => {
    const Icon = icon;
    return (
        <div className="flex items-center gap-5 p-4">
            {Icon && <Icon className="text-[#007bff]" size={40} />}
            <div>{children}</div>
        </div>
    );
};

const Body: FC<PropsWithChildren> = ({ children }) => {
    return <div className="px-4 text-2xl pb-4">{children}</div>;
};

Card.Header = Header;
Card.Body = Body;

export default Card;
