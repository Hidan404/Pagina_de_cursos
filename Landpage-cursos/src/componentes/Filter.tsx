import "./Filter.css"
import { Search } from "lucide-react"

type FilterProps = {
    title: string,
    subtitle?: string // optional property
}

export function Filter({title, subtitle}: FilterProps){
    return (
        <div className="filtro flex flex-col items-center">
            <p className="text-center font-bold text-[#00A2F7] text-2xl">{title}</p>
            <p className="text-center text-[#00A2F7]">{subtitle}</p>
            <div className="flex * justify-center items-center gap-4 mt-6">
                <input type="text" placeholder="Digite o que deseja buscar" className="border border-[#00A2F7] rounded-md w-[515px] h-[35px]"/>
                <Search className="cursor-pointer bg-[#E1F4FF] text-[#00A2F7] h-[35px] w-[35px] rounded-md"/>
            </div>
        </div>
        
    )
}