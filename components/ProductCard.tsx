import { Product } from '@/types' 
import Image from 'next/image'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex-shrink-0">
        <Image 
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.description || 'No description available'}</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-primary mb-2">
            {product.currency}{product.currentPrice}
          </p>
          {product.originalPrice > product.currentPrice && (
            <p className="text-gray-500 line-through">
              {product.currency}{product.originalPrice}
            </p>
          )}
          {product.discountRate > 0 && (
            <p className="text-green-600 font-semibold">
              {product.discountRate}% OFF
            </p>
          )}
          <button className="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
            View on Amazon
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard