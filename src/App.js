import './App.css';
import Header from './components/header/header';
import NavMenu from './components/nav-menu/nav-menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app-body">
        <main className="content">
          <h1>hello</h1>
        </main>
        <NavMenu/>
      </div>
    </div>
  );
}

export default App;
