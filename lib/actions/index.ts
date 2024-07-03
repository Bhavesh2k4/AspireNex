"use server"

import { scrapeAmazonProduct } from "../scraper";
import { Product } from "@/types";

export async function scrapeAndStoreProduct(productUrl: string): Promise<Product | null> {
  if(!productUrl) return null;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    return scrapedProduct;
  } catch (error: any) {
    console.error(`Failed to create/update product: ${error.message}`);
    return null;
  }
}