

function Dropdown() {
    return (
        <div className="dropdown">
            <button className=" btn btn-light  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Selecione uma opção
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div className="dropdown-item" id="openModal">Abrir Modal</div>
            </div>
        </div>
    );
}



export default Dropdown;