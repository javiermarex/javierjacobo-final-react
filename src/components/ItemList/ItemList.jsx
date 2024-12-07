import Item from "../Item/Item"

function ItemList({products}) {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map( product => <Item key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default ItemList