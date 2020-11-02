import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Main from './components/Main/Main';

const App = () =>{
  return(
    <Router>
      <Route path = '/' exact component={Main} />
    </Router>
  )
}
export default App;