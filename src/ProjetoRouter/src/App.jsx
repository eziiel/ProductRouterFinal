import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contato } from "./contato/contato"
import { Home } from "./home/home"
import { Produtos } from "./product/produtos"

import "./App.css"
import { Footer } from "./footer/footer"
import { Produto } from "./product/produto"

function App () {

  return (
    <>
      <div className="contentGeral">
        <BrowserRouter>
            <div className="content">
          <Routes>
              <Route path="/" element ={<Home />}>
                <Route path="/produtos" element ={<Produtos />}/>
                <Route path="/contato" element ={<Contato />}/>
                <Route path="produtos/:produtoId" element = {<Produto />}/>
              </Route>
          </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export {App}