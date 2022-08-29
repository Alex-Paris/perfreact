import { useMemo } from "react";
import { List, ListRowRenderer } from 'react-virtualized';

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

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} onAddToWishlist={onAddToWishlist} />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300} // Can use AutoSizer if you don't want to set a height
        rowHeight={30}
        width={900}
        overscanRowCount={5} // How many row will be pre-loaded after actual monitor can show.
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* results.map(product => {
        return (
          <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
        );
      }) */}
    </div>
  )
}