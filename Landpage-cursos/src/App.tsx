import "./styles/global.css"
import { Header } from "./componentes/Header"
import { Footer } from "./componentes/Footer"

function Container(){
  return (
    <div className="content">
        <Header/>
        <Footer/>
    </div>
  )
}


export {Container}