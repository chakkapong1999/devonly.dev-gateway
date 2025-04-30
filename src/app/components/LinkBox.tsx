'use client'
import Image from "next/image";

export interface LinkBoxProps {
    img: string;
    link: string;
    title: string;
}

export default function LinkBox({ img, link, title }: Readonly<LinkBoxProps>) {

    const onClick = (link: string) => {
        window.open(`https://${link}`, "_blank");
    }

    return (
        <div onClick={() => onClick(link)} className="app-box hover:cursor-pointer hover:bg-[#CED4DA]">
            <Image src={img} alt="Image" width={30} height={30}/>
            <div className="link-box">
                <div className="font-bold text-[#343A40] text-xl">
                    {title}
                </div>
                <div className="text-[#6677EB] text-base">
                    {link}
                </div>
            </div>
        </div>
    ) 
}