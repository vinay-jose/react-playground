import { useEffect, useState } from "react";
import axios from "axios"; 

const APIDataFetch = () => {

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

        // axios.get('https://fakestoreapi.com/products')
        //     .then(res=>{
        //         console.log(res);
        //         setProducts(res.data);
        //         setLoader(false);
        //     })
        //     .catch(error => console.log(error));
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
                                </div>
                            )
                        })
                    }
                </>
            }
        </>
    )

};

export default APIDataFetch;