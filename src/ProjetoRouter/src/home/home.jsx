import { Link, Outlet } from "react-router-dom"
import style from "./home.module.css"

const Home =() => {
  

  return (
    <section className={style.head}>
      <div className={style.dados}>
          <Link to="/"> <h1>Home</h1></Link> 
        <nav>
          <Link to="/produtos">Produtos</Link> | { " " }
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
      <Outlet/>
    </section>
  )
}
export {Home}