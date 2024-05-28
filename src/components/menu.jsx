import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Card from '../components/Card';
import OptionNav from'./optionNav';



function menu(props) {
    return (
      <div >
         <div className="menu">
            <Card >
            <div className="card-header  ">
            <Navbar  bg="light" expand="lg">
            <Container  >
                    <Navbar.Brand>
                      <OptionNav url="/Home"  name="Home" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto custom-nav">    
                       <OptionNav url="/venda"  name="vendas" />
                       <OptionNav url="/NewProduto"  name="Novo Produto" />
                       <OptionNav url="/caixa"  name="Caixa" />
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                        
                </Navbar>
                </div>
                </Card>
            </div>
          <div className="modal-body">
              {props.children}
          </div>





          </div>
          


    );
  }
  
  export default menu;