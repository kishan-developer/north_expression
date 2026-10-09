"use client";

interface Product {
  id: number;
  name: string;
  category: string;
  color: string;
  price: number;
  description: string;
  images: string[];
  hoverImage: string;
}

interface Props {
  product: Product;
  onView: () => void;
}

const ProductCard = ({ product, onView }: Props) => {
  const mainImage = product.images?.[0] || "/placeholder.jpg";
  const hoverImage = product.hoverImage || mainImage;

  return (
    <div
      className="
        bg-[#0e0e0e]
        border border-white/10
        rounded-2xl
        overflow-hidden
        group
        transition
        hover:border-white/30
        h-[520px]            /* 🔥 INCREASE CARD HEIGHT */
        flex flex-col
      "
    >
      {/* IMAGE AREA */}
      <div className="relative h-[300px] overflow-hidden">
        {/* MAIN IMAGE */}
        <img
          src={mainImage}
          alt={product.name}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            transition-all duration-700
            group-hover:opacity-0
            group-hover:scale-110
          "
        />

        {/* HOVER IMAGE */}
        <img
          src={hoverImage}
          alt={`${product.name} hover`}
          className="
            absolute inset-0
            w-full h-full
            object-cover
            opacity-0
            transition-all duration-700
            group-hover:opacity-100
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold tracking-wide">
            {product.name}
          </h3>

          {/* <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p> */}
        </div>

        <button
          onClick={onView}
          className="
            mt-6
            w-full
            border border-white/30
            py-2.5
            rounded-lg
            hover:bg-white
            hover:text-black
            transition
          "
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
