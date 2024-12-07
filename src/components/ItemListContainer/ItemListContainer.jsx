import { useEffect, useState } from "react"
import {db} from "../../services/firebase"
import {collection, getDocs, query, where} from 'firebase/firestore'
import ItemList from "../ItemList/ItemList.jsx"
import { useParams } from "react-router-dom"

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{

      const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))   // filtrados por categoria
        : collection(db, "products")    // todos los productos
      
        getDocs(collectionRef)
          .then((querySnapshot)=>{
            const productos = querySnapshot.docs.map((doc)=>{
              return {id: doc.id, ...doc.data()}
            })
            setProducts(productos)
            setNotification("succes", "Producto encontrado");
          })
          .catch((error)=>{
            setNotification("danger", "No es posible obtener productos");
            console.log(error)
          })
          .finally(()=>{
            setLoader(false)
          })
    }, [categoryId])
  return (
    <>
        <h2>{greetings}</h2>
        <ItemList products={products} />
    </>
  )
}

export default ItemListContainer