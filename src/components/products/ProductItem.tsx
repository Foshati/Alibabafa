import React from 'react'
import { ProductType } from '../../../lib/models/ProductType'
import Link from 'next/link'
import Image from 'next/image'

function ProductItem({ product }: { product: ProductType }) {
    return (
        <div className='card bg-base-300 shadow-xl mb-4'>
            <figure>
                <Link href={`/product/${product.slug}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className='object-cover h-64 '
                    />
                </Link>
            </figure>

            <div className='flex flex-col items-center'>
                <Link href={`/product/${product.slug}`}>
                    <h2 className=' p-2'>{product.name}</h2>
                </Link>
                <p className=' text-sm text-yellow-600'>{product.brand}</p>
                <span className='text-sm text-gray-400 '>{product.price} $</span>
                <button className="btn btn-primary">Buy Now</button>


            </div>
        </div>
    )
}

export default ProductItem
