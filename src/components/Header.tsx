import Image from "next/image";
import logo from "../../public/logo.svg"

export default function Header() {
    return (
        <header className="container flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
                <Image src={logo} alt="" />
                <p className="text-[32px]"><span className="text-(--yellowDecor)">FullStack</span> Brothers</p>
            </div>

            <div className="flex items-center gap-[104px]">
                <a href="#" className="text-[32px] hover:text-(--yellowDecor) transition-colors duration-500">Find Jobs</a>
                <a href="#" className="text-[32px] hover:text-(--yellowDecor) transition-colors duration-500">Requests</a>
            </div>

            <a href="#" className="text-[32px] hover:mt-[5px] hover:border-b-5 hover:border-[#8FFD01] w-[132px] text-center transition-colors duration-1000">Profile</a>
        </header>
    );
}
