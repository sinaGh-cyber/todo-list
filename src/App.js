import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/menu/menu';
import MainApp from './components/mainApp/mainApp';
import AlertProvider from './provider/alertProvider';

function App() {
  return (
    <Router>
      <main>
        <header>
          <h1>
            Todo list <span>PRO</span>
          </h1>
        </header>

        <section className="card" id="card">
          <AlertProvider>
            <MainApp />

            <Menu />
          </AlertProvider>
        </section>
      </main>
    </Router>
  );
}

export default App;
