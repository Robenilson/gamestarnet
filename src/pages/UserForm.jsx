import React from 'react';

function UserForm({ handleSubmit, nameLabel, emailLabel, passwordLabel, buttonText }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-7">

            <div className="card-header">Cadastro de Usuário</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              
                <div className="form-group">
                  <label htmlFor="name">{nameLabel}</label>
                  <input type="text" className="form-control" id="name" placeholder="Seu nome" />
                </div>

             <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
                              
                <div className="form-group">
                  <label htmlFor="email">{emailLabel}</label>
                  <input type="email" className="form-control" id="email" placeholder="Seu email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">{passwordLabel}</label>
                  <input type="password" className="form-control" id="password" placeholder="Sua senha" />
                </div>
                <div className=" form-group">
                <button type="submit" className="  btn btn-primary btn-block">{buttonText}</button>


                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;