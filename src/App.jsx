import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contato } from "./ProjetoRouter/contato/contato"
import { Home } from "./ProjetoRouter/home/home"
import { Produtos } from "./ProjetoRouter/product/produtos"

import "./App.css"
import { Footer } from "./ProjetoRouter/footer/footer"
import { Produto } from "./ProjetoRouter/product/produto"

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