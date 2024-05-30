import { Link } from "react-router-dom";
import  {  useState } from 'react';
import axios from 'axios';
import Card from'../../components/Card';
import { Button } from 'react-bootstrap';
import { endPoints } from "../../static/js/endpoints";
import { TailSpin } from 'react-loader-spinner';
import '../../css/App.css'









function Login() {

//Funcions JavaScript

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await axios.post(endPoints.loginUser, { email, password });
      setLoading(false); // Ocultar o loader

      console.log(response.data);



      


    } catch (err) {
      setError(' A senha ou e-mail incorretos. ');
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