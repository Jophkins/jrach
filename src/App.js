import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Diet from './components/Diet/Diet';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Thin from './components/Diet/Thin/Thin';
import Fat from './components/Diet/Fat/Fat';
import Jock from './components/Diet/Jock/Jock';
import Eat from './components/Diet/Eat/Eat';

function App() {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Navbar />
        <div className="appWrapperContent">
          <Route exact path='/' component={Landing} />
          <Route exact path='/diet' component={Diet} />
          <Route exact path='/auth' component={Auth} />
          <Route path='/diet/thin' component={Thin} />
          <Route path='/diet/fat' component={Fat} />
          <Route path='/diet/jock' component={Jock} />
          <Route path='/diet/eat' component={Eat} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
