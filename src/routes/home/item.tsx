import {Product} from '~/data/products';

interface ItemProps {
  product: Product;
}

function Item(props: ItemProps) {
  const {product} = props;

  return (
    <div className='cursor-pointer hover:scale-110 transition'>
      <div className="p-3 bg-green-200">
        <div className="aspect-square w-36 bg-orange-200 rounded-md"></div>
      </div>
      <div className="py-2">
        <h6 className="font-extrabold text-base text-center">{product.name}</h6>
        <p className="font-extrabold text-base text-center">{product.price} /-</p>
      </div>
    </div>
  );
}

export default Item;
