
import foto from "./img/phone_contato.jpg"
import style from "./contato.module.css"

const Contato =() => {
  

  return (
    <>
      <section className={style.content + " animaLeft"}>
        <img 
        src={foto} 
        alt="telefone - info contato" />

        <ul className={style.list}>
          <li className={style.item}>eziielp10@hotmail.com</li>
          <li className={style.item}>66 9 9716 6107</li>
          <li className={style.item}>@eziiel</li>
        </ul>
      </section>
    </>
  )
}
export {Contato}