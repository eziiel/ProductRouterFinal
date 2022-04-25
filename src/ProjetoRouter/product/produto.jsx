import React from "react"
import { useParams } from "react-router-dom"
import { FetchProdutos } from "../fetch/fetchProdutos"
import style from "./produto.module.css"

function Produto ()  {
  const dados = useParams().produtoId
  const produto = FetchProdutos(dados).getProduto()
  const load = FetchProdutos().load

  if(!produto) return null
  if(load) return <p className="load"></p>
  return (
    <section className={style.contentProduto + " animaLeft"}>
    <div>
      {produto.fotos.map((item) => (
        <img 
        key={item.titulo}
        src={item.src} 
        alt={item.titulo} />
      ))}
    </div>
    <div>
      <h2>{produto.id}</h2>
      <h2 className={style.preco}>
        <span className={style.cifra}>R$</span>
        <span>{produto.preco}</span>
        </h2>
      <p>{produto.descricao}</p>
    </div>
    </section>
  )
}
export { Produto }