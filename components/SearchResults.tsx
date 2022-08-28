import { useMemo } from "react";
import { Product } from "../dtos/ProductDTO";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Product[],
  totalPrice: number,
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, totalPrice, onAddToWishlist }: SearchResultsProps) {
  /*const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0)
  }, [results])*/

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
        );
      })}
    </div>
  )
}