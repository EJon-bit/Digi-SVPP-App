import React, { useContext, useState } from 'react';
import { Route, Redirect, Link, useLocation, useHistory} from 'react-router-dom';

import {Layout, Menu} from 'antd'
import { AuthContext } from '../contexts/authContext';

//defines Sub-Components of Antd native- Layout Component
const {Header, Content,Footer}= Layout;
const { SubMenu } = Menu;

const ProtectedRoute=({component: Component, ...routeProps})=>{
    
    const {authenticated}= useContext(AuthContext);
    
    //mounts drawer component if "Create Job" button is clicked and mounts Config Page if "Edit Configuration" button is clicked 
    const handleClick=({key})=>{
     
       
    }    
  
 

    return(        
        
        <Route {...routeProps} render={(props) => {
              
            if (authenticated){  
                            
                return(
                    <Layout className="layout">
                    <Header id="menuHead">
                      <div id="navLogo" />
                      <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key={"scratchV"}>Scratch Voucher</Menu.Item>
                        <Menu.Item key={"pendingP"}>Pending Pins</Menu.Item>
                        <Menu.Item key={"Configs"}>Configurations</Menu.Item>
                      </Menu>
                    </Header>
                    <Content id="componentContainer">                      
                      
                    </Content>
                    <Footer style={{ textAlign: 'center' }}></Footer>
                  </Layout>
                )
            }
            else{
                return( <Redirect to={{ pathname: "/login", state:{ from: props.location } }}/>  )
                
            } 
        }}/>  
    )
}

export default ProtectedRoute