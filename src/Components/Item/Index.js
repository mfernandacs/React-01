const Item = (props) => {
    return (
        <a href="/" className="list-group-item list-group-item-action list-grou-item-dark">
            {props.children}
        </a>
    )
}
export default Item;

// Eu poderia utilicar também o props.texto, por exemplo
// E na tag html em app.js eu chamaria Item texto="nome"
// Poderia também, utilizar um props no className e desta forma
// Atribuir uma classe para cada um dos itens