import { Component } from 'react';
import './App.css';
import Pokemons from './data'
import Title from './components/Title'
import PokemonAdder from './components/PokemonAdder'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <>
        <main>
          <Title TitleName={'🌀 Pokedex!'} />
          <div className='mainDiv'>
            <PokemonAdder Pokemons={Pokemons} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
