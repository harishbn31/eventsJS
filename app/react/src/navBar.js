import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    import FormComp from './form'
    import Table from './table'
    export default class Example extends React.Component {
        constructor(props) {
          super(props);
      
          this.toggle = this.toggle.bind(this);
          this.state = {
            isOpen: false
          };
        }
        toggle() {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
        render() {
          return (
            <Router>
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/home">DCT Academy</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                    <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                      <Link to="/topics" >Topics</Link>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/custom">Custom</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/login">Login</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Links
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          Events
                        </DropdownItem>
                        <DropdownItem>
                          Registration
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Logout
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route path="/custom" component={Custom} />
          </div>
        </Router>
          );
        }
      }
      class Login extends React.Component {
        constructor(props){
          super(props);
          this.state = {
      
          }
        }
        render(){
          return(
            <div>
              <FormComp />
            </div>
          )
          
        }
      }
      // class Square extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       value: null,
      //     };
      //   }
      
      //   render() {
      //     return (
      //       <Button className="square" onClick={() => alert('click')}>
      //         {this.props.value}
      //       Click Here</Button>
      //     );
      //   }
      // }
      function Home() {
        return (
          <div>
            <h2>Events</h2>
            <Table />
          </div>
        );
      }
      function Custom() {
        return (
          <div>
            <h2>Custom Page</h2>
          </div>
        );
      }
      
      function About() {
        return (
          <div>
            <h2>About</h2>
            <h3>Harish</h3>
          </div>
        );
      }
      
      function Topics({ match }) {
        return (
          <div>
            <h2>Topics</h2>
            <ul>
              <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
              </li>
              <li>
                <Link to={`${match.url}/components`}>Components</Link>
              </li>
              <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
              </li>
            </ul>
      
            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
              exact
              path={match.path}
              render={() => <h3>Please select a topic.</h3>}
            />
          </div>
        );
      }
      
      function Topic({ match }) {
        return (
          <div>
            <h3>{match.params.topicId}</h3>
          </div>
        );
      }