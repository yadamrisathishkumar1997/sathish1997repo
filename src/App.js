import React from 'react';
import { Home } from './components/Home';
// import { Pagetwo } from './components/Pagetwo';


import Pagetwo from './components/Pagetwo';
import Pagethree from './components/Pagethree';


import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Pagefour from './components/Pagefour';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/pagetwo' component={Pagetwo}/>
       <Route path='/pagethree' component={Pagethree}/>
       <Route path='/pagefour' component={Pagefour}/>
     </Switch>
     
   
 
    </div>
     </BrowserRouter>
  );
}

export default App;
