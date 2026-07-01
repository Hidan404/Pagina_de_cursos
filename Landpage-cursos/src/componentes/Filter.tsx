import "./Filter.css"
import { Search } from "lucide-react"

export function Filter(){
    return (
        <div className="filtro flex flex-col items-center">
            <p className="text-center font-bold text-[#00A2F7] text-2xl">Busque o conteudo que deseja assistir hoje</p>
            <p className="text-center text-[#00A2F7]">Conteudo exclusivo todos os dias</p>
            <div className="flex * justify-center items-center gap-4 mt-4">
                <input type="text" placeholder="Digite o que deseja buscar" className="border border-[#00A2F7] rounded-md w-[615px] h-[35px]"/>
                <Search/>
            </div>
        </div>
        
    )
}