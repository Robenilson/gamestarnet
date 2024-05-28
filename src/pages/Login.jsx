import { Link } from "react-router-dom";
import  {  useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';





function Login() {




//Funcions JavaScript

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    axios.post("https://localhost:44363/login?email="+email+"&password="+password+"/")
    .then(response => {
      console.log('Login bem-sucedido:', response.data);
      // redirecionar para outra página ou armazenar o token, conforme necessário
    })
    .catch(error => {
      console.error('Erro ao fazer login:', error);
      setError('Credenciais inválidas. Tente novamente.');
    });
  };
























  return (
       <Card>
            <div className="card-header ">Login</div>
            <div className="card-body ">     
              <form  onSubmit={handleSubmit} >
                <div className="form-group ">
                  <label htmlFor="email ">Email</label>
                  <input type="email" className="form-control my-2 mb-4" id="email"    value={email}   onChange={handleEmailChange} required  placeholder="Seu email" />              
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input type="password" className="form-control my-2  mb-4" id="password"  value={password} onChange={handlePasswordChange} required  placeholder="Sua senha" />
                </div>                
              <div className="form-group text-center  m-0 mb-1">
              </div>             
              <div className="form-group text-center">

              
              {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            
                <Link   to="/Home" className=" text-black text-decoration-none small">

              </Link>
                
               </div>               
              </form>   
            </div>
            </Card>
  );
}

export default Login;