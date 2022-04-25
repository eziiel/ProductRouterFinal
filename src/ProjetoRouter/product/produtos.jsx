import { Link } from "react-router-dom"
import { FetchProdutos } from "../fetch/fetchProdutos"
import style from "./produtos.module.css"

const Produtos =() => {
  const produtos = FetchProdutos().getProdutos()

  return (
    <>
      <h1>Produtos</h1>

      <nav className={style.navContent + " animaLeft"}>
        {produtos.map((item) => (
         <Link
         key={item.id}
         to={`${item.id}`}
         >
          <img 
          src={item.fotos[0].src} 
          alt={item.fotos[0].titulo} />
          <p className={style.item}>{item.id}</p>
         </Link>
        ))}
      </nav>
    </>
  )
}
export {Produtos}