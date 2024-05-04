function UserModal({ showModal, closeModal, handleSubmit, nameLabel, emailLabel, passwordLabel, buttonText }) {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cadastro de Usuário</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{nameLabel}</label>
                <input type="text" className="form-control" id="name" placeholder="Seu nome" />
              </div>
              <div className="form-group">
                <label htmlFor="email">{emailLabel}</label>
                <input type="email" className="form-control" id="email" placeholder="Seu email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">{passwordLabel}</label>
                <input type="password" className="form-control" id="password" placeholder="Sua senha" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>Fechar</button>
            <button type="submit" className="btn btn-primary">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;