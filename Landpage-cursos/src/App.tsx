import "./styles/global.css"
import { Header } from "./componentes/Header"
import { Footer } from "./componentes/Footer"

function Container(){
  return (
    <div className="content bg-amber-500">
        <Header/>
        eu sou 
        <Footer/>
    </div>
  )
}


export {Container}