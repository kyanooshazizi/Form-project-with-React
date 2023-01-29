
import './App.css';
import Formsign from './Component/Formsign';
import Formlogin from "./Component/Formlogin";
import {Route, Switch ,Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
       <Route path="/signup"  component={Formsign}/>
       <Route path="/login"  component={Formlogin}/>
       <Redirect from="/" to="/signup" />
      </Switch>
    </div>
  );
}

export default App;
