import React from 'react';
import { Switch, Route } from 'react-router-dom';

//component imports
import ProtectedRoute from './ProtectedRoutes'
import QueryResults from '../pages/QueryResults';

import Login from '../pages/Login';
import Home from '../pages/Home';


//defines all the pages to be rendered in Application and their respective URL paths
const Routes=()=>{   
  
    return(          
        <Switch> 
            <Route exact path="/login" component={Login}/>                                    
            <ProtectedRoute exact path="/" component={Home}/>
            <ProtectedRoute exact path="/QueryResults" component={QueryResults}/>                              
        </Switch> 
        
    );
    
} 

export default Routes;