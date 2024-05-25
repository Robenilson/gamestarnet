import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


function menu(props) {
    return (
      <div>
      <Navbar className='nav' bg="light" expand="lg">
              <Container>
                <Navbar.Brand><Link to="/Home" >Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto custom-nav">
                    <Nav.Link><Link to="/venda">vendas</Link></Nav.Link>
                  <Nav.Link ><Link to="/NewProduto">Novo Produto</Link></Nav.Link>
                  <Nav.Link><Link to="/NewProduto">Caixa</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          <div className="modal-body">
              {props.children}
          </div>
      </div>


    );
  }
  
  export default menu;