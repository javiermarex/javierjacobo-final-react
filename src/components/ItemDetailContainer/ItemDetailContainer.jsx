// import { useEffect, useState } from "react"
// import {getProducts, getProductsByCategory} from '../asyncMock.js'
// import ItemList from "./ItemList.jsx"
// import { useParams } from "react-router-dom"

// function ItemListContainer({greetings}) {
//     const [products, setProducts] = useState([])
//     const {categoryId} = useParams()

//     useEffect(()=>{
//         const asyncFunctions = categoryId ? getProductsByCategory : getProducts
//         asyncFunctions(categoryId)
//             .then(data => setProducts(data))
//     }, [categoryId])
//   return (
//     <>
//         <h2>{greetings}</h2>
//         <ItemList products={products} />
//     </>
//   )
// }

// export default ItemListContainer


import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import './ItemDetailContainer.css'


import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const [loader, setLoader] = useState(false)
  const { productId } = useParams();

  useEffect(()=>{
    setLoader(true);
    getDoc(doc(db, 'products', productId))
      .then((querySnapshot) => {
        const prod = {id: querySnapshot.id, ...querySnapshot.data()}
        setProduct(prod)
      })
      .catch((err)=> {
        console.log(err)
      })
      .finally(()=>{
        setLoader(false)
      })
  }, [productId])

  return (
    <>
      {loader 
        ? <h4>Loading...</h4> 
        : <ItemDetail {...product} />
      }
    </>
  );
}

export default ItemDetailContainer