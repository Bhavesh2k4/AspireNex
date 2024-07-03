"use client"
import { useState } from 'react';
import Image from "next/image"
import Searchbar from "@/components/Searchbar"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/types"
import { scrapeAndStoreProduct } from "@/lib/actions"

const Home = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchPrompt: string) => {
    if (!searchPrompt) return;

    try {
      setIsLoading(true);
      const scrapedProduct = await scrapeAndStoreProduct(searchPrompt);
      if (scrapedProduct) {
        setProduct(scrapedProduct);
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center"> 
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Your Tool for Smarter Shopping
              <span className="text-primary">Price Patrol</span>
            </h1>

            <p className="mt-6">
              Discover savings with ease
            </p>
            <Searchbar onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {isLoading && <p>Searching for product...</p>}

      {product && (
        <section className="flex flex-col gap-10 px-6 md:px-20 py-24">
          <h2 className="text-3xl font-bold">Product Details</h2>
          <ProductCard product={product} />
        </section>
      )}
    </>
  )
}

export default Home