import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value.map((task) => {
      return `${task}, `
    })}</li>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {Task(['Clean my room', 'Fix my speaker', 'study', 'exercise'])}
      </header>
    </div>
  );
}

export default App;
