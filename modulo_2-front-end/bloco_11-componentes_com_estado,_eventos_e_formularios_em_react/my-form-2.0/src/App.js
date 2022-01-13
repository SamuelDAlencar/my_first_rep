import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      info: []
    }
  }

  finalInfo() {
    this.setState(prevState => {
      return user
    })
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Form />
        </main>
        <Footer />
      </>
    );
  }
}
