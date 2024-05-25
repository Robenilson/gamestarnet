import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Card from '../components/Card';



function menu(props) {
    return (
      <div>
      <Card>
        <div className="card-header ">
     

      <Navbar className={props.class } bg="light" expand="lg">
        <Container >
                <Navbar.Brand><Link className=" text-black text-decoration-none " to="/Home" >Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto custom-nav">
                    <Nav.Link><Link  className=" text-black text-decoration-none "  to="/venda">vendas</Link></Nav.Link>
                  <Nav.Link ><Link   className=" text-black text-decoration-none " to="/NewProduto">Novo Produto</Link></Nav.Link>
                  <Nav.Link><Link  className=" text-black text-decoration-none "  to="/NewProduto">Caixa</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
                    
            </Navbar>
            </div>
            </Card>
          <div className="modal-body">
              {props.children}
          </div>
          </div>
          


    );
  }
  
  export default menu;