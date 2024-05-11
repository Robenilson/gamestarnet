import React from 'react';

const CadastroFuncionarios = () => {
    return (

   
      <div className="container">

          <div className="row justify-content-center">
          <div className="col-md-6">
          <div className="card mt-5">   
            <div className="card-header  text-center">Cadastro</div>
            <div className="card-body ">  



    
      <form>
          <div className="form-group row text-center">
              <div className="col-sm-6   mb-3 "  >
                  <label htmlFor="nome">Nome:</label>
                  <input type="text" className="form-control" id="nome"  placeholder="Seu Nome"/>
              </div>
              <div className="col-sm-6 mb-3">
                  <label htmlFor="sobrenome">Sobrenome:</label>
                  <input type="text" className="form-control" id="sobrenome"  placeholder="Seu Sobrenome" />
              </div>
          </div>
          <div className="form-group mb-4">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email"   placeholder="Seu Email"/>
          </div>
          <div className="form-group mb-4">
              <label htmlFor="senha">Senha:</label>
              <input type="password" className="form-control" id="senha"   placeholder="Sua Senha"/>
          </div>
          <div className="form-group mb-4">
              <label htmlFor="senha">Confirma Senha</label>
              <input type="password" className="form-control" id="senha"   placeholder="Confirma Senha"/>
          </div>
          <div className="form-group  mb-4">
              <label htmlFor="dataNascimento   mb-4">Data de Nascimento:</label>
              <input type="date" className="form-control" id="dataNascimento" />
          </div>
          <div className="form-group  mb-4">
              <label htmlFor="tipoUsuario">Tipo de Usuário:</label>
              <select className="form-control" id="tipoUsuario">
                  <option value="cliente">Cliente</option>
                  <option value="vendedor">Vendedor</option>
                  <option value="administrador">Administrador</option>
              </select>
          </div>
          <div className=" form-group  text-center ">
              <button type="submit" className="btn btn-primary text-center">Cadastrar</button>
          </div>
      </form>
  </div>
  </div>
  </div>
  </div>
  </div>
  
);
};
 

export default CadastroFuncionarios;