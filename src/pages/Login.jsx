import { Link } from "react-router-dom";

function handleSubmit(){
 

    console.log("Formulario");
  }


function Login({}) {
 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">   
            <div className="card-header ">Login</div>
            <div className="card-body ">
              <form onSubmit={handleSubmit}>
                <div className="form-group ">
                  <label htmlFor="email ">Email</label>
                  <input type="email" className="form-control my-2 mb-4" id="email" placeholder="Seu email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input type="password" className="form-control my-2  mb-4" id="password" placeholder="Sua senha" />
                </div>                
              <div className="form-group text-center  m-0 mb-1">
              <Link to="/FrogotLogin" className=" text-black text-decoration-none small">Esqueceu a Senha</Link>
              </div>             
              
              <div className="form-group text-center">
                <button    to="/home"   className=" btn btn-primary btn-block ">Entrar</button>
               </div>
                

              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;