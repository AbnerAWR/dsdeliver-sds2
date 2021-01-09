import { useEffect, useState } from 'react'
import { fetchProducts } from '../api';
import Footer from '../Footer';
import OrdersLocation from './OrderLocation';
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { OrderLocationData, Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>()  

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []); 

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrdersLocation onChangeLocation={location => setOrderLocation(location)} />
            <Footer />
        </div>
        
    )
}

export default Orders;