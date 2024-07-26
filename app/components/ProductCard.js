"use client";

const ProductCard = ({ imageSrc, name, price, addToCart }) => {
 return (
   <div className="card card-compact bg-base-100 w-full shadow-xl border">
     <figure>
       <img
         src={imageSrc}
         alt={name}
         className="w-full object-cover rounded hover:scale-110"
       />
     </figure>
     <div className="card-body">
       <div className="flex justify-between">
         <h2 className="card-title text-lg">{name}</h2>
         <p className="text-black mb-2 text-right text-lg font-bold">{price} บาท</p>
       </div>

       <div className="card-actions justify-center">
         <button
           onClick={() => addToCart({ imageSrc, name, price, quantity: 1 })}
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full rounded-lg"
         >
           เพิ่มลงตะกร้า
         </button>
       </div>
     </div>
   </div>
 );
};
export default ProductCard;