import {useState, useEffect} from 'react';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Main from './Components/Main';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './Components/Hero';

function App() {


  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('Carnes');
  //const {products} = data;
  const [cartItems, setcartItems] = useState([]);
  const categories = [...new Set(products.map( m => m.category))];
  const ItemInCategory = products.filter( m => m.category === category);//Variavel que chama o json e faz iteração por todos os elementos (chama os elementos 1 a 1)


  //Chamada do Json com os Dados
  useEffect(() => {
    fetch ('https://61ddf3cdf60e8f0017668b42.mockapi.io/api/Menu')
        //Recebe resposta de uma promise que dizemos que o json que vem é para transformar em formato javascript 
        .then(resp => resp.json())
        //Os dados que recebo alteram o state "setMenus"
        .then(data => setProducts(data))
  }, [])
//Fim da chamada do Json com os Dados

  //Function to Add item to Cart, but if already exist, plus 1 to item in the cart 
  const onAdd = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist){
      setcartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x)
      )
    }else{
      setcartItems([...cartItems, {...product, qty: 1 }])
    }
  };

  //Function to Remove quantity to item, but if only have 1 quantity, the item  disappear to cart  
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1){
      setcartItems(
        cartItems.filter((x) => x.id !== product.id )
      );
    }else{
      setcartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
      )
    }
  };

  return (
    <>
    <Router>
      <Routes>
      <Route path="/cart" exact element={<Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>} />
        
      
      </Routes>
      </Router>

      <div className="container">
      <Header className="container" countCartItems={cartItems.length} />
      <Hero />
        <div className="row">
          <Main onAdd={onAdd} products={products} />
          <Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>
        </div>
      </div>
      </>
  );
}

export default App;
