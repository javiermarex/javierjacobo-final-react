// function CartWidget() {
//   return (
//     <a className="nav-link flex items-center space-x-1" href="#">
//         <span className="text-white">0</span>
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12M10 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
//         </svg>
//     </a>
//   )
// }

// export default CartWidget


import './CartWidget.css';
import { useCart } from "../../hooks/useCart";
//import { useContext} from 'react';
//import { CartContext } from '../../context/CartContext';

function CardWidget() {

  const {totalQuantity} = useCart();
  //const {totalQuantity} = useContext(CartContext);
  return (

    <a className="nav-link flex items-center space-x-1" href="/Cart">
        
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12M10 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
        <span className="text-white">{totalQuantity}</span>
    </a>
 
  );
}

export default CardWidget;