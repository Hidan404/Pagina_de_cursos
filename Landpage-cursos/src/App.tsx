import "./styles/global.css"
import { Header } from "./componentes/Header"
import { Footer } from "./componentes/Footer"
import { Filter } from "./componentes/Filter"

function Container(){
  return (
    <div className="flex flex-col justify-between h-screen bg-[#F4FBFF]">
        <Header/>
        <Filter/>
        <Footer/>
    </div>
  )
}


export {Container}