//Publicando um site com Vercel
import { useEffect, useState } from "react"


export default function App(){

  const [tarefas,setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados(){
      fetch ('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(res => setTarefas(res))
    }
    buscarDados()
  },[])


  return (
    <div>
      <h1>Deploy na vercel</h1>
      <div>
          {tarefas.map((tarefa) => {
          return(
            <div key={tarefa.id}>
              <p>{tarefa.id} - {tarefa.title}</p>
            </div>
          )
          })}
      </div>
    </div>
  )

}

/*
// Estilizaçao com CSS
import { useState } from "react"
import styles from './button.module.css'

export default function MeuContador() {

  const [contador, setContador] = useState(0)

  function aumentar(){
      setContador(contador+1)
  }

  return (
    <div className="container">
        <h1>Meu Contador</h1>
        <h3>{contador}</h3>
        <button className={styles.myButton} onClick={aumentar}>aumentar</button>
    </div>
  )

}  
*/

/*
//Buscando dados com fech

import { useEffect, useState } from "react"

const tarefas = [
  {id:'1',title:'tarefa 1'},
  {id:'2',title:'tarefa 2'},
  {id:'3',title:'tarefa 3'},
  {id:'4',title:'tarefa 4'},
] 

export default function App(){

  const [tarefas,setTarefas] = useState([])

  useEffect(()=>{

    async function buscarDados(){
      const resultado = await fetch ('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal = await resultado.json()
      return resultadoFinal
    }
    buscarDados().then(res => setTarefas(res))
  },[])


  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
      {tarefas.map((tarefa) => {
          return(
            <div>
              <li key={tarefa.id}>{tarefa.title}
              {tarefa.completed ? <span> - Tarefa Concluida</span> : null }
              </li>
            </div>
        )
      })}
      </ol>
    </div>
  )

}
*/


/*

//Efeitos colaterais 

import { useState } from "react";
import { useEffect } from "react";

const minhaLista =[ 
  {id : '1' , value: 'Fruta'},
  {id : '2' , value: 'Legume'},
  {id : '3' , value: 'Carne'}        
]

export default function App(){

  const [produtos, setProdutos] = useState(minhaLista)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(
    () => {
      if (pesquisa){
        const novaLista = minhaLista.filter((item) => {
          return item.value.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase())
        } )
        setProdutos(novaLista)
      } else {
        setProdutos(minhaLista)
      }
    }
  , [pesquisa] )

  return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input 
      value={pesquisa}
      onChange={(e) => setPesquisa(e.target.value)}
      placeholder="pesquise..."></input>
      {produtos.map( (item) => {
        return (
            <div key ={item.id} >
                <h4>{item.value}</h4>
            </div>
        )
      })}
    </div>
  )
}

*/

/*
//Lista React

import MinhaLista from "./components/MinhaLista";


export default function App(){

  return (
    <div>
      <h1>Listas no React</h1>
      <MinhaLista/>
    </div>
  )

}

*/

/*
//Projeto para entender sobre Estados e eventos

import MeuContador from "./components/MeuContador";


export default function App(){

  return (
    <div>
    <MeuContador/>
    </div>
  )

}

*/

/*
//Projeto para entender sobre componentes

import MeuComponente from "./components/MeuComponente"

function App() {
  return (
    <div>
    <h1>Olá mundo, React</h1>
    <MeuComponente/>
    <MeuBotao conteudo='me clique'/>
    <MeuBotao conteudo='depois aqui'/>
    <MeuBotao conteudo='e aqui'/>
    </div>
  )
}

function MeuBotao(props){
  console.log(props.conteudo)
return( <button>{props.conteudo}</button>
  )

}


export default App
*/