import React, { useState} from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';
import SearchItems from './SearchItems';
import Modal from './Modal';

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
        <SearchItems />
        <Hero />

            
        <main className="container">
           <div className='block-main-list'><h2>Listagem de Menus</h2></div>

           <div className="column-md-12 d-flex justify-content-between mb-3">
               
                   {
                       categories.map(c => 
                       <>
                        <div className="d-flex card" key={c.id}>
                            <div className="mb-2" >
                               
                                        <div><img className="card-img-top card-item-img-list" src={categories[1].image} alt={categories[1].description}/></div>

                            </div>
                        {c}

                        </div>
                       </>          
                                    )
                   }

           </div>

           <div className="input-group d-flex justify-content-center mb-5">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Seleccione a Categoria: </label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" value={category} onChange={changeCategory}>
                        {
                        categories.map(cat => <option key={cat} >{cat}</option>)
                        }
                    </select>
            </div>

            <section className='d-flex' >
                <ul className='d-flex flex-wrap' >
                {
                    itemInCategory.map( (item,i) => (
                    <>
                        <li key={item.id}>    
                             <div className='card d-flex'>  
                                    <div><h4 className='my-0 fw-normal title-card p-3'>{item.name}</h4></div>
                                    
                                    <div><img className="card-img-top card-item-img-list" src={item.image} alt={item.description}/></div>
                                    <div className="description-card"><h2>{item.description}</h2></div>
                                    <div className="price-label">Preço: {"\u20AC" + item.price}</div>

                                <div className="mb-3">
                                       <Link to={`/product/${item.id}`}> <button className="btn btn-outline-secondary margin-btn">Ver Mais</button></Link>
                                            <button className="btn btn-outline-secondary" onClick={() => onAdd(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg> Adicionar
                                            </button>
                                </div>
                                <div>
                                <SocialMediaLinks/>
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
