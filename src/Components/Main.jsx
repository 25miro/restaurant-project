import React, { useState} from 'react';
import ProductList from './ProductList';
import Product from './Product';

export default function Main(props) {

    const {products, onAdd} = props;
    const [category, setCategory] = useState('Saladas');

    const categories = [...new Set(products.map( m => m.category))];
    const menuInCategory = products.filter( m => m.category === category);//Variavel que chama o json e faz iteração por todos os elementos (chama os elementos 1 a 1)


    
    const changeCategory = ({target:{value}}) =>{
        //setGroup(e.target.value)
        setCategory(value);
        //setBookableIndex(0);
    }


    return (
        <>
        <main className="block col-2">
            <h2>Listagem de Menus</h2>

            <select className="menuSelected" value={category} onChange={changeCategory}>
                {
                    categories.map(c => <option key={c} >{c}</option>)
                }
            </select>

            <section className="row">
                <ul>
                {
                    menuInCategory.map( (dish,i) => (
                      <>
                        <li className='cards_item'>
                          <div className='card'>

                            <div className='card__image card__image--fence'></div>
                            <div className='card__content'>
                              <div className='card__title'><h1 >{dish.name}</h1></div>
                              <p className='card__text'><h2 >{dish.description}</h2></p>
                             <div > <img className="small" src={dish.image} alt={dish.name}/></div>
                              <button className='btn btn--block card__btn' onClick={() => onAdd(dish)}>Add to Cart</button>
                            </div>

                          </div>
                        </li>
                  </>
                        
                    ) )
                }
                </ul>
            </section>
            

            {/*
            
            <div className="row">
                {
                    menuInCategory.map( (dish,i) => (
                        <section className='cards'>
                        {
                        products.map((product) => (
                        <Product key={product.id} product={product} onAdd={onAdd}></Product>
                             ))
                        }
                        </section>
                    )
                  )
                } 
            </div>
            */}


        </main>
        </>
    )
}
