import "./styles/global.css"
import { Header } from "./componentes/Header"
import { Footer } from "./componentes/Footer"

function Container(){
  return (
    <div className="flex flex-col justify-between h-screen bg-[#F4FBFF]">
        <Header/>
        eu sou 
        <Footer/>
    </div>
  )
}


export {Container}