import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'
import { ShopContext } from '../context/ShopContext'

const BestSellers = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    console.log(products)
    useEffect(()=>{
        if (products.length > 0) {
            const bestProducts = products.filter((item) => item.bestseller); // Filtering best sellers
            setBestSeller(bestProducts.slice(0, 5)); // Limiting to 5 items
        }
    },[products])

return (
    <div className='my-10 sm:my-16'>
        <div className='text-center text-2xl sm:text-3xl mb-6'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 text-xs sm:text-sm md:text-base mt-3 m-auto text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus sapiente ex qui illum eius deserunt eveniet aut, consectetur tempore </p>
        </div>
        <div className='grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {
                bestSeller.map((item,index) => (
                    <ProductItems key={index} name={item.name} price={item.price} image={item.image} id={item._id} />
                ))
            }
        </div>
    </div>
)
}

export default BestSellers
