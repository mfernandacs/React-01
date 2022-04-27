import Card from './Components/Item/Card/Index';
import Item from './Components/Item/Index';

const App = () => {
  return(
    <>
    <h1>Minha Primeira Aplicação com React</h1>
    <ul className="list-group">
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
    </ul>
    <Card/>
    </>
  )
}

export default App;
