import { Component } from "react";
import PropTypes from "prop-types";

export default class PokemonAdder extends Component {
  render() {
    const { Pokemons } = this.props;
    return (
      <>
        {Pokemons.map((pokemon) => {
          return (
            <section key={pokemon.id} className="pokeCard">
              <div className="info">
                <h3>{pokemon.name}</h3>
                <p>{pokemon.type}</p>
                <p>
                  Avarage weight: {pokemon.averageWeight.value}
                  {pokemon.averageWeight.measurementUnit}
                </p>
              </div>
              <div className="pokeImg">
                <img src={pokemon.image} alt="" />
              </div>
            </section>
          );
        })}
      </>
    );
  }
}

PokemonAdder.propTypes = {
  Pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      averageWeight: PropTypes.shape({
        value: PropTypes.number.isRequired,
        measurementUnit: PropTypes.string.isRequired,
      }),
    })
  ),
};
