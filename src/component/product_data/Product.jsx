import { useEffect, useState } from "react";
import Product_card from "../All_Card/Card/product_card";

const Product = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-6 px-[370px] py-[50px]">
            {
                product.map(product => <Product_card key={product.id}
                     product={product}
                     >
                     </Product_card>

                )
            }
            
        </div>
    );
};

export default Product;