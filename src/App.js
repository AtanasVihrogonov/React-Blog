import './app.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Scroll from './components/SmothScroll';

function App() {
  const user = false;
  return (
    <Router>
      <Scroll />
      <TopBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route path='/register'>{user ? <Home /> : <Register />}</Route>
        <Route path='/login'>{user ? <Home /> : <Login />}</Route>
        <Route path='/write'>{user ? <Write /> : <Register />}</Route>
        <Route path='/settings'>{user ? <Settings /> : <Register />}</Route>
        <Route path='/post/:postId'>
          <Single />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
