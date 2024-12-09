import React from "react";
import products from "../../assets/images/products/products.js";

function Products() {
  return (
    <div className="relative flex gap-10 overflow-x-scroll h-[40vh]">
      {Object.entries(products).map(([key, product], index) => (
        <div
          key={index}
          className="flex-shrink-0 flex flex-col items-center justify-center px-4 py-4"
        >
          <img
            src={product}
            className="rounded-full border-dashed border-4 border-fuchsia-400 w-32 h-32"
            alt={`Product ${index + 1}`}
          />
          <h3 className="text-fuchsia-600 text-xl mt-2">Vanilla</h3>
          <p className="outfit text-base text-center">Lorem, ipsum. lorem</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
