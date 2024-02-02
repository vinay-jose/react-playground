import { useEffect, useState } from "react";
import axios from "axios"; 
import { NavLink } from "react-router-dom";

const Store = () => {
    const [products, setProducts] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log(response);
                setProducts(response.data);
                setLoader(false);
            } catch (error) {
                console.error(error);
            }
        }
        getData();

    }, [])

    return(
        <>
            {
                loader ?
                <p>Loading...</p>
                :
                <>
                    {
                        products.map(product => {
                            return(
                                <div key = {product.id}>
                                    <img height="10%" width="10%" src={product.image} alt={product.title}/>
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                    <h3>₹ {product.price}</h3>
                                    <button>
                                        <NavLink
                                            to={`/product/${product.id}`}
                                        >
                                            Buy Now!
                                        </NavLink>
                                    </button>
                                </div>
                            )
                        })
                    }
                </>
            }
        </>
    )
};

export default Store;