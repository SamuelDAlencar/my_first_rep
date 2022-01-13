import { Component } from "react";
import "../App.css";
import Button from "./Button";

export default class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    console.log(this);
    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereço: "",
      cidade: "",
      estado: "",
      tipo: "",
      teste: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <fieldset className="fieldset">
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            maxLength={40}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            maxLength={50}
            onChange={this.handleChange}
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength={11}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="endereço"
            maxLength={200}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Cidade:
          <input
            type="text"
            name="cidade"
            maxLength={28}
            onChange={this.handleChange}
          />
        </label>
        <section>
          <label>Residência:</label>
          <input
            type="radio"
            value="Casa"
            name="casa-apartamento"
            id="casa"
            onChange={this.handleChange}
          />
          <label htmlFor="casa">Casa</label>
          <input
            type="radio"
            value="Apartamento"
            name="casa-apartamento"
            id="apartamento"
            onChange={this.handleChange}
          />
          <label htmlFor="apartamento">Apartamento</label>
        </section>
        <Button />
      </fieldset>
    );
  }
}
