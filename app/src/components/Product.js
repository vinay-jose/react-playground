import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; 

const Product = () => {
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(true);

    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        async function getProduct(){
            try{
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                console.log(response);
                setProduct(response.data);
                setLoader(false);
            }
            catch(error){
                console.error(error);
            }
        }
        getProduct();
    },[id]);

    return (
        <>
            {
                loader ?
                <p>Loading...</p>
                :                    
                <div key = {product.id}>
                    <img height="10%" width="10%" src={product.image} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <h3>₹ {product.price}</h3>
                    {/* <button>Buy now!</button> */}
                </div>
            }
        </>
    )
};

export default Product;