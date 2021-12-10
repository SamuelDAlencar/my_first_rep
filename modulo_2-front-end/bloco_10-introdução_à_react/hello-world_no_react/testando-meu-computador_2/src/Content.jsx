import React, { Component } from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

export default class Content extends Component {
  render () {
    return <>
      <ol>{
          conteudos.map(({conteudo, bloco, status}) => {
            return <li>`O conteúdo é: {conteudo}, o status é: {status}, e o bloco: {bloco}`</li>
          })
        }</ol>
    </>
  }
}