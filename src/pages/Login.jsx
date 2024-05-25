import { Link } from "react-router-dom";
import  { useState } from 'react';
import Card from '../components/Card';

function Login() {


//Funcions JavaScript

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário de recarregar a página

    // Exibindo os valores dos campos no console
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
       <Card>
            <div className="card-header ">Login</div>
            <div className="card-body ">     
              <form  onSubmit={handleSubmit} >
                <div className="form-group ">
                  <label htmlFor="email ">Email</label>
                  <input type="email" className="form-control my-2 mb-4" id="email"    value={email}   onChange={(e) => setEmail(e.target.value)}  placeholder="Seu email" />              
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input type="password" className="form-control my-2  mb-4" id="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Sua senha" />
                </div>                
              <div className="form-group text-center  m-0 mb-1">
              <Link to="/FrogotLogin" className=" text-black text-decoration-none small">Esqueceu a Senha</Link>
              </div>             
              <div className="form-group text-center">

              <Link to="/Home" className=" text-black text-decoration-none small">
              <button    className=" btn btn-primary btn-block ">Entrar</button>
              </Link>
                
               </div>               
              </form>   
            </div>
            </Card>
  );
}

export default Login;