import './App.css';
import Header from './components/header/header';
import NavMenu from './components/nav-menu/nav-menu';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Profile from './pages/profile/profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="app-body">
          <main className="content">
            <Route path='/profile'>
              <Profile/>
            </Route> 
            <Route path='/skills'>
              <h1>Skills</h1>
            </Route>
            <Route path='/projects'>
              <h1>Project</h1>
            </Route>
            <Route path='/contact'>
              <h1>Contact</h1>
            </Route>
          </main>
          <NavMenu/>
        </div>
      </div>
    </Router>
  );
}

export default App;
