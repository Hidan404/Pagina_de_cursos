import "./styles/global.css"
import { Header } from "./componentes/Header"
import { Footer } from "./componentes/Footer"
import { Filter } from "./componentes/Filter"
import { Main } from "./componentes/Main"

function Container(){
  return (
    <div className="flex flex-col justify-between h-screen bg-[#F4FBFF]">
        <Header/>
        <Main>
          <Filter title="Aprenda com os melhores" subtitle="Conteudo exclusivo todos os dias"/>
        </Main>
        <Footer/>
    </div>
  )
}


export {Container}