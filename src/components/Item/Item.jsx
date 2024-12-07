import { Link } from "react-router-dom"


function Item({product}) {
  return (
    <div className="card max-w-xs rounded overflow-hidden shadow-lg bg-white">
  <img src={product.img} alt={product.name} className="card-img-top" />
  <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
    <p className="text-xl font-bold text-blue-600 mb-2">${product.price}</p>
    <p className="text-gray-600 mb-4">{product.description}</p>
    <Link 
      to={`/detail/${product.id}`} 
      className="block text-center bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
    >
      Ver detalle
    </Link>
  </div>
</div>

  )
}

export default Item