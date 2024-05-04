function Login({ emailLabel, passwordLabel }) {
 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="email">{emailLabel}</label>
                  <input type="email" className="form-control" id="email" placeholder="Seu email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">{passwordLabel}</label>
                  <input type="password" className="form-control" id="password" placeholder="Sua senha" />
                </div>
                <button type="submit"     className="btn btn-primary btn-block">Entrar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;