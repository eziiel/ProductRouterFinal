
import React from "react"

const FetchProdutos = (value) => {
  const url = "https://ranekapi.origamid.dev/json/api/produto/"
  const [produtos, setProdutos] = React.useState([])
  const [load, setLoad] = React.useState(false)
  const fetchUrl = fetch(url)


  React.useEffect(()=> {
    setLoad(true)
    async function fetchDados () {
      try {
          const dadosJ = await ( await fetchUrl).json() 
          setProdutos((produtos) => dadosJ )
      } catch {
        console.log("Ops! Algo deu Errado.")
      } finally {
        setLoad(false)
      }
    }
    fetchDados()
  },[])

  function getProdutos () {
    if(produtos) return produtos
  }
  function getProduto () {
   return produtos.find(item => item.id === value)
  }

  return {
    getProdutos:() => getProdutos(),
    getProduto:() => getProduto(),
    load,
  }
}

export { FetchProdutos }