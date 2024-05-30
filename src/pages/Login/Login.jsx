import { Link } from "react-router-dom";
import Card from'../../components/Card';
import { Button } from 'react-bootstrap';
import { TailSpin } from 'react-loader-spinner';
import '../../css/App.css'
import React, { useState, useContext } from 'react';
import AuthContext from '../../services/AuthContext';




function Login() {

//Funcions JavaScript

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

     /*const response = await axios.post('/login', {email, password });*/

     setLoading(true); 
     await login(email, password);



    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
      setEmail('')
      setPassword('')

      setLoading(false);
  }
    
    
   
  };























  return (
     <>  
         <Card>
            <div className="card-header ">Login</div>
            <div className="card-body ">     
            {error && <div className="alert alert-danger">{error}</div>}

              <form  onSubmit={handleSubmit} >
                <div className="form-group ">
                  <label >Email</label>
                  <input type="email" className="form-control my-2 mb-4" id="email"    value={email || ''}    onChange={(e) => setEmail(e.target.value)}   placeholder="Seu email" />              
                </div>
                <div className="form-group">
                  <label >Senha</label>
                  <input type="password" className="form-control my-2  mb-4" id="password"  value={password || ''}   onChange={(e) => setPassword(e.target.value)}  placeholder="Sua senha" />
                </div>                
              <div className="form-group text-center  m-0 mb-1">
              </div>             
              <div className="form-group text-center">


              {loading ? (  
              <div className=" center-loader"> 
              <TailSpin   type="TailSpin" color="#00BFFF" height={50} width={50} />
              </div>
              ):(
                <Button  className="primary" type="submit" disabled={loading}>Login</Button>
                 )}
              
              
               
  
                <Link   to="/Home" className=" text-black text-decoration-none small">

              </Link>
                
               </div>               
              </form>  

            

             
            </div>
            </Card>

       
        </>
           
  );
}

export default Login;