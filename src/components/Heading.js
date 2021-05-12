import React from 'react'
import { Link } from 'react-router-dom';
import { 
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
 } from "reactstrap";

export const Heading = () => {
    return (
      <Navbar color="dark" dark>
        <Container>
          <h3 className="text-center text-3xl mt-20 text-base leading-8 text-white font-bold tracking-wide uppercase">
            React crud context
          </h3>
          <NavbarBrand href="/">All Comment</NavbarBrand> 
          <Nav>
            <NavItem>
              <Link className="btn btn-primary" to="/add">Add Comment</Link>
            </NavItem>        
          </Nav>       
        </Container>    
      </Navbar>
    )
}
