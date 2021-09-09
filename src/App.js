// Dependecies
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import NavMenu from './components/Navbar'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Routes
import routes from './config/routes';

export default function App() {  
  return (
    <Container fluid="true" className="app">
      <Row>
        <Col>
          <NavMenu />
          <Router>
            <Switch>
              {/* <Route path="/comingsoon" exact={true} component={ComingSoon} /> */}
              {routes.map((route, index)=>( 
                <LoadRoutes keu={index} {...route} />
              ))}
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

function LoadRoutes(route){
  return(
    <Route 
      path={routes.path}
      exact={route.exact}
      component={route.component}
    />
  );
}


