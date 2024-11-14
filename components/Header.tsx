import { ModeToggle } from "@/components/ModeToggle";

export default function Header(){
    return(
        <div className="flex px-8 py-5 justify-between bg-white/10 items-center border border-b-gray-200">
            <div className="font-bold">Ecommerce</div>
            <ModeToggle />
        </div>
    )
}