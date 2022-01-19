import React, { useState} from 'react';
import ProductList from './ProductList';
import Product from './Product';

export default function Main(props) {

    const {products, onAdd} = props;
    const [category, setCategory] = useState('Saladas');

    const categories = [...new Set(products.map( m => m.category))];
    const itemInCategory = products.filter( m => m.category === category);//Variavel que chama o json e faz iteração por todos os elementos (chama os elementos 1 a 1)


    
    const changeCategory = ({target:{value}}) =>{
        //setGroup(e.target.value)
        setCategory(value);
        //setBookableIndex(0);
    }


    return (
        <>

            
        <main className='container d-flex flex-wrap'>
           <div><h2>Listagem de Menus</h2></div>

            <select className="menuSelected" value={category} onChange={changeCategory}>
                {
                    categories.map(c => <option key={c} >{c}</option>)
                }
            </select>

            <section >
                <ul className='container d-flex flex-wrap' >
                {
                    itemInCategory.map( (item,i) => (
                    <>
                        <li >    
                             <div className='m-4 card' key={i}>  
                                    <div className='card-header py-3'><h4 className='my-0 fw-normal'>{item.name}</h4></div>
                                        <div className='card-body'><h2>{item.description}</h2></div>
                                            <div><img className="card-img-top" src={item.image} alt={item.name}/></div>
                                             <div className='card__text'><h2>Preço: {"\u20AC" + item.price}</h2></div>

                                <div className='btn-group'>
                                            <button className='btn btn-sm btn-outline-secondary' type='button'>Ver Mais</button>
                                            <button onClick={() => onAdd(item)} className='btn btn-sm btn-outline-secondary' type='button'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg> Adicionar
                                            </button>
                                </div>
                            </div>
               
                        </li>
                  </>
                        
                    ) )
                }
                </ul>
            </section>
            
        </main>
        </>
    )
}
