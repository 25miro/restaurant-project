import React, { useState} from 'react';

export default function SearchItems(props) {

    const {products} = props;
    const [searchItem, setSearchItem] = useState("");

    const searchItemFunc = (event) =>{
        setSearchItem(event.target.value);
    }



    return (
 <>
      {/* <div> 
            <div className="navManuCart">
                <form className="form-inline d-flex p-3">
                        <input className="form-control" type="search" placeholder="Pesquisar" onChange={searchItemFunc}/>

                {products.filter((value) => {
                        if(searchItem === ""){
                            return value
                        } else if(value.name.toLowerCase().includes(searchItem.toLowerCase())) {
                            return value
                        }
                    }).map((value, key) =>{
                        return(
                            <div key={key}>
                                <p>{value.name}</p>
                            </div>
                        );
                    })
                }
                </form>
            </div>
        </div>*/}

</>

    )
}
