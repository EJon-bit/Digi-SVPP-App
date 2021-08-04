import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//css imports

import './App.less';
import AuthContextProvider from './contexts/authContext';


//custom component imports
import Routes from './routes/router';


//encapsulates the entire vasOps application 
function App(){  
    
    return (
      <Router>
        <div className="scratchV">   
          <AuthContextProvider>       
            <Routes/>  
          </AuthContextProvider>       
        </div>        
      </Router>
      
    );
  
  
}

export default App;
