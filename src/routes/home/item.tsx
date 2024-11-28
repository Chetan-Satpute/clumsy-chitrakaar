import {Product} from '~/data/products';

interface ItemProps {
  product: Product;
}

function Item(props: ItemProps) {
  const {product} = props;

  return (
    <div className="cursor-pointer hover:scale-110 transition">
      <div className="aspect-square w-40 lg:w-64 bg-orange-200 rounded-md overflow-hidden">
        <img src={product.primaryImage} className="object-cover" />
      </div>
      <div className="py-2">
        <h6 className="font-extrabold text-base text-center">{product.name}</h6>
        <p className="font-extrabold text-base text-center gap-1 flex justify-center">
          {product.secondaryPrice && (
            <span className="line-through decoration-2 font-extrabold text-neutral-300">
              ₹{product.secondaryPrice}
            </span>
          )}
          <span>₹{product.price}</span>
        </p>
      </div>
    </div>
  );
}

export default Item;
