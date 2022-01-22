import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Main from './Components/Main';
import Product from './Components/Product';
import Footer from './Components/Footer';
import PayContact from './Components/PayContact';
import SocialMediaLinks from './Components/SocialMediaLinks';
import SearchItems from './Components/SearchItems';


function App() {

  const [products, setProducts] = useState([])
  const [cartItems, setcartItems] = useState([]);

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

      <Header countCartItems={cartItems.length} />

        <Routes>

          <Route path="/" element={<Main onAdd={onAdd} products={products} />}></Route>
          <Route path="/cart" element={<Cart onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>}></Route>
          <Route path="/product/:id" element={<Product onAdd={onAdd} products={products}/>}></Route>
          <Route path="/payment" element={<PayContact onRemove={onRemove} onAdd={onAdd} cartItems={cartItems}/>}></Route>
          <Route path="/" element={() => <div>Home</div>} />
          <Route path="/social" element={<SocialMediaLinks/>} />
          <Route path="/" element={<SearchItems products={products}/>}></Route>


        </Routes>

      <Footer />    

    </Router>

      
</>
    
  );
}


export default App;
